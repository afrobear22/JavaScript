//+++++++++++++++++++++++++++++++++
// domasno niza od filmovi vo DOM

var h1 = document.createElement("h1");
h1.appendChild(document.createTextNode("Top 5 movies"));
h1.innerHTML = "Top 5 movies";
h1.style.textAlign = "center";

var _body = document.body;
_body.prepend(h1);


let mov_btn = document.querySelector(".tbl-btn");
mov_btn.style.textAlign = "center";
mov_btn.style.border = "3px double black";
mov_btn.style.backgroundColor = "lightgreen";

let movies = [
    {
        movieTitle: "Inception",
        year: 2010,
        runningTime: "2h28min",
        genre: ["adventure", "action", "sci-fi"],
        cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
    },
    {
        movieTitle: "Interstellar",
        year: 2014,
        runningTime: "2h49min",
        genre: ["drama", "adventure", "sci-fi"],
        cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    },
    {
        movieTitle: "The Intouchables",
        year: 2011,
        runningTime: "1h52min",
        genre: ["comedy", "drama", "biography"],
        cast: ["Francois Cluzet", "Omar Sy", "Anne Le Ny"],
    },
    {
        movieTitle: "Joker",
        year: 2019,
        runningTime: "2h2min",
        genre: [ "crime", "thriller", "drama"],
        cast: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz"],
    },
    {
        movieTitle: "Tenet",
        year: 2020,
        runningTime: "2h30min",
        genre: ["action", "thriller", "sci-fi"],
        cast: ["John David Washington", "Robert Pattinson", "Elizabeth Debicki"],
    },
];

let headers = ["Movie Title", "Year", "Running time", "Genre", "Cast"];


mov_btn.addEventListener('click', () => {
    let table = document.createElement("table");
    table.style.border = "3px double black";
    table.style.borderCollapse = "collapse";
    table.style.backgroundColor = "lightblue";
    table.style.margin = "auto";

    let headerRow = document.createElement("tr");

    headers.forEach(headerText => {
        let header = document.createElement("th");
        header.style.border = "1px solid black";
        header.style.backgroundColor = "yellow";
        header.style.padding = "10px 10px";
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });

    table.appendChild(headerRow);

    movies.forEach(movie => {
        let row = document.createElement("tr");
        row.style.border = "1px solid black";
        
        
        Object.values(movie).forEach(text => {
            let cell = document.createElement("td");
            cell.style.border = "1px solid black";
            cell.style.textAlign = "center";
            cell.style.padding = "10px 10px";
            let textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
            
        })

        table.appendChild(row);

    });
   
    _body.appendChild(table);

});




