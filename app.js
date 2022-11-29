const Perro = require("./Perro");
const Entrenador = require("./Entrenador")


const CésarMillán = new Entrenador();
const Zando = new Perro();
const Umma = new Perro ();

CésarMillán.miNombreEs("César Millán");
Zando.miNombreEs("Zando");

Zando.cambiaTuEstado(false);

CésarMillán.verEstado(Zando);
Zando.intentaJugarCon(CésarMillán);

Umma.miNombreEs("Umma");

Zando.vaAJugarCon(Umma);
Umma.vaAJugarCon(Zando);