package main

import (
	"log"
	"net/http"

	"github.com/maxence-charriere/go-app/v9/pkg/app"
)

type myCompo struct {
	app.Compo
}

func (f *myCompo) Render() app.UI {

	return app.Div().Body(
		app.H1().
			Class("title").
			Text("GOIMAGINARY"),
		app.P().
			Class("tekst").
			Text("just GO into the IMAGINARY world"),
	)
}

func main() {

	app.Route("/", &myCompo{})

	app.RunWhenOnBrowser()

	http.Handle("/", &app.Handler{
		Name:        "Compo",
		Description: "My compo",
		Styles: []string{
			"/web/compo.css",
		},
	})

	if err := http.ListenAndServe(":8000", nil); err != nil {
		log.Fatal(err)
	}

	err := app.GenerateStaticWebsite(".", &app.Handler{
		Name:        "Hello",
		Description: "An Hello World! example",
		Resources:   app.GitHubPages("yomako.github.io"),
		Styles: []string{
			"/web/compo.css",
		},
	})

	if err != nil {
		log.Fatal(err)
	}
}
