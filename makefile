build:
	@GOARCH=wasm GOOS=js go build -o docs/web/app.wasm ./bin/goimaginary
	@go build -o docs/goimaginary ./bin/goimaginary

run: build
	@cd docs && ./goimaginary local


build-github: build
	@cd docs && ./goimaginary github

github: build-github clean 

test:
	go test ./bin/goimaginary
	GOARCH=wasm GOOS=js go test ./bin/goimaginary

clean:
	@go clean ./...
	@-rm docs/goimaginary