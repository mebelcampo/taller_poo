class Libros {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
    }
}

class LibroDigital extends Libros {
    constructor(titulo, autor, tamaño) {
        super(titulo, autor);
        this.tamaño = tamaño;
    }
}

class LibroFisico extends Libros {
    constructor(titulo, autor, numPag) {
        super(titulo, autor);
        this.numPag = numPag;
    }
}

let libros = [
    new LibroFisico("ser feliz es la neta", "Jorge Bucay", 230),
    new LibroDigital("el principito", "Antoine de Saint-Exupéry", 230)
];

let listarlibros = (libros, autores) => {
    let autoresArray = autores.split(",").map(autor => autor.trim());
    return libros.filter(libro => autoresArray.includes(libro.autor));
};

console.log(listarlibros(libros, "Jorge Bucay, Antoine de Saint-Exupéry"));
