package app

import (
	"embed"
	"io/fs"
	"net/http"
	"os"
)

//go:embed all:landing/*
var landingFiles embed.FS

//go:embed all:shared/*
var sharedFiles embed.FS

//go:embed all:xconf/*
var xconfFiles embed.FS

// BuildUIAssets builds the UI assets by running the compilation process
// This should be called by the consuming application during its build process
func BuildUIAssets() error {
	// This function should be called by the main project to build UI assets
	// The actual build logic will be implemented by the consuming project
	return nil
}

// RouteUiFiles sets up routing for UI files
// It serves compiled files if they exist in the filesystem (built by consuming project)
// Otherwise serves source files directly for development
func RouteUiFiles(mux *http.ServeMux) {
	// Check if compiled files exist in the filesystem
	compiledDir := "app/compiled"
	if _, err := os.Stat(compiledDir); err == nil {
		// Serve compiled files from filesystem if they exist
		mux.Handle("/app/compiled/", http.StripPrefix("/app/compiled/", http.FileServer(http.Dir(compiledDir))))
	}

	// Always serve source files for development and fallback
	mux.Handle("/app/landing/", http.StripPrefix("/app", http.FileServer(http.FS(landingFiles))))
	mux.Handle("/app/shared/", http.StripPrefix("/app", http.FileServer(http.FS(sharedFiles))))
	mux.Handle("/app/xconf/", http.StripPrefix("/app", http.FileServer(http.FS(xconfFiles))))
}

// GetCompiledFilesFS returns an embedded filesystem for compiled files if they exist
// This is used when compiled files are embedded in the consuming application
func GetCompiledFilesFS() (fs.FS, error) {
	// This will be implemented by the consuming project to embed their compiled files
	return nil, fs.ErrNotExist
}
