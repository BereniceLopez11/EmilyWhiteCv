const referencias = [
    {
        nombre: "Sam Lopez",
        trabajo: "Departamento de recursos humanos",
        imagen:"ref2.webp",
        texto: "Como jefe de recursos humanos, puedo decir que Emily tiene habilidades altamente desarrolladas por sobre la media del personal. Sus capacidades interpersonales y trabajo en equipo son excelentes."

    },

    {
        nombre: "Laura Martinez",
        trabajo: "Tecnica informatica",
        imagen:"ref3.jpg",
        texto: "Emily tiene una capacidad asombrosa en el manejo de programas tradicionales y sofisticados, su capacidad para aprender nuevas herramientas es admirable.",

    },

    {
        nombre: "Juan Trescher",
        trabajo: "Jefe de personal",
        imagen:"ref4.webp",
        texto: "Siendo jefe de personal describiria a la Srta. White como una persona eficiente, responsable y comprometida con el trabajo. Tiene una gran creatividad y habilidad para resolver problemas."
    },

    {
        nombre: "Leila Juanes",
        trabajo: "Ingeniera de software",
        imagen:"ref1.jpg",
        texto: "Conoci a Emily en la facultad, y el destino nos llevo a trabajar en la misma empresa, gracias a eso puedo asegurar que su trabajo en equipo, junto con susgrandes habilidades y su tenacidad la hacen una increible opcion para los empleos relacionados con sistemas y bases de datos."

    }
]

const imagen = document.getElementById("imagen");
const nombre = document.getElementById("nombre");
const trabajo = document.getElementById("trabajo");
const texto = document.getElementById("texto");

const pbut = document.querySelector(".prev-but");
const nbut = document.querySelector(".next-but");

let itemInicial = 0;

window.addEventListener("DOMContentLoaded", function () {
    nuevaPersona(itemInicial);
})

function nuevaPersona(persona) {
    const item = referencias[persona];
    imagen.src = item.imagen;
    nombre.textContent = item.nombre;
    trabajo.textContent = item.trabajo;
    texto.textContent = item.texto;
}

nbut.addEventListener("click", function (){
    itemInicial++;
    if(itemInicial > referencias.length - 1){
        itemInicial = 0
    }
    nuevaPersona(itemInicial);
});

pbut.addEventListener("click", function (){
    itemInicial--;
    if(itemInicial < 0){
        itemInicial = 3
    }
    nuevaPersona(itemInicial);
});
 

