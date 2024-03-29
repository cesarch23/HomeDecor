
// variables
const inputNombreTarjeta = document.getElementById("nombreTarjeta");
const inputNumTarjeta = document.getElementById("numeroTarjeta");
const inputVencimiento = document.getElementById("vencimiento");
const inputCvv = document.getElementById("cvv");
const botonConfirmar = document.getElementById("confirmar");

// eventos
inputNombreTarjeta.addEventListener("input", validarTarjeta)
inputNumTarjeta.addEventListener("input", validarTarjeta)
inputVencimiento.addEventListener("input", validarTarjeta)
inputCvv.addEventListener("input", validarTarjeta)

tarjeta = {
    nombreTarjeta: "",
    numeroTarjeta: "",
    vencimiento: "",
    cvv: ""
}
botonConfirmar.addEventListener("click",(e)=>{
    e.preventDefault();
    const confirmacion = document.getElementById("confirmacion");
    confirmacion.reset();
    Toastify({
        text: "Compra finalizada con exito",
        duration:1500,
        gravity:"bottom",
        position: "center",
        style: {
            background: "linear-gradient(to right,rgb(0,176,155),rgb(150,201,61))",
            color:"#fff",
            padding:"3rem",
            fontSize:"2rem",
            fontWeight:"900",
            textAlign:"center"
        }
    }).showToast();
    tarjeta.nombreTarjeta="";
    tarjeta.numeroTarjeta="";
    tarjeta.vencimiento="";
    tarjeta.cvv="";
    verificarInfoTarjeta();
});
function validarTarjeta(e) {
    if (e.target.value.trim() === "") {
        mostrarAlert(`El campo ${e.target.name} es obligatorio`, e.target.parentElement);
        tarjeta[e.target.id] = "";
        verificarInfoTarjeta();
        return;
    }
    e.target.parentElement.querySelector("#observacion")?.remove();
    tarjeta[e.target.id] = e.target.value.trim();
    verificarInfoTarjeta();
}
function mostrarAlert(mensaje, indicador) {
    indicador.querySelector("#observacion")?.remove();

    const obs = document.createElement("p");
    obs.id = "observacion";
    obs.textContent = mensaje;
    obs.style.color = "red";
    indicador.appendChild(obs);
}
function verificarInfoTarjeta() {
    if (Object.values(tarjeta).includes("")) {
        botonConfirmar.disabled = true;
        botonConfirmar.classList.add("cursor-not");
        botonConfirmar.classList.add("opacity-5");
    }
    else {
        botonConfirmar.disabled = false;
        botonConfirmar.classList.remove("cursor-not");
        botonConfirmar.classList.remove("opacity-5");
    }
}

