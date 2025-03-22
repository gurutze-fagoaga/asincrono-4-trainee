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

listaDeItems.forEach((item, id) => {

    item.classList.add("active");

    function cambiarEstilos()  {
        body.style.backdropFilter= "brightness(0.5)";
        body.style.backgroundImage = `url('${listaDeImagenes[id]}')`;
        body.style.backgroundSize = "cover";
        body.style.transition = "all .8s ease";
        // body.style.transition = "backgroundImage 0s ease";
    }
    

    item.addEventListener("mouseover", () => {
        // item.classList.add("active");
        cambiarEstilos();
    })

    item.addEventListener("mouseout", () => {
        // item.classList.add("active");
        body.style.backdropFilter= "brightness(0)";
        body.style.backgroundImage = `none`;

    })

    // item.addEventListener("click" , () =>{
    //     item.classList.remove("active");
    //     // item.classList.add("active");
    // })

    

});







