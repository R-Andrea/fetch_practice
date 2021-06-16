function movieSection (paramTitle, paramYear) {
    return `
            <section class="movie">
                <h2>${paramTitle}</h2>
                <time>${paramYear}</time>
            </section>
            `;
}





//async await -> 

// promise - ugy kommunikal ket resz egymassal hogy van egy valtozo,d de nem tudom mikor lesz erteke, ezert igeretet adok arra, hogy lesz ott majd egy ertek. harom allapota van: - rejected, pending, fulfilled

//promise-ra epul a fetch, js nem tudja meddig fog tartani, ezert a fetch is egy pending promise-t ad vissza, majd miutan elkeszult lesz rejected v fulfilled.

//ha egy valtozoba szeretnem elmenteni, fontos hogy csak akkor kezdjunk el dolgozni a valtozoval amikor a promise fulfilled v rejected (nem pending) => await
// const response - elobb lesz egy pending erteke, az await adding var amig 

// await response.json -os sor => probald meg parsing-olni json formatumba. ez is tobb ido, ezert kell az await

//await mint kifejezes csak async fuggvenyekben fog mukodni (function ele be kell irni h async)

//ha .then-t hasznalunk akkor a fetch nem valtozoban van hanem a .then-nel varjuk meg hogy a fetch befejezodjon

// amikor "." - ot latunk akkor az metodus osszelancolas (chaining)

//fetch fuggveny return-nel ter vissza, komplex dolgot return-ol, pl a then metodussal, amit ujra tudunk hasznalni

//



async function loadEvent (){

    const rootElement = document.getElementById("root");

    const response = await fetch("data.json");
    const moviesData = await response.json();

    //console.log(moviesData.movies)

    for (let movie of moviesData.movies) {
        //console.log(movie.title)

        rootElement.insertAdjacentHTML("beforeend", movieSection(movie.title, movie.year))

    }
    
        //working example (ez alabb mind egy sor, nem szabad pontosvesszot tenni a vegere)
        // fetch("data.json")
        //     .then(response => response.json())
        //     .then(data => console.log(data.movies[0].title))

        //fetch("data.json").then(response => response.json()).then(data => console.log(data.movies[0].title))

    // my failed attempt as the moviesJSON was too large
    // localStorage.setItem("moviesJSON", moviesJSON)

    // fetch(moviesJSON)
    //     .then(response => response.json())
    //     .then(data => console.log(data))

    

};

window.addEventListener("load", loadEvent)