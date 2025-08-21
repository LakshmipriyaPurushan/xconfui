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

# First attempt shallow clone on branch/tag
if ! git -c advice.detachedHead=false clone --branch "$TAG" --depth 1 "$REPO_URL" xconfui; then
  echo "Shallow clone failed, retrying with fetch..."
  git clone "$REPO_URL" xconfui
  cd xconfui
  git fetch --tags
  git -c advice.detachedHead=false checkout "tags/$TAG" -b "tag-$TAG"
else
  cd xconfui
fi

echo "Clone successful"

echo "Running govulncheck..."
echo "Current directory: $(pwd)"

if [ ! -f go.mod ]; then
  echo "go.mod missing, cannot run govulncheck"
  exit 3
fi
ls -l 
govulncheck -v ./...  >  ~/xconf_vulnerability_reports/xconfui_govulncheck.txt


