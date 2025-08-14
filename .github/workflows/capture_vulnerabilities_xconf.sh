#!/bin/bash
#
#clean all files initially

rm -rf ~/scan_repo  ~/xconf_vulnerability_reports

mkdir -p ~/xconf_vulnerability_reports ~/scan_repo


cd ~/scan_repo

GO_VERSION="1.23.x"

go install golang.org/dl/go${GO_VERSION}@latest
go${GO_VERSION} download

export PATH="$HOME/go/bin:$PATH"

go install golang.org/x/vuln/cmd/govulncheck@latest

export PATH=$PATH:$(go env GOPATH)/bin

#capture xconfui vulnerability reports
git clone https://github.com/rdkcentral/xconfui.git -b main
cd  xconfui
govulncheck ./... >  ~/xconf_vulnerability_reports/xconfui.txt


git clone https://github.com/rdkcentral/xconfadmin.git -b main
cd  xconfadmin
govulncheck ./... >  ~/xconf_vulnerability_reports/xconfadmin.txt


git clone https://github.com/rdkcentral/xconfwebconfig.git -b main
cd  xconfwebconfig
govulncheck ./... >  ~/xconf_vulnerability_reports/xconfwebconfig.txt
