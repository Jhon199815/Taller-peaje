// Tarifas fijas
const TARIFAS = {
  auto: 5000,
  bus: 10000,
  camion: 15000,
};

export class Peaje {
  constructor() {
    this.reiniciar();
  }

  registrar(tipo) {
    if (!["auto", "bus", "camion"].includes(tipo)) return;

    this.contadores[tipo] += 1;
    this.total += TARIFAS[tipo];
  }

  reiniciar() {
    this.contadores = { auto: 0, bus: 0, camion: 0 };
    this.total = 0;
  }

  get autos() { return this.contadores.auto; }
  get buses() { return this.contadores.bus; }
  get camiones() { return this.contadores.camion; }
  get totalRecaudado() { return this.total; }
}
// condicion de habilitacion de controles
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
