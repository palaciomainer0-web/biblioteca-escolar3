const libros=[
{titulo:'Don Quijote',autor:'Cervantes',categoria:'Ficción',disponible:true,lecturas:25},
{titulo:'JavaScript Moderno',autor:'Perez',categoria:'Tecnología',disponible:false,lecturas:18},
{titulo:'Fisica Basica',autor:'Lopez',categoria:'Ciencia',disponible:true,lecturas:12}
];

function render(){
const cont=document.getElementById('libros');
cont.innerHTML='';
libros.forEach(l=>{
cont.innerHTML+=`
<div class="col-md-4">
<div class="card mb-3">
<div class="card-body">
<h5>${l.titulo}</h5>
<p>${l.autor}</p>
<p>${l.categoria}</p>
</div>
</div>
</div>`;
});
}

function generarReporteMasLeidos(){
const orden=[...libros].sort((a,b)=>b.lecturas-a.lecturas);
document.getElementById('reporteLibros').innerHTML='<ol>'+orden.map(x=>`<li>${x.titulo} (${x.lecturas})</li>`).join('')+'</ol>';
}

function cambiarTema(){
document.body.classList.toggle('bg-dark');
document.body.classList.toggle('text-light');
}

new Chart(document.getElementById('grafico'),{
type:'bar',
data:{
labels:libros.map(x=>x.titulo),
datasets:[{label:'Lecturas',data:libros.map(x=>x.lecturas)}]
}
});

render();
generarReporteMasLeidos();
