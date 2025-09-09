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
