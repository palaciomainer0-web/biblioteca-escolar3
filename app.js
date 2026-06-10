const libros = [
{
id: 1,
titulo: "Don Quijote",
autor: "Miguel de Cervantes",
categoria: "Ficción",
disponible: true,
vecesPrestado: 25
},
{
id: 2,
titulo: "JavaScript Moderno",
autor: "Juan Pérez",
categoria: "Tecnología",
disponible: false,
vecesPrestado: 18
},
{
id: 3,
titulo: "Física Básica",
autor: "Carlos López",
categoria: "Ciencia",
disponible: true,
vecesPrestado: 12
}
];

function renderizarLibros() {

const contenedor = document.getElementById("libros");

contenedor.innerHTML = "";

libros.forEach(libro => {

contenedor.innerHTML += `
<div class="col-md-4">
<div class="card mb-3">
<div class="card-body">

<h5>${libro.titulo}</h5>

<p><strong>Autor:</strong> ${libro.autor}</p>

<p><strong>Categoría:</strong> ${libro.categoria}</p>

<p><strong>Préstamos:</strong> ${libro.vecesPrestado}</p>

</div>
</div>
</div>
`;
});
}

function agregarLibro() {

const titulo =
document.getElementById("titulo").value.trim();

const autor =
document.getElementById("autor").value.trim();

const categoria =
document.getElementById("categoria").value;

if(!titulo || !autor){

alert("Complete todos los campos");
return;
}

const existe = libros.some(libro =>
libro.titulo.toLowerCase() === titulo.toLowerCase()
&&
libro.autor.toLowerCase() === autor.toLowerCase()
);

if(existe){

alert("Este libro ya existe.");
return;
}

libros.push({
id: Date.now(),
titulo,
autor,
categoria,
disponible: true,
vecesPrestado: 0
});

renderizarLibros();

generarReporteMasLeidos();
}

function generarReporteMasLeidos(){

const reporte = [...libros]
.sort((a,b)=>
b.vecesPrestado - a.vecesPrestado);

let html =
"<h4>Libros Más Leídos</h4><ol>";

reporte.forEach(libro => {

html += `
<li>
${libro.titulo}
(${libro.vecesPrestado} préstamos)
</li>
`;
});

html += "</ol>";

document.getElementById("reporteLibros")
.innerHTML = html;
}

function cambiarTema(){

document.body.classList.toggle("bg-dark");
document.body.classList.toggle("text-light");
}

renderizarLibros();

generarReporteMasLeidos();
