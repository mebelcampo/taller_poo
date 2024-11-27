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
    new LibroFisico("Crónicas de una muerte anunciada", "Gabriel García", 200),
    new LibroDigital("100 años de soledad", "Gabriel García", "2G")
];

let listarlibros = (libros, autor) => {
    return libros.filter(libro => libro.autor=== autor);
}

console.log(listarlibros(libros, 'Gabriel García'));