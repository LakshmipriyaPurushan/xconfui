package app

import (
	"embed"
	"net/http"
)

//go:embed all:compiled/*
var compiledFiles embed.FS

//go:embed all:landing/*
var landingFiles embed.FS

//go:embed all:shared/*
var sharedFiles embed.FS

//go:embed all:xconf/*
var xconfFiles embed.FS

func RouteUiFiles(mux *http.ServeMux) {
	mux.Handle("/app/compiled/", http.StripPrefix("/app", http.FileServer(http.FS(compiledFiles))))
	mux.Handle("/app/landing/", http.StripPrefix("/app", http.FileServer(http.FS(landingFiles))))
	mux.Handle("/app/shared/", http.StripPrefix("/app", http.FileServer(http.FS(sharedFiles))))
	mux.Handle("/app/xconf/", http.StripPrefix("/app", http.FileServer(http.FS(xconfFiles))))
}
