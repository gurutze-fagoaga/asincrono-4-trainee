/*---------------- VARIABLES Y CONSTANTES ----------------*/

const body = document.querySelector("#body");
const listaDeItems = document.querySelectorAll("#navItem-link");
const listaDeContenedores = document.querySelectorAll(".navItem");

const listaDeImagenes =
    [
        "./img/cover-zpump.jpg",
        "./img/cover-coach2o.jpg",
        "./img/cover-revista-car.jpg",
        "./img/cover-emotional-pulse.jpg",
        "./img/cover-alhambra.jpg",
        "./img/cover-actimel.jpg",
        "./img/cover-ffuuss.jpg",
        "./img/cover-delicious.jpg",
        "./img/cover-roca.jpg",
        "./img/cover-deep-state.jpg"
    ]


/*---------------- FUNCIONES Y EVENT LISTENERS ----------------*/


listaDeItems.forEach((item, id) => {

    // añadir la clase active a todos los items  
    item.classList.add("active");

    /*-------- ESTILOS DE FONDO EN MOUSEOVER" --------*/

    function cambiarEstilos()  {
        body.style.backdropFilter= "brightness(0.5)";
        body.style.backgroundImage = `url('${listaDeImagenes[id]}')`;
        body.style.backgroundSize = "cover";
        body.style.transition = "all .8s ease";
    }


    /*---------- EVENT LISTENER "MOUSEOVER" --------*/


    item.addEventListener("mouseover", () => {



        // cambiar el fondo al hacer mouseover
        cambiarEstilos();

        // elimino la clase active a todos los items

        listaDeItems.forEach(item => {
            item.classList.remove("active");

        })


        // añadir la clase active al item que me interesa 
        item.classList.add("active");

    })

    /*---------- EVENT LISTENER "MOUSEOUT" --------*/

    item.addEventListener("mouseout", () => {
        // cambiar fondo al hacer mouseout
        body.style.backdropFilter= "brightness(0)";
        body.style.backgroundImage = `none`;

        // eliminar la clase active al hacer mouseout
        listaDeItems.forEach(item => {
            item.classList.add("active");
        })
       
        // transiciones 
        body.style.transition = "all .8s ease";
        item.style.transition = "opacity .8s ease";

    })

});







