document.addEventListener("DOMContentLoaded", function () {

    let mainseccion = document.getElementById("infoMain");
    let menu = document.getElementById("closeBoton");
    let cerrar = document.querySelector(".btonCerrar");
    let boton = document.getElementById("btnMenu");

    boton.addEventListener("click", function (event) {
        event.preventDefault();
        menu.style.display = "flex";
        mainseccion.style.gridTemplateColumns = "15% 5% 80%";
    })

    cerrar.addEventListener("click", function (event) {
        event.preventDefault();
        menu.style.display = "none";
        mainseccion.style.gridTemplateColumns = "5% 95%";
    })
})


function displayElement (element, event){
    event.preventDefault();
    let containerMain = document.getElementById("contain-center").children;
    for (let i = 0; i < containerMain.length; i++) {
        
        if (containerMain[i].id === element) {
            containerMain[i].style.display = "block";
            containerMain[i].focus();
            continue;
        } 
        containerMain[i].style.display = "none";
    }
}

function validarFormulario() {
    
    const formulario = document.querySelector(".field-set").children;
    let text = /^[A-Za-z\s]+$/;
    let emailContent = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    for (let i = 0; i < formulario.length; i++){
        if (formulario[i].tagName === "INPUT"){
            if (formulario[i].getAttribute("type") === "text" && (!formulario[i].value || 
                !text.test(formulario[i].value))){
                alert(`El campo ${formulario[i].getAttribute("name")} está vacío o contiene 
                caracteres incorrectos!!`);
                return;
            }
            if (formulario[i].getAttribute("type") === "number" && (!formulario[i].value || 
                isNaN(formulario[i].value))){
                    alert(`El campo ${formulario[i].getAttribute("name")} está vacío o contiene 
                    caracteres incorrectos!!`);
                    return;
            }
            if (formulario[i].getAttribute("type") === "email" && (!formulario[i].value || 
                emailContent.test(formulario[i].value))){
                    alert(`El campo ${formulario[i].getAttribute("name")} está vacío o contiene 
                    caracteres incorrectos!!`);
                    return;
            }
        }
    }
    alert("información enviada");
    return;

}