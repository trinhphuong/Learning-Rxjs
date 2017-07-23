import { Observable } from 'rxjs';

let output = document.getElementById("output");
let button = document.getElementById("button");

let source = Observable.fromEvent(button, "click");

function load(url: string) {
    let xhr = new XMLHttpRequest();

    xhr.addEventListener("load", () => {
        let movies = JSON.parse(xhr.responseText);
        movies.forEach(m => {
            let div = document.createElement("div");
            div.innerText = m.title;
            output.appendChild(div);
        })
    })

    xhr.open("GET", url);
    xhr.send();
}

source.subscribe(
    e => load("movies.json"),
    e => console.log(`error: ${e}`),
    () => console.log('complete')
);