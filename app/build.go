package app

import (
	"fmt"
	"os"
	"os/exec"
	"path/filepath"
	"strings"
)

// BuildConfig contains configuration for building UI assets
type BuildConfig struct {
	XconfUIPath string // Path to the xconfui dependency
	OutputDir   string // Directory where compiled files should be placed
}

// validatePath checks for path traversal attempts and other security issues
func validatePath(path string) error {
	// Clean the path to resolve any . and .. elements
	cleanPath := filepath.Clean(path)

	// Check for path traversal attempts
	if strings.Contains(cleanPath, "..") {
		return fmt.Errorf("path traversal not allowed: %s", path)
	}

	// Check for absolute paths that might escape intended directories
	if filepath.IsAbs(cleanPath) && !strings.HasPrefix(cleanPath, "/") {
		// Allow absolute paths but be cautious about Windows drive letters
		if len(cleanPath) > 1 && cleanPath[1] == ':' {
			return fmt.Errorf("absolute path with drive letter not allowed: %s", path)
		}
	}

	// Check for null bytes or other control characters
	if strings.ContainsAny(path, "\x00") {
		return fmt.Errorf("null bytes not allowed in path: %s", path)
	}

	return nil
}

// BuildUIAssetsForConsumer builds the UI assets for the consuming project
// This function should be called by the main project during its build process
func BuildUIAssetsForConsumer(config BuildConfig) error {
	if config.XconfUIPath == "" {
		return fmt.Errorf("XconfUIPath is required")
	}

	// Validate input paths for security
	if err := validatePath(config.XconfUIPath); err != nil {
		return fmt.Errorf("invalid XconfUIPath: %v", err)
	}

	if config.OutputDir == "" {
		config.OutputDir = "app/compiled"
	}

	if err := validatePath(config.OutputDir); err != nil {
		return fmt.Errorf("invalid OutputDir: %v", err)
	}

	// Change to the xconfui directory
	originalDir, err := os.Getwd()
	if err != nil {
		return fmt.Errorf("failed to get current directory: %v", err)
	}
	defer os.Chdir(originalDir)

	err = os.Chdir(config.XconfUIPath)
	if err != nil {
		return fmt.Errorf("failed to change to xconfui directory %s: %v", config.XconfUIPath, err)
	}

	// Run npm install
	fmt.Println("Running npm install...")
	cmd := exec.Command("npm", "install")
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr
	if err := cmd.Run(); err != nil {
		return fmt.Errorf("npm install failed: %v", err)
	}

	// Run grunt install to build assets
	fmt.Println("Running grunt install...")
	cmd = exec.Command("grunt", "install")
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr
	if err := cmd.Run(); err != nil {
		return fmt.Errorf("grunt install failed: %v", err)
	}

	// Change back to original directory
	err = os.Chdir(originalDir)
	if err != nil {
		return fmt.Errorf("failed to change back to original directory: %v", err)
	}

	// Copy compiled files to the output directory
	sourceDir := filepath.Join(config.XconfUIPath, "app", "compiled")
	err = copyDir(sourceDir, config.OutputDir)
	if err != nil {
		return fmt.Errorf("failed to copy compiled files: %v", err)
	}

	fmt.Printf("UI assets built successfully and copied to %s\n", config.OutputDir)
	return nil
}

// copyDir recursively copies a directory
func copyDir(src, dst string) error {
	return filepath.Walk(src, func(path string, info os.FileInfo, err error) error {
		if err != nil {
			return err
		}

		// Calculate the destination path
		relPath, err := filepath.Rel(src, path)
		if err != nil {
			return err
		}
		dstPath := filepath.Join(dst, relPath)

		// Validate the destination path for security
		if err := validatePath(dstPath); err != nil {
			return fmt.Errorf("invalid destination path %s: %v", dstPath, err)
		}

		if info.IsDir() {
			return os.MkdirAll(dstPath, info.Mode())
		}

		return copyFile(path, dstPath)
	})
}

// copyFile copies a single file
func copyFile(src, dst string) error {
	sourceFile, err := os.Open(src)
	if err != nil {
		return err
	}
	defer sourceFile.Close()

	// Create the destination directory if it doesn't exist
	if err := os.MkdirAll(filepath.Dir(dst), 0755); err != nil {
		return err
	}

	// Create destination file with explicit permissions (0644 = rw-r--r--)
	destFile, err := os.OpenFile(dst, os.O_CREATE|os.O_WRONLY|os.O_TRUNC, 0644)
	if err != nil {
		return err
	}
	defer destFile.Close()

	_, err = sourceFile.WriteTo(destFile)
	return err
}

// CleanCompiledFiles removes compiled files from the specified directory
func CleanCompiledFiles(outputDir string) error {
	if outputDir == "" {
		outputDir = "app/compiled"
	}

	if _, err := os.Stat(outputDir); os.IsNotExist(err) {
		return nil // Directory doesn't exist, nothing to clean
	}

	return os.RemoveAll(outputDir)
}
