const referencias = [
    {
        nombre: "Sam Lopez",
        trabajo: "Departamento de recursos humanos",
        imagen:"https://i0.wp.com/satelitenorte.com.mx/wp-content/uploads/2020/07/personalidad.jpg?fit=1200%2C930&ssl=1",
        texto: "Como jefe de recursos humanos, puedo decir que Emily tiene habilidades altamente desarrolladas por sobre la media del personal. Sus capacidades interpersonales y trabajo en equipo son excelentes."

    },

    {
        nombre: "Laura Martinez",
        trabajo: "Tecnica informatica",
        imagen:"https://b282c5de4f50ed30d5ce-25e9f6b52714e6c3d4dbb7e330152014.ssl.cf3.rackcdn.com/uploaded_thumb_medium/75ced0231b30d5bbba39592fef39e64d/fotografia_curriculum_linkedin_corporativa_madrid_003.jpg",
        texto: "Emily tiene una capacidad asombrosa en el manejo de programas tradicionales y sofisticados, su capacidad para aprender nuevas herramientas es admirable.",

    },

    {
        nombre: "Juan Trescher",
        trabajo: "Jefe de personal",
        imagen:"https://opem.b-cdn.net/wp-content/uploads/2022/10/foto-curriculum.jpg",
        texto: "Siendo jefe de personal describiria a la Srta. White como una persona eficiente, responsable y comprometida con el trabajo. Tiene una gran creatividad y habilidad para resolver problemas."
    },

    {
        nombre: "Leila Juanes",
        trabajo: "Ingeniera de software",
        imagen:"https://cdn-images.resumelab.com/pages/13_foto_rles.jpg",
        texto: "Conoci a Emily en la facultad, y el destino nos llevo a trabajar en la misma empresa, gracias a eso puedo asegurar que su trabajo en equipo, junto con sus grandes habilidades y su tenacidad la hacen una increible opcion para los empleos relacionados con sistemas y bases de datos."

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
 

