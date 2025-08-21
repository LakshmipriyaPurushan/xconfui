#!/bin/bash
#
#clean all files initially

rm -rf ~/scan_repo  ~/xconf_vulnerability_reports

mkdir -p ~/xconf_vulnerability_reports ~/scan_repo


cd ~/scan_repo

GO_VERSION="1.23.0"
GO_TAR="go${GO_VERSION}.linux-amd64.tar.gz"
GO_URL="https://go.dev/dl/${GO_TAR}"

curl -sSL "$GO_URL" -o "$GO_TAR"

sudo rm -rf /usr/local/go
sudo tar -C /usr/local -xzf "$GO_TAR"

# Update PATH
export PATH="/usr/local/go/bin:$PATH"
go version

go install golang.org/x/vuln/cmd/govulncheck@latest

export PATH=$PATH:$(go env GOPATH)/bin

REPO_URL="https://github.com/rdkcentral/xconfui.git"

TAG=v1.0.2
git -c advice.detachedHead=false clone --branch "$TAG" --depth 1 "$REPO_URL" xconfui || \
  (echo "Shallow clone failed, retrying full clone..." && git -c advice.detachedHead=false clone --branch "$TAG" "$REPO_URL" xconfui)
  
cd xconfui
govulncheck ./... >  ~/xconf_vulnerability_reports/xconfui_govulncheck.txt

