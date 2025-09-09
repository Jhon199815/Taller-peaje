import { Peaje } from "./peaje.js";

function actualizarUI(peaje) {
  document.getElementById("txtAutos").value = peaje.autos;
  document.getElementById("txtBuses").value = peaje.buses;
  document.getElementById("txtCamiones").value = peaje.camiones;
  document.getElementById("txtTotal").value = formatearMoneda(peaje.totalRecaudado);
}

function habilitarControles(estado) {
  const zona = document.getElementById("controles");
  zona.classList.toggle("deshabilitado", !estado);
  document.getElementById("btnAbrir").disabled = estado;
  document.getElementById("btnCerrar").disabled = !estado;
}

function formatearMoneda(valor) {
  return new Intl.NumberFormat("es-CO", { 
    style: "currency", 
    currency: "COP", 
    maximumFractionDigits: 0 
  }).format(valor);
}


const peaje = new Peaje();

// Estado inicial todo en ceros
actualizarUI(peaje);
habilitarControles(false);



// Botones 
document.getElementById("btnAbrir").addEventListener("click", () => {
  peaje.reiniciar();            
  actualizarUI(peaje);          
  habilitarControles(true);     
});

document.getElementById("btnCerrar").addEventListener("click", () => {
  habilitarControles(false);    
});



// accion en imagenes
document.getElementById("btnAuto").addEventListener("click", () => {
  peaje.registrar("auto");
  actualizarUI(peaje);
});
document.getElementById("btnBus").addEventListener("click", () => {
  peaje.registrar("bus");
  actualizarUI(peaje);
});
document.getElementById("btnCamion").addEventListener("click", () => {
  peaje.registrar("camion");
  actualizarUI(peaje);
});
