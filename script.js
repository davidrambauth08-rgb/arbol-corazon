'use strict';

/* =====================================================================
   PERSONALIZACIÓN — todo lo que se puede editar está en CONFIG
   ===================================================================== */
const CONFIG = {
  nombre: "Karen Trujillo",

  // Fecha y hora en que empezó todo, en hora local: AAAA-MM-DDTHH:mm:ss
  fechaInicio: "2021-07-16T00:00:00",

  // Encabezado de la carta ({nombre} se sustituye solo). Déjalo en "" para no mostrarlo.
  titulo: "",

  // Carta: cada frase empieza en una línea nueva y puede tener cualquier longitud
  frases: [
    "Desde el 16 de julio de 2021 han pasado muchísimas cosas.",
    "Algunas increíbles.",
    "Otras que preferiríamos borrar del historial.",
    "Pero entre todos esos días, horas, minutos y segundos, aprendimos algo.",
    "Que ante los problemas, lo que vale es avanzar.",
    "Que el amor no aparece: se construye, un día detrás de otro.",
    "Y que lo importante no es no caer, sino seguir caminando juntos."
  ],

  contadorTitulo: "Mi amor por ti comenzó hace…",
  firma: "— Y aquí sigo, eligiéndote",

  /* Puerta encantada: primero la clave, después la contraseña.
     Las respuestas no distinguen mayúsculas, tildes ni espacios.
     "valor" puede ser una respuesta o una lista de respuestas válidas. */
  puerta: {
    activo: true,
    titulo: "La puerta está encantada",
    subtitulo: "Nadie entra sin decir lo correcto",
    pasos: [
      {
        etiqueta: "La clave",
        ayuda: "Escribe la fecha que los dos sabemos",
        placeholder: "16-08",
        valor: ["16-08", "1608", "16/08", "16 08", "16.08"],
        boton: "Alohomora",
        error: ["Esa no es.", "La puerta sigue cerrada.", "Todavía no."],
        pista: "Pista: un día y un mes que sólo nosotros entendemos.",
        exito: "La cerradura reconoce tu mano."
      },
      {
        etiqueta: "Ahora la contraseña",
        ayuda: "Dos palabras que aprendimos viendo series",
        placeholder: "escribe aquí",
        valor: ["valar morghulis", "valarmorghulis"],
        boton: "Entrar",
        error: ["No es esa.", "Casi, pero no."],
        pista: "Pista: la respuesta sería «Valar Dohaeris».",
        exito: "La puerta se abre para ti."
      }
    ]
  },

  // Intro mágica al abrir el enlace (si enabled es false se usa la pantalla "inicio" de abajo)
  introMagic: {
    enabled: true,

    romanticLines: [
      "Dicen que algunas historias empiezan por casualidad.",
      "Otras necesitan un poco de magia.",
      "Esta empezó el 16 de julio de 2021.",
      "Y desde entonces la seguimos escribiendo."
    ],

    checkLines: [
      "Pero antes de entrar,",
      "necesito comprobar una cosa.",
      "¿Todavía recuerdas cómo hacer magia?"
    ],

    prompt: "Pronuncia el hechizo correcto",
    correctSpell: "Lumos",
    wrongSpell: "Avada Kedavra",   // sólo se puede probar una vez por sesión

    wrongSpellResponse: [
      "Karen.",
      "Era una sorpresa romántica, no una batalla.",
      "Prueba con algo un poco menos dramático."
    ],

    successLines: [
      "Hmm.",
      "Funcionó.",
      "Puedes pasar, Karen."
    ],

    // Se muestran en la tarjeta de las pruebas, justo antes de la primera
    transitionToQuiz: [
      "Perfecto.",
      "Ahora sí.",
      "Antes de mostrarte la sorpresa, hay tres pequeñas pruebas.",
      "Porque no te lo iba a poner tan fácil."
    ],

    // Frases que se revelan letra a letra (posiciones empezando en 0)
    letterByLetter: { romanticLines: [2], successLines: [2] },

    // Secreto: tocar 3 veces seguidas una estrella concreta (arriba a la derecha)
    starEgg: {
      tapsRequired: 3,
      timeWindowMs: 1500,
      message1: "Eso no era parte del hechizo.",
      message2: "Pero me gusta tu curiosidad."
    },

    // true: "Volver a verlo" también repite la intro mágica
    showOnReplay: false
  },

  // Efecto de sonido corto al lanzar el hechizo (opcional)
  magicSound: {
    enabled: true,
    file: "assets/hechizo.mp3",
    volume: 0.55
  },

  // Pantalla de inicio sencilla (sólo si introMagic.enabled es false)
  inicio: {
    titulo: "Karen Trujillo",
    lineas: [
      "Tengo algo para ti.",
      "Pero no va a ser tan fácil.",
      "Antes de ver tu sorpresa tienes que superar tres pruebas."
    ],
    boton: "Empezar"
  },

  // false: sin pruebas, el botón de inicio lanza la animación directamente
  modoAcertijo: true,
  etiquetaPrueba: "Prueba {n} de {total}",

  /* Pruebas. Cada respuesta correcta desbloquea una parte del árbol:
     1ª → cae la semilla · 2ª → crecen tronco y ramas · 3ª → copa, contador y carta.
     Opciones: correcta (true/false), mensaje (texto al tocarla; si es una lista,
     cada toque muestra el siguiente), escapa (true: huye las primeras veces). */
  pruebas: [
    {
      pregunta: "¿Cuándo empezó esta historia?",
      opciones: [
        { texto: "16 de julio de 2021", correcta: true, mensaje: "Muy bien. Todavía tienes buena memoria." },
        { texto: "Ayer", escapa: true, mensaje: ["¿Ayer? Me ofendes un poco.", "Sigue siendo no, pero me hace gracia que insistas."] },
        { texto: "Cuando por fin me hiciste caso", mensaje: ["Casi, pero nuestra historia lleva bastante más tiempo.", "Bonita respuesta, aunque quiero la fecha."] }
      ],
      pista: "Pista: fue en julio, y el día era un 16."
    },
    {
      pregunta: "¿Quién quiere más a quién?",
      opciones: [
        { texto: "Karen a David", escapa: true, mensaje: ["Las pruebas dicen otra cosa.", "Buena defensa, pero el jurado no está convencido."] },
        { texto: "David a Karen", correcta: true, mensaje: "Respuesta aceptada." },
        { texto: "Esta pregunta está amañada", correcta: true, mensaje: "También aceptada, porque está claramente amañada." }
      ],
      pista: "Pista: aquí hay dos respuestas buenas y una que no se deja."
    },
    {
      revelar: true,
      pregunta: "Última prueba.",
      detalle: "¿Sabes cuánto tiempo ha pasado desde el 16 de julio de 2021?",
      boton: "Creo que sí",
      respuestas: ["No hace falta calcularlo.", "Yo lo he estado contando."]
    }
  ],

  /* Hechizos: cada acción importante de la experiencia.
     El nombre es el conjuro y la descripción explica qué hace. */
  hechizos: {
    aviso: "Hay algo más escondido aquí",
    sonorus: { runa: "♪", nombre: "Sonorus", desc: "invocar nuestra canción" },
    lumos: { runa: "✦", nombre: "Lumos Máxima", desc: "" },          // desc vacío → usa secreto.boton
    revelio: { runa: "◈", nombre: "Revelio", desc: "revelar un recuerdo guardado" },
    accio: { runa: "❧", nombre: "Accio recuerdo", desc: "" },        // desc vacío → usa memoriesButton
    alohomora: { runa: "⚹", nombre: "Alohomora", desc: "", aviso: "Parece que algo sigue cerrado" },
    nox: { runa: "☾", nombre: "Nox", desc: "apagar la luz y volver al árbol" },
    tempus: { runa: "⟳", nombre: "Tempus", desc: "ver pasar las estaciones" },
    patronus: { runa: "✧", nombre: "Expecto Patronum", desc: "llamar a un guardián de luz" },
    leviosa: { runa: "☁", nombre: "Wingardium Leviosa", desc: "hacer flotar el recuerdo" },
    lingua: { runa: "❋", nombre: "Lingua Amoris", desc: "que lo diga el mundo entero" },
    finite: { runa: "✕", nombre: "Finite Incantatem", desc: "" }
  },

  /* Lingua Amoris: la misma frase en muchos idiomas.
     El español no está aquí: esa frase se guarda para el final. */
  idiomas: [
    "I love you", "Je t'aime", "Ti amo", "Eu te amo", "Ich liebe dich",
    "Я тебя люблю", "愛してる", "사랑해", "我爱你", "أحبك",
    "Σ' αγαπώ", "मैं तुमसे प्यार करता हूँ", "Ik hou van jou", "Kocham cię",
    "Seni seviyorum", "Jag älskar dig", "Te iubesc", "Szeretlek"
  ],

  /* Efectos mágicos ambientales y de hechizo. Pon cualquiera en false para apagarlo. */
  efectos: {
    lumosMaxima: true,     // destello y encendido progresivo al entrar al bosque
    luciernagas: true,     // luces vivas que aparecen poco a poco
    niebla: true,          // niebla suave que se desplaza
    petalos: true,         // hojas doradas cayendo con los corazones
    snitch: true,          // una snitch dorada cruza de vez en cuando
    ondasSonorus: true,    // anillos de energía al invocar la canción
    levitacion: true,      // fotos y recuerdos que flotan (Wingardium Leviosa)
    accio: true,           // objetos que llegan desde el fondo con rastro
    selloAlohomora: true,  // sello mágico que se rompe al abrir
    cierreNox: true,       // apagado progresivo de la magia en el cierre
    linguaAmoris: true     // la frase en muchos idiomas antes del final
  },

  /* Estaciones del árbol: cada toque de Tempus pasa a la siguiente */
  estaciones: {
    activo: true,
    inicial: "verano",                       // primavera · verano · otoño · invierno
    orden: ["primavera", "verano", "otoño", "invierno"],
    nombres: {
      primavera: "Primavera",
      verano: "Verano",
      otoño: "Otoño",
      invierno: "Invierno"
    }
  },

  // Al final de la carta: primero se ilumina el contador y luego se escriben las líneas
  secreto: {
    boton: "¿Quieres descubrir un secreto?",
    lineas: ["¿Ves todos esos días?", "Cada uno fue una elección, y volvería a elegirlos todos."],
    esperaTrasBrillo: 1.6,   // segundos con el contador brillando antes de escribir
    pausaEntreLineas: 1.2
  },

  // Botón final: reinicia toda la experiencia (acertijos incluidos)
  botonRepetir: "Volver a verlo",

  // Música de fondo: la invoca Sonorus (los móviles bloquean el autoplay)
  music: {
    enabled: true,
    file: "assets/cancion.mp3",
    title: "From the Moon",
    volume: 0.45,
    fadeInSeconds: 3,
    labels: { pause: "Pausar música", play: "Reanudar música", mute: "Silenciar", unmute: "Activar sonido" }
  },

  // Tarjeta con foto que aparece después del secreto
  finalPhoto: {
    enabled: true,
    file: "assets/foto-final.jpg",
    caption: "Y esta historia todavía tiene muchas páginas por escribir.",
    placeholder: "Aquí irá nuestra foto"   // se muestra si la foto todavía no existe
  },

  // Secreto escondido: tocar la copa del árbol varias veces seguidas
  easterEgg: {
    tapsRequired: 5,
    timeWindowMs: 4000,
    message1: "Encontraste algo que no estaba en las instrucciones.",
    message2: "Me gusta que sigas buscando."
  },

  // Recuerdos aleatorios (nunca sale el mismo dos veces seguidas)
  memoriesButton: "Dame un recuerdo",

  // Fotos que Accio puede traer como recuerdo (se mezclan con las frases)
  recuerdosFoto: [
    "assets/recuerdo-1.jpg",
    "assets/recuerdo-2.jpg"
  ],

  memories: [
    "Todavía me acuerdo del día en que todo esto empezó a tener sentido.",
    "Hemos tenido días difíciles y, aun así, seguimos caminando juntos.",
    "De lo que más orgullo tengo no es de lo fácil, sino de lo que construimos cuando fue difícil.",
    "Hay cosas que solo tú y yo entendemos, y así está bien.",
    "Si pudiera repetir un día contigo, elegiría uno de los normales."
  ],

  // Cierre con lluvia de corazones
  finalMessage: {
    question: "¿Una última cosa?",
    button: "Sí",
    line1: "Gracias por estos años, Karen.",
    line2: "Entre la magia, los recuerdos y todo lo que aprendimos al avanzar, hay algo que sigue siendo cierto: te amo."
  },

  // Singular / plural de las unidades del contador
  unidades: {
    d: ["día", "días"],
    h: ["hora", "horas"],
    m: ["minuto", "minutos"],
    s: ["segundo", "segundos"]
  },

  // Ritmo del texto (segundos y letras por segundo)
  ritmo: {
    letrasPorSegundoTitulo: 27,
    letrasPorSegundo: 25,
    pausaTrasTitulo: 0.8,
    pausaEntreFrases: 0.7,
    pausaAntesFirma: 0.7,
    contadorAlFinal: false   // true: el contador aparece cuando termina todo el texto
  }
};

/* ===================================================================== */


/* ---------------------------------------------------------------------
   Línea de tiempo de la escena (segundos). Medida sobre el video de
   referencia; el texto se encadena automáticamente después.
   --------------------------------------------------------------------- */
const TIMELINE = {
  intro: 0.7,           // el corazón aparece antes del segundo 0
  fall: 0.2,            // se encoge a un punto y cae
  land: 1.2,            // llega al suelo
  ground: 0.3,          // la línea del suelo crece desde el punto
  trunk: 1.25,          // crece el tronco
  trunkDuration: 0.65,
  blossoms: 2.9,        // primeros corazones
  blossomsEnd: 4.9,     // copa completa
  slide: 4.95,          // el árbol se aparta para dejar sitio al texto
  slideEnd: 5.8,
  counter: 5.6,         // aparece el contador (si no espera al texto)
  title: 6.35,          // empieza a escribirse la carta
  falling: 6.0,         // corazones que caen
  holds: [0, 1.22, 2.8] // modo acertijo: dónde se detiene la escena antes de cada prueba
};

const SETTINGS = {
  blossoms: 680,             // corazones de la copa
  fallingEvery: [0.6, 1.2],  // segundos entre corazones que caen
  maxFalling: 6,
  escapes: 2,                // veces que huye una respuesta antes de dejarse tocar
  hintAfter: 2,              // fallos antes de mostrar la pista
  seed: 20250101             // semilla aleatoria: misma copa siempre
};

const PALETTE = [
  '#dd0ca9', // magenta
  '#f032b8', // fucsia
  '#e0147a', // rosa fuerte
  '#ff4f9a', // rosa
  '#d41344', // carmesí
  '#ec1c2a', // rojo
  '#f2663a', // naranja rojizo
  '#f59a28', // naranja
  '#f7cf30', // ámbar
  '#f9f03c', // amarillo
  '#ff8fc0'  // rosa claro
];

/* Paleta mágica única (misma que las variables CSS de style.css) */
/* Cada estación reviste la copa sin perder la forma de corazón */
const SEASONS = {
  primavera: {
    palette: ['#ff9ec4', '#ffc2d8', '#f48fb1', '#ffe3ee', '#f7b7cd', '#ff7fae', '#ffd9e6', '#fff1f6', '#ffb3c9', '#e59ab8', '#fff6fa'],
    copa: { densidad: 1, tamano: 0.95 },
    cielo: ['#171a3e', '#2b1f4c', '#452a58'],          // arriba · medio · horizonte
    horizonte: '150, 96, 170',
    estrellas: 0.75,
    siluetas: ['26, 26, 58', '14, 14, 32'],
    niebla: { color: '250, 205, 232', alpha: 0.075 },
    suelo: { linea: '236, 170, 200', halo: '245, 186, 214', charco: '245, 186, 214' },
    manto: null,
    halo: ['255, 182, 210', '245, 211, 107'],
    luces: { cantidad: 0.75, color: '255, 214, 236' },
    polvo: '255, 214, 236',
    caida: { tipo: 'petalos', desde: 'copa', cada: [0.35, 0.8], max: 12, brisa: 1.5, vy: [0.07, 0.12], color: '#f9c2d6' }
  },
  verano: {
    palette: ['#dd0ca9', '#f032b8', '#e0147a', '#ff4f9a', '#d41344', '#ec1c2a', '#f2663a', '#f59a28', '#f7cf30', '#f9f03c', '#ff8fc0'],
    copa: { densidad: 1, tamano: 1 },
    cielo: ['#0b1020', '#17172b', '#2b2147'],
    horizonte: '84, 62, 130',
    estrellas: 1,
    siluetas: ['14, 18, 38', '7, 10, 22'],
    niebla: { color: '226, 220, 255', alpha: 0.055 },
    suelo: { linea: '201, 163, 74', halo: '245, 211, 107', charco: '245, 211, 107' },
    manto: null,
    halo: ['245, 211, 107', '199, 143, 161'],
    luces: { cantidad: 1.25, color: '226, 240, 140' },
    polvo: '226, 190, 110',
    caida: { tipo: 'corazones', desde: 'copa', cada: [0.6, 1.2], max: 7, brisa: 0.6, vy: [0.1, 0.2], color: '#e2c27a' }
  },
  'otoño': {
    palette: ['#e0632a', '#c9452a', '#e08b2a', '#b8431f', '#d97b2b', '#a8371d', '#e3a13d', '#c85a2a', '#f0b256', '#93331c', '#dd7a3a'],
    copa: { densidad: 0.92, tamano: 1 },
    cielo: ['#16122a', '#2a1a2e', '#4a2a22'],
    horizonte: '190, 110, 50',
    estrellas: 0.85,
    siluetas: ['34, 20, 26', '16, 10, 14'],
    niebla: { color: '255, 205, 150', alpha: 0.07 },
    suelo: { linea: '214, 140, 60', halo: '235, 160, 70', charco: '235, 160, 70' },
    manto: { color: '150, 80, 32', alpha: 0.35 },       // hojarasca en el suelo
    halo: ['235, 160, 70', '201, 163, 74'],
    luces: { cantidad: 0.45, color: '255, 190, 110' },
    polvo: '235, 170, 90',
    caida: { tipo: 'hojas', desde: 'mixto', cada: [0.18, 0.4], max: 18, brisa: 2.4, vy: [0.09, 0.16], color: '#d9822b' }
  },
  invierno: {
    palette: ['#c62b3f', '#a81f33', '#d94f5c', '#e9eef6', '#cfd8e6', '#b03145', '#8e1b2b', '#f2f6fb', '#d96070', '#9aa7bd', '#c13a4c'],
    copa: { densidad: 0.58, tamano: 0.85 },
    cielo: ['#0a1228', '#13203f', '#22355e'],
    horizonte: '120, 170, 230',
    estrellas: 1.3,
    siluetas: ['22, 32, 56', '10, 16, 30'],
    niebla: { color: '214, 232, 255', alpha: 0.10 },
    suelo: { linea: '196, 222, 255', halo: '210, 232, 255', charco: '200, 226, 255' },
    manto: { color: '226, 240, 255', alpha: 0.5 },      // nieve en el suelo
    halo: ['200, 220, 255', '214, 96, 112'],
    luces: { cantidad: 0.12, color: '214, 236, 255' },
    polvo: '220, 238, 255',
    caida: { tipo: 'nieve', desde: 'cielo', cada: [0.12, 0.3], max: 26, brisa: 1.1, vy: [0.05, 0.11], color: '#eef4ff' }
  }
};

/* Utilidades de color para mezclar estaciones sin saltos */
function parseRGB(str) {
  if (Array.isArray(str)) return str;
  if (str[0] === '#') {
    const n = parseInt(str.slice(1), 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }
  return str.split(',').map(v => parseFloat(v));
}
const mixRGB = (a, b, k) => [lerp(a[0], b[0], k), lerp(a[1], b[1], k), lerp(a[2], b[2], k)];
const rgbStr = (c, a = 1) => `rgba(${c[0] | 0}, ${c[1] | 0}, ${c[2] | 0}, ${a})`;

/* Deja cada estación con sus colores ya interpretados */
for (const name in SEASONS) {
  const S2 = SEASONS[name];
  S2.cieloRGB = S2.cielo.map(parseRGB);
  S2.horizonteRGB = parseRGB(S2.horizonte);
  S2.siluetasRGB = S2.siluetas.map(parseRGB);
  S2.nieblaRGB = parseRGB(S2.niebla.color);
  S2.sueloRGB = { linea: parseRGB(S2.suelo.linea), halo: parseRGB(S2.suelo.halo), charco: parseRGB(S2.suelo.charco) };
  S2.mantoRGB = S2.manto ? parseRGB(S2.manto.color) : null;
  S2.lucesRGB = parseRGB(S2.luces.color);
  S2.polvoRGB = parseRGB(S2.polvo);
  S2.densidad = S2.copa.densidad;   // compatibilidad con el dibujo de la copa
  S2.tamano = S2.copa.tamano;
  S2.luciernagas = S2.luces.cantidad;
}


const COLORS = {
  night: '#0b1020',
  night2: '#17172b',
  violet: '#2b2147',
  parchment: '#e8dcc2',
  ink: '#4a3426',
  oldGold: '#c9a34a',
  warmGold: '#f5d36b',
  burgundy: '#6f2232',
  rose: '#c78fa1',
  white: '#fff6e8',
  green: '#2d5b49',
  trunk: '#2d5b49',          // tronco del bosque
  ground: 'rgba(201, 163, 74, 0.55)',
  seed: '#9e1234',
  gold: '201, 163, 74'
};


/* ---------------------------------------------------------------------
   Espacio de la escena. Unidades: alto del panel del video = 1,
   ancho = 572/372. En móvil vertical la escena se escala y se centra.
   --------------------------------------------------------------------- */
const PANEL_ASPECT = 572 / 372;
const TAU = Math.PI * 2;
const GROUND_Y = 0.917;
const GROUND_X0 = 0.035;
const GROUND_X1 = PANEL_ASPECT - 0.075;
const TREE_X_START = 0.736;
const TREE_X_END = 1.071;
const SEED_Y = 0.484;
const SEED_SIZE = 0.083;
const DOT_R = 0.011;
/* bloque que ocupa el árbol (para escalarlo en vertical) */
const TREE_BLOCK = { top: 0.07, bottom: GROUND_Y, width: 0.76 };
/* copa: corazón implícito escalado (x relativa al tronco).
   canopyInside() lo ensancha abajo para imitar la forma más redonda del video */
const CANOPY = { cy: 0.456, sx: 0.302, sy: 0.274 };

/* Ramas medidas en píxeles del video (panel de 372 px de alto),
   relativas a la base del tronco. [x0,y0, cx,cy, x1,y1, w0,w1, inicio, duración, taper] */
const BRANCH_DATA = [
  [0, 0, 6, -120, -14, -232, 27, 2.5, TIMELINE.trunk, TIMELINE.trunkDuration, 1.3], // tronco
  [2, -160, 3, -195, 1, -224, 5, 1, 1.85, 0.3, 1],         // punta secundaria
  [-3, -72, -55, -90, -88, -128, 10, 1, 1.85, 0.5, 1],     // izquierda baja
  [0, -136, -64, -156, -100, -212, 9, 1, 1.85, 0.55, 1],   // izquierda alta
  [6, -104, 40, -128, 70, -160, 7.5, 0.9, 1.9, 0.5, 1],    // derecha media
  [4, -146, 42, -174, 68, -220, 7.5, 0.9, 1.9, 0.5, 1],    // derecha alta
  [-83, -187, -88, -205, -84, -225, 3, 0.7, 2.3, 0.3, 1],
  [-46, -156, -66, -166, -88, -166, 3.2, 0.7, 2.25, 0.35, 1],
  [-57, -101, -63, -113, -63, -126, 3, 0.7, 2.35, 0.3, 1],
  [40, -178, 48, -186, 58, -192, 3, 0.7, 2.3, 0.3, 1],
  [40, -130, 48, -132, 60, -130, 3, 0.7, 2.35, 0.3, 1]
];


/* ---------------------------------------------------------------------
   Utilidades
   --------------------------------------------------------------------- */
const REDUCED = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
const easeInQuad = t => t * t;
const easeInOutCubic = t => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const easeOutBack = t => {
  const c1 = 1.4, c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
};

function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* Corazón implícito: (x²+y²−1)³ − x²y³ ≤ 0  (y hacia arriba) */
function inHeart(x, y) {
  const a = x * x + y * y - 1;
  return a * a * a - x * x * y * y * y <= 0;
}

function canopyInside(hx, hy) {
  const bulge = hy < 0 ? 1 + 0.07 * Math.sin(Math.PI * Math.min(1, -hy * 1.15)) : 1;
  return inHeart(hx / bulge, hy);
}

function graphemes(str) {
  if (typeof Intl !== 'undefined' && Intl.Segmenter) {
    return [...new Intl.Segmenter('es', { granularity: 'grapheme' }).segment(str)].map(s => s.segment);
  }
  return Array.from(str);
}

/* "AAAA-MM-DDTHH:mm:ss" en hora local (también fiable en Safari/iOS) */
function parseLocalDate(str) {
  const m = /^(\d{4})-(\d{2})-(\d{2})(?:[T ](\d{2}):(\d{2})(?::(\d{2}))?)?$/.exec(String(str).trim());
  if (m) return new Date(+m[1], +m[2] - 1, +m[3], +(m[4] || 0), +(m[5] || 0), +(m[6] || 0));
  return new Date(str);
}

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

/* Corazón de ancho ≈1 centrado en el origen */
function heartPath(g) {
  g.beginPath();
  g.moveTo(0, -0.26);
  g.bezierCurveTo(-0.08, -0.48, -0.47, -0.5, -0.5, -0.18);
  g.bezierCurveTo(-0.52, 0.06, -0.22, 0.27, 0, 0.46);
  g.bezierCurveTo(0.22, 0.27, 0.52, 0.06, 0.5, -0.18);
  g.bezierCurveTo(0.47, -0.5, 0.08, -0.48, 0, -0.26);
  g.closePath();
}


/* ---------------------------------------------------------------------
   Sprites pre-renderizados
   --------------------------------------------------------------------- */
const SPRITE_PX = 64;
const SHAPE_FRAC = 0.8;

function makeHeartSprite(color) {
  const cv = document.createElement('canvas');
  cv.width = cv.height = SPRITE_PX;
  const g = cv.getContext('2d');
  g.translate(SPRITE_PX / 2, SPRITE_PX / 2 + SPRITE_PX * 0.02);
  // borde ligeramente suave, como en el video
  g.shadowColor = color;
  g.shadowBlur = SPRITE_PX * 0.08;
  g.scale(SPRITE_PX * SHAPE_FRAC, SPRITE_PX * SHAPE_FRAC);
  g.fillStyle = color;
  heartPath(g);
  g.fill();
  return cv;
}


/* ---------------------------------------------------------------------
   Estado global
   --------------------------------------------------------------------- */
const canvas = document.getElementById('scene');
const ctx = canvas.getContext('2d');
const stageEl = document.getElementById('stage');
const letterEl = document.getElementById('letter');
const clockEl = document.getElementById('clock');
const introEl = document.getElementById('intro');
const startBtn = document.getElementById('start');
const quizEl = document.getElementById('quiz');
const quizCard = document.getElementById('quiz-card');
const secretBtn = document.getElementById('secret-btn');
const fxCanvas = document.getElementById('fx');
const fxCtx = fxCanvas.getContext('2d');
const musicUi = document.getElementById('music');
const musicToggleBtn = document.getElementById('music-toggle');
const musicMuteBtn = document.getElementById('music-mute');
const eggEl = document.getElementById('egg');
const finaleEl = document.getElementById('finale');
const finaleCard = document.getElementById('finale-card');
const photoFrame = document.getElementById('photo-frame');
const photoImg = document.getElementById('final-photo');
const memoryEl = document.getElementById('memory');
const memoryBtn = document.getElementById('memory-btn');
const askEl = document.getElementById('closing-ask');
const askBtn = document.getElementById('closing-btn');
const closingEl = document.getElementById('closing');
const restartBtn = document.getElementById('restart-btn');
const sealEl = document.getElementById('seal');
const tempusBtn = document.getElementById('spell-tempus');
const patronusBtn = document.getElementById('spell-patronus');
const leviosaBtn = document.getElementById('spell-leviosa');
const linguaBtn = document.getElementById('spell-lingua');
const seasonLabelEl = document.getElementById('season-label');
const finiteEl = document.getElementById('finite-label');
const spellbookEl = document.getElementById('spellbook');
const spellHintEl = document.getElementById('spell-hint');
const sonorusBtn = document.getElementById('spell-sonorus');
const revelioBtn = document.getElementById('spell-revelio');
const noxBtn = document.getElementById('spell-nox');
const musicTitleEl = document.getElementById('music-title');
const safeProbe = document.getElementById('safe-area');

let dpr = 1, vw = 0, vh = 0;
const panel = { x: 0, y: 0, w: 0, h: 0, r: 0 };
/* tall = móvil vertical: árbol arriba, carta debajo */
const view = { tall: false, k: 1, ox: 0, oyStart: 0, oyEnd: 0 };
/* transformación del cuadro actual: unidades → píxeles CSS */
const S = { ox: 0, oy: 0, k: 1, slide: 0 };
/* en modo acertijo el árbol crece ya en su sitio final para dejar hueco a las pruebas */
const NO_SLIDE = CONFIG.modoAcertijo;

let sprites = [];
const seasonSprites = {};
const season = { name: 'verano', from: null, k: 1, changedAt: -1, sweep: -1 };
const seasonCfg = () => SEASONS[season.name] || SEASONS.verano;
const seasonPrev = () => (season.from ? SEASONS[season.from] : null);

/* Devuelve el valor de la estación actual mezclado con la anterior (0→1) */
function sMix(pick) {
  const cur = pick(seasonCfg());
  const prev = seasonPrev();
  if (!prev || season.k >= 1) return cur;
  const old = pick(prev);
  if (old == null) return cur;
  return typeof cur === 'number' ? lerp(old, cur, season.k) : mixRGB(old, cur, season.k);
}
let branches = [];
let blossoms = [];
const falling = [];
let nextFall = 0;
let fxRng = Math.random;

let playT = null;       // tiempo de la escena (null = pantalla de inicio)
let limitT = Infinity;  // la escena no avanza más allá de este punto (pruebas pendientes)
let frozenAt = null;    // ?t=X&pausa=1: tiempo congelado (para capturas)
let rafId = 0;
let lastNow = 0;
let needsRedraw = true;
let wakeLock = null;

/* tareas diferidas ligadas al bucle (se vacían al reiniciar: sin setTimeout sueltos) */
let tasks = [];
const later = (ms, fn, tag) => tasks.push({ at: performance.now() + ms, fn, tag });
const cancelTasks = tag => { tasks = tasks.filter(task => task.tag !== tag); };

const quiz = { step: -1, wrong: 0, locked: false, done: !CONFIG.modoAcertijo, waitNext: null };
const secret = { shown: false, started: false, glowAt: Infinity };
const spells = { hintShown: false, sonorus: false, revelio: false, casting: false };


/* ---------------------------------------------------------------------
   Construcción de la escena
   --------------------------------------------------------------------- */
function buildBranches() {
  const s = 1 / 372;
  return BRANCH_DATA.map(([x0, y0, cx, cy, x1, y1, w0, w1, t0, dur, taper]) => ({
    x0: x0 * s, y0: y0 * s, cx: cx * s, cy: cy * s, x1: x1 * s, y1: y1 * s,
    w0: w0 * s, w1: w1 * s, t0, dur, taper
  }));
}

function buildBlossoms(rng) {
  const list = [];
  const OY = 0.15;
  while (list.length < SETTINGS.blossoms) {
    let hx, hy;
    if (rng() < 0.28) {
      // cerca del contorno → silueta nítida
      const ang = rng() * TAU, dx = Math.cos(ang), dy = Math.sin(ang);
      let lo = 0, hi = 2.6;
      for (let k = 0; k < 16; k++) {
        const mid = (lo + hi) / 2;
        if (canopyInside(dx * mid, OY + dy * mid)) lo = mid; else hi = mid;
      }
      const r = lo * (0.88 + rng() * 0.12);
      hx = dx * r; hy = OY + dy * r;
    } else {
      hx = (rng() * 2 - 1) * 1.3;
      hy = -1.02 + rng() * 2.3;
      if (!canopyInside(hx, hy)) continue;
    }
    const opaque = rng() < 0.45;
    list.push({
      dx: hx * CANOPY.sx,
      y: CANOPY.cy - hy * CANOPY.sy * (hy < 0 ? 1.1 : 1),
      size: 0.03 + rng() * 0.024,
      rot: (rng() - 0.5) * 1.3,
      color: Math.floor(rng() * PALETTE.length),
      thin: rng(),
      alpha: opaque ? 1 : 0.5 + rng() * 0.4,
      t0: TIMELINE.blossoms + (TIMELINE.blossomsEnd - 0.25 - TIMELINE.blossoms) * rng()
    });
  }
  return list;
}


/* ---------------------------------------------------------------------
   Texto: se encadena según la longitud real de cada bloque
   --------------------------------------------------------------------- */
const R = CONFIG.ritmo;
const typing = [];
const secretItems = [];
const schedule = { counter: TIMELINE.counter, textEnd: 0, end: Infinity };

function addTyping(el, text, t0, cps, list = typing) {
  const chars = graphemes(text);
  const item = { el, text, chars, t0, cps, t1: t0 + chars.length / cps, shown: -1, caret: null };
  list.push(item);
  return item.t1;
}

function buildTyping() {
  const titleEl = document.getElementById('title');
  const titulo = CONFIG.titulo.replace(/\{nombre\}/g, CONFIG.nombre);
  let t = TIMELINE.title;
  if (titulo) {
    t = addTyping(titleEl, titulo, t, R.letrasPorSegundoTitulo) + R.pausaTrasTitulo;
  } else {
    titleEl.hidden = true;
  }

  const phrasesEl = document.getElementById('phrases');
  CONFIG.frases.forEach((frase, i) => {
    const p = el('p', 'line');
    phrasesEl.appendChild(p);
    t = addTyping(p, ' ' + frase, t, R.letrasPorSegundo);
    if (i < CONFIG.frases.length - 1) t += R.pausaEntreFrases;
  });
  t += R.pausaAntesFirma;
  schedule.textEnd = addTyping(document.getElementById('signature'), CONFIG.firma, t, R.letrasPorSegundo);
  schedule.counter = R.contadorAlFinal ? schedule.textEnd + 0.4 : TIMELINE.counter;

  // líneas del secreto: esperan (t0 = ∞) hasta que se pulsa el botón
  if (CONFIG.secreto) {
    const box = document.getElementById('secret-lines');
    for (const text of CONFIG.secreto.lineas) {
      const p = el('p', 'line');
      box.appendChild(p);
      addTyping(p, text, Infinity, R.letrasPorSegundo, secretItems);
    }
  }
  resetSchedule();
}

function resetSchedule() {
  for (const it of secretItems) { it.t0 = Infinity; it.t1 = Infinity; }
  secret.shown = secret.started = false;
  secret.glowAt = Infinity;
  schedule.end = CONFIG.secreto ? Infinity : Math.max(schedule.textEnd, schedule.counter + 0.4) + 1.5;
}

function allTyping() {
  return secretItems.length ? typing.concat(secretItems) : typing;
}

function clearTyping() {
  for (const it of allTyping()) {
    it.shown = -1;
    it.caret = null;
    it.el.textContent = '';
  }
}

function updateTyping(t) {
  const items = allTyping();
  let active = null;
  if (t !== null) for (const it of items) if (t >= it.t0 - 0.35) active = it;
  for (const it of items) {
    const n = t === null ? 0 : clamp(Math.floor((t - it.t0) * it.cps), 0, it.chars.length);
    let caret = '';
    if (it === active) {
      const typingNow = t >= it.t0 && n < it.chars.length;
      if (typingNow || Math.floor(t * 2.5) % 2 === 0) caret = '_';
    }
    if (n !== it.shown || caret !== it.caret) {
      it.shown = n;
      it.caret = caret;
      it.el.textContent = it.chars.slice(0, n).join('') + caret;
    }
  }
}

/* ---------------- Contador en vivo ---------------- */
const counterNums = {};
const counterLabels = {};
document.querySelectorAll('#counter .num').forEach(node => { counterNums[node.dataset.unit] = node; });
document.querySelectorAll('#counter .lbl').forEach(node => { counterLabels[node.dataset.label] = node; });
const lastValues = {};
const startDate = parseLocalDate(CONFIG.fechaInicio);

function counterValues() {
  const diff = isNaN(startDate) ? 0 : Math.max(0, Date.now() - startDate.getTime());
  return {
    d: Math.floor(diff / 86400000),
    h: Math.floor(diff / 3600000) % 24,
    m: Math.floor(diff / 60000) % 60,
    s: Math.floor(diff / 1000) % 60
  };
}

function writeCounter() {
  const values = counterValues();
  for (const k in values) {
    if (values[k] === lastValues[k]) continue;
    lastValues[k] = values[k];
    counterNums[k].textContent = k === 'd' ? String(values[k]) : String(values[k]).padStart(2, '0');
    counterLabels[k].textContent = CONFIG.unidades[k][values[k] === 1 ? 0 : 1];
  }
}

function updateCounter(t) {
  const o = t === null ? 0 : clamp((t - schedule.counter) / 0.4);
  const css = String(o);
  if (clockEl.style.opacity !== css) clockEl.style.opacity = css;
  if (o > 0) writeCounter();
  const glow = t !== null && t >= secret.glowAt;
  if (glow !== clockEl.classList.contains('glow')) clockEl.classList.toggle('glow', glow);
}


/* ---------------------------------------------------------------------
   Pruebas (modo acertijo)
   --------------------------------------------------------------------- */
/* Frases de paso antes de la primera prueba (tocar la tarjeta las salta) */
function showQuizIntro(lines) {
  quiz.introActive = true;
  quizEl.hidden = false;
  quizCard.replaceChildren();
  quizCard.classList.remove('out', 'in');
  void quizCard.offsetWidth;
  quizCard.classList.add('in', 'intro');
  let t = 150;
  lines.forEach((text, i) => {
    later(t, () => {
      quizCard.append(el('p', i === 0 ? 'quiz-q' : 'quiz-answer', text));
      fitQuiz();
    }, 'qintro');
    t += 420 + text.length * 16;
  });
  later(t + 500, finishQuizIntro, 'qintro');
}

function finishQuizIntro() {
  if (!quiz.introActive) return;
  quiz.introActive = false;
  cancelTasks('qintro');
  quizCard.classList.add('out');
  later(380, () => { quizCard.classList.remove('intro'); showQuizStep(0); });
}

function showQuizStep(i) {
  const p = CONFIG.pruebas[i];
  quiz.step = i;
  quiz.wrong = 0;
  quiz.locked = false;
  quizEl.hidden = false;
  quizCard.replaceChildren();
  quizCard.classList.remove('out', 'in');

  const label = CONFIG.etiquetaPrueba
    .replace('{n}', i + 1)
    .replace('{total}', CONFIG.pruebas.length);
  quizCard.append(el('p', 'quiz-count', label), el('h2', 'quiz-q', p.pregunta));
  if (p.detalle) quizCard.append(el('p', 'quiz-detail', p.detalle));

  const feedback = el('p', 'quiz-feedback');
  const hint = el('p', 'quiz-hint');

  if (p.revelar) {
    const btn = el('button', 'quiz-reveal', p.boton);
    btn.type = 'button';
    btn.addEventListener('click', () => revealAnswer(p, btn, feedback));
    quizCard.append(btn, feedback);
  } else {
    const list = el('div', 'quiz-options');
    p.opciones.forEach(opt => list.append(makeOption(opt, list, feedback, hint, p)));
    quizCard.append(list, feedback, hint);
  }

  fitQuiz();
  void quizCard.offsetWidth; // reinicia la transición de entrada
  quizCard.classList.add('in');
}

function makeOption(opt, list, feedback, hint, prueba) {
  const btn = el('button', 'quiz-opt', opt.texto);
  btn.type = 'button';
  btn.escapes = 0;
  btn.dodged = false;
  btn.taps = 0;

  const tryEscape = () => {
    if (!opt.escapa || opt.correcta || quiz.locked || btn.escapes >= SETTINGS.escapes) return false;
    btn.escapes++;
    moveAway(btn, list);
    registerWrong(hint, prueba, list);
    return true;
  };

  // en móvil huye al tocarla; con ratón, al acercarse
  btn.addEventListener('pointerdown', e => {
    btn.dodged = tryEscape(); // si huye, se ignora el click de este mismo toque
    if (btn.dodged) e.preventDefault();
  });
  btn.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') tryEscape(); });
  btn.addEventListener('click', () => {
    if (btn.dodged) { btn.dodged = false; return; }
    if (quiz.locked) return;
    if (opt.correcta) {
      quiz.locked = true;
      btn.classList.add('ok');
      list.querySelectorAll('.quiz-opt').forEach(b => { if (b !== btn) b.classList.add('dim'); b.disabled = true; });
      setFeedback(feedback, opt.mensaje, 'good');
      unlockNext();
    } else {
      btn.classList.remove('shake');
      void btn.offsetWidth;
      btn.classList.add('shake');
      const msgs = [].concat(opt.mensaje);
      setFeedback(feedback, msgs[btn.taps++ % msgs.length], 'funny');
      registerWrong(hint, prueba, list);
    }
  });
  if (opt.correcta) btn.dataset.good = '1';
  return btn;
}

function moveAway(btn, list) {
  const maxX = Math.max(0, list.clientWidth - btn.offsetWidth);
  const current = parseFloat(btn.dataset.x || 0) + btn.offsetLeft;
  let x = Math.random() * maxX;
  if (Math.abs(x - current) < maxX * 0.35) x = current > maxX / 2 ? x * 0.3 : maxX - x * 0.3;
  const dx = x - btn.offsetLeft;
  const dy = (Math.random() - 0.5) * btn.offsetHeight * 0.9;
  btn.dataset.x = dx;
  btn.style.transform = `translate(${dx}px, ${dy}px) rotate(${(Math.random() - 0.5) * 8}deg)`;
  btn.classList.add('escaping');
}

function registerWrong(hint, prueba, list) {
  quiz.wrong++;
  if (quiz.wrong >= SETTINGS.hintAfter && prueba.pista && !hint.textContent) {
    setFeedback(hint, prueba.pista, 'hint');
    list.querySelectorAll('[data-good]').forEach(b => b.classList.add('pulse'));
  }
}

function setFeedback(node, text, kind) {
  node.textContent = text;
  node.className = node.className.split(' ')[0] + ' show ' + kind;
}

function unlockNext() {
  const next = quiz.step + 1;
  limitT = next < TIMELINE.holds.length ? TIMELINE.holds[next] : Infinity;
  // la siguiente prueba aparece cuando termina el tramo de animación desbloqueado
  quiz.waitNext = { minAt: performance.now() + 1800, step: next };
}

function revealAnswer(p, btn, feedback) {
  if (quiz.locked) return;
  quiz.locked = true;
  btn.classList.add('gone');
  p.respuestas.forEach((text, i) => {
    later(300 + i * 1500, () => {
      const line = el('p', 'quiz-answer', text);
      feedback.before(line);
      fitQuiz();
    });
  });
  later(300 + p.respuestas.length * 1500 + 400, () => {
    quizCard.classList.add('out');
    limitT = Infinity;
    quiz.done = true;
    later(500, () => { quizEl.hidden = true; });
  });
}

function processQuiz(now) {
  const w = quiz.waitNext;
  if (!w || now < w.minAt || playT < limitT - 1e-3) return;
  quiz.waitNext = null;
  if (w.step >= CONFIG.pruebas.length) { quizEl.hidden = true; quiz.done = true; return; }
  quizCard.classList.add('out');
  later(380, () => showQuizStep(w.step));
}

/* Reduce la tarjeta si no cabe (pantallas bajas o textos largos) */
function fitQuiz() {
  if (quizEl.hidden) return;
  let fit = 1;
  quizCard.style.setProperty('--qfit', fit);
  while (quizCard.scrollHeight > quizEl.clientHeight && fit > 0.6) {
    fit *= 0.94;
    quizCard.style.setProperty('--qfit', fit);
  }
}


/* ---------------------------------------------------------------------
   Secreto final
   --------------------------------------------------------------------- */
function startSecret() {
  if (secret.started || playT === null) return;
  secret.started = true;
  secretBtn.classList.remove('show');
  secret.glowAt = playT + 0.2;
  let t = secret.glowAt + CONFIG.secreto.esperaTrasBrillo;
  secretItems.forEach((it, i) => {
    it.t0 = t;
    it.t1 = t + it.chars.length / it.cps;
    t = it.t1 + (i < secretItems.length - 1 ? CONFIG.secreto.pausaEntreLineas : 0);
  });
  schedule.end = t + 1.8;
}


/* ---------------------------------------------------------------------
   Layout responsive
   --------------------------------------------------------------------- */
function readSafeArea() {
  const s = getComputedStyle(safeProbe);
  return {
    top: parseFloat(s.paddingTop) || 0,
    right: parseFloat(s.paddingRight) || 0,
    bottom: parseFloat(s.paddingBottom) || 0,
    left: parseFloat(s.paddingLeft) || 0
  };
}

function resize() {
  vw = window.innerWidth;
  vh = window.innerHeight;
  dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.round(vw * dpr);
  canvas.height = Math.round(vh * dpr);
  fxCanvas.width = canvas.width;
  fxCanvas.height = canvas.height;
  if (typeof magicCanvas !== 'undefined') resizeMagic();

  view.tall = vw / vh < 0.9;
  if (view.tall) {
    // Móvil vertical: panel a pantalla completa, árbol arriba y carta debajo
    const safe = readSafeArea();
    const m = 10;
    panel.x = m + safe.left;
    panel.y = m + safe.top;
    panel.w = vw - 2 * m - safe.left - safe.right;
    panel.h = vh - 2 * m - safe.top - safe.bottom;
    panel.r = Math.min(22, panel.w * 0.055);

    const blockH = TREE_BLOCK.bottom - TREE_BLOCK.top;
    view.k = Math.min(panel.w * 0.86 / TREE_BLOCK.width, panel.h * 0.46 / blockH);
    view.ox = panel.x + panel.w / 2 - TREE_X_START * view.k;
    // empieza centrado (como en el video) y sube para dejar sitio a la carta
    view.oyStart = panel.y + (panel.h - blockH * view.k) / 2 - TREE_BLOCK.top * view.k;
    view.oyEnd = panel.y + Math.max(14, panel.h * 0.022) - TREE_BLOCK.top * view.k;
  } else {
    // Horizontal / escritorio: composición original del video
    panel.h = Math.min(vh, vw / PANEL_ASPECT);
    panel.w = panel.h * PANEL_ASPECT;
    panel.x = (vw - panel.w) / 2;
    panel.y = (vh - panel.h) / 2;
    panel.r = 0;
  }

  Object.assign(stageEl.style, {
    left: panel.x + 'px', top: panel.y + 'px', width: panel.w + 'px', height: panel.h + 'px'
  });
  stageEl.classList.toggle('tall', view.tall);
  horizonY = view.tall
    ? view.oyEnd + GROUND_Y * view.k
    : panel.y + GROUND_Y * panel.h;
  buildStarField();
  layoutText();
  needsRedraw = true;
}

function placeButton(node, left, top, transform) {
  node.style.left = left + 'px';
  node.style.top = top + 'px';
  node.style.transform = transform;
  node.classList.toggle('compact', !view.tall);
  // en horizontal el tamaño acompaña al panel (legible también en pantallas grandes)
  node.style.fontSize = view.tall ? '' : clamp(panel.h * 0.024, 13, 20) + 'px';
}

function layoutText() {
  writeCounter(); // valores reales para medir el contador
  const ls = letterEl.style, cs = clockEl.style;
  let maxH, quizBox;

  if (view.tall) {
    const fs = clamp(vw * 0.042, 15, 21);
    const padX = Math.max(20, panel.w * 0.06);
    stageEl.style.setProperty('--fs', fs + 'px');
    Object.assign(cs, { left: padX + 'px', right: padX + 'px', top: 'auto', bottom: Math.max(16, fs) + 'px' });
    Object.assign(ls, { left: padX + 'px', width: panel.w - 2 * padX + 'px' });
    stageEl.style.setProperty('--sig-indent', '26%');

    // el pergamino se apoya sobre el suelo del bosque, delante de la base del árbol
    const groundPx = view.oyEnd + GROUND_Y * view.k - panel.y;
    const top = Math.max(12, groundPx - panel.h * 0.075);
    ls.top = top + 'px';

    // botones justo encima del contador
    const clockTop = panel.h - Math.max(16, fs) - clockEl.offsetHeight;
    placeButton(spellbookEl, panel.x + panel.w / 2, panel.y + clockTop - 12, 'translate(-50%, -100%)');
    maxH = clockTop - 12 - 112 - top;   // hueco para las placas de hechizo
    quizBox = { x: panel.x + padX * 0.6, y: panel.y + groundPx + fs * 0.8, w: panel.w - padX * 1.2, h: panel.h - groundPx - fs * 0.8 - 14, fs: fs * 1.05 };
  } else {
    const u = panel.h / 100;
    stageEl.style.setProperty('--fs', 4 * u + 'px');
    Object.assign(cs, { left: 12.6 * u + 'px', right: 'auto', top: 80.4 * u + 'px', bottom: 'auto' });
    Object.assign(ls, { left: 13.3 * u + 'px', top: 14 * u + 'px', width: 52 * u + 'px' });
    stageEl.style.setProperty('--sig-indent', 19 * u + 'px');
    placeButton(spellbookEl, panel.x + panel.w - 3 * u, panel.y + panel.h - 3.2 * u, 'translate(-100%, -100%)');
    maxH = (80.4 - 2.5 - 14) * u;
    quizBox = { x: panel.x + 8 * u, y: panel.y + 7 * u, w: 60 * u, h: 82 * u, fs: 3.6 * u };
  }

  Object.assign(quizEl.style, {
    left: quizBox.x + 'px', top: quizBox.y + 'px', width: quizBox.w + 'px', height: quizBox.h + 'px'
  });
  quizEl.style.setProperty('--qfs', quizBox.fs + 'px');
  // controles de música: esquina superior derecha del panel, discretos
  musicUi.style.left = panel.x + panel.w - 8 + 'px';
  musicUi.style.top = panel.y + 8 + 'px';
  fitLetter(maxH);
  fitQuiz();
}

/* Ajusta el tamaño de la carta para que el texto completo quepa sin cortarse
   (en vertical puede crecer un poco si sobra espacio) */
function fitLetter(maxH) {
  for (const it of allTyping()) it.el.textContent = it.text + '_';
  let fit = view.tall ? 1.2 : 1;
  letterEl.style.setProperty('--fit', fit);
  while (letterEl.offsetHeight > maxH && fit > 0.5) {
    fit *= 0.95;
    letterEl.style.setProperty('--fit', fit);
  }
  clearTyping();
}


/* ---------------------------------------------------------------------
   Dibujo
   --------------------------------------------------------------------- */
function updateSceneTransform(t) {
  S.slide = NO_SLIDE ? 1 : t === null ? 0 : easeInOutCubic(clamp((t - TIMELINE.slide) / (TIMELINE.slideEnd - TIMELINE.slide)));
  if (view.tall) {
    S.k = view.k;
    S.ox = view.ox;
    S.oy = lerp(view.oyStart, view.oyEnd, S.slide);
  } else {
    S.k = panel.h;
    S.ox = panel.x;
    S.oy = panel.y;
  }
}

function treeX() {
  return view.tall ? TREE_X_START : lerp(TREE_X_START, TREE_X_END, S.slide);
}

function unitTransform() {
  const k = dpr * S.k;
  ctx.setTransform(k, 0, 0, k, dpr * S.ox, dpr * S.oy);
}

function drawSprite(img, x, y, size, rot, alpha, flip = 1) {
  const k = dpr * S.k;
  const s = (size / SHAPE_FRAC) * k;
  const c = Math.cos(rot) * s, sn = Math.sin(rot) * s;
  ctx.globalAlpha = alpha;
  ctx.setTransform(c * flip, sn * flip, -sn, c, dpr * S.ox + x * k, dpr * S.oy + y * k);
  ctx.drawImage(img, -0.5, -0.5, 1, 1);
}

function drawBackdrop(t, now) {
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.globalAlpha = 1;
  drawSeasonBackground(now);

  // unas pocas estrellas parpadean
  const time = now / 1000;
  for (const st of stars) {
    const a = st.a * (0.45 + 0.55 * Math.sin(time * st.tw + st.ph) ** 2);
    ctx.globalAlpha = a;
    ctx.fillStyle = COLORS.white;
    ctx.beginPath();
    ctx.arc(st.x, st.y, st.r * 1.15, 0, TAU);
    ctx.fill();
  }
  ctx.globalAlpha = 1;

  ctx.beginPath();
  if (ctx.roundRect) ctx.roundRect(panel.x, panel.y, panel.w, panel.h, panel.r);
  else ctx.rect(panel.x, panel.y, panel.w, panel.h);
  ctx.save();
  ctx.clip(); // la escena vive dentro del marco encantado

  // luz cálida alrededor del árbol, según se va formando la copa
  if (t !== null) {
    const bloom = clamp((t - TIMELINE.blossoms) / (TIMELINE.blossomsEnd - TIMELINE.blossoms));
    if (bloom > 0) {
      const cx = S.ox + treeX() * S.k;
      const cy = S.oy + CANOPY.cy * S.k;
      const r = S.k * 0.62;
      const h1 = sMix(x => parseRGB(x.halo[0])), h2 = sMix(x => parseRGB(x.halo[1]));
      const halo = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
      halo.addColorStop(0, rgbStr(h1, 0.18 * bloom));
      halo.addColorStop(0.45, rgbStr(h2, 0.09 * bloom));
      halo.addColorStop(1, rgbStr(h2, 0));
      ctx.fillStyle = halo;
      ctx.fillRect(cx - r, cy - r, r * 2, r * 2);
    }
  }
}

/* Bosque nocturno: cielo, estrellas, siluetas y niebla (se dibuja una vez por tamaño) */
let bgCanvas = null, bgCtx = null;
let stars = [];
let silhouettes = [];
let horizonY = 0;

/* Capa de estrellas (no cambia con la estación: sólo su brillo) */
function buildStarField() {
  if (!bgCanvas) { bgCanvas = document.createElement('canvas'); bgCtx = bgCanvas.getContext('2d'); }
  bgCanvas.width = canvas.width;
  bgCanvas.height = canvas.height;
  const g = bgCtx;
  g.setTransform(dpr, 0, 0, dpr, 0, 0);
  g.clearRect(0, 0, vw, vh);
  const rng = mulberry32(SETTINGS.seed + 7);
  stars = [];
  const n = Math.round(clamp(vw * vh / 5200, 70, 190));
  for (let i = 0; i < n; i++) {
    const x = rng() * vw;
    const y = rng() * horizonY * 0.96;
    const r = 0.5 + rng() * 1.3;
    const a = 0.25 + rng() * 0.55;
    g.fillStyle = `rgba(255, 246, 232, ${a})`;
    g.beginPath();
    g.arc(x, y, r, 0, TAU);
    g.fill();
    if (i % 6 === 0) stars.push({ x, y, r, a, tw: 0.5 + rng() * 1.5, ph: rng() * TAU });
  }
  buildSilhouettes();
}

/* Siluetas del bosque: la geometría se calcula una vez y se pinta con el color de la estación */
function buildSilhouettes() {
  const rng = mulberry32(SETTINGS.seed + 21);
  const line = (baseY, minH, maxH, step) => {
    const path = new Path2D();
    path.moveTo(-30, vh);
    for (let x = -30; x < vw + 60; x += step * (0.7 + rng() * 0.6)) {
      const h = minH + rng() * (maxH - minH);
      const w = h * (0.34 + rng() * 0.18);
      path.lineTo(x, baseY);
      path.quadraticCurveTo(x + w * 0.35, baseY - h * 0.55, x + w / 2, baseY - h);
      path.quadraticCurveTo(x + w * 0.65, baseY - h * 0.55, x + w, baseY);
    }
    path.lineTo(vw + 60, vh);
    path.closePath();
    return path;
  };
  silhouettes = [
    { path: line(horizonY - vh * 0.012, vh * 0.05, vh * 0.13, vw * 0.075), alpha: 0.72 },
    { path: line(horizonY + vh * 0.004, vh * 0.03, vh * 0.09, vw * 0.055), alpha: 0.92 }
  ];
}

/* Cielo, resplandor, estrellas, siluetas y niebla, todo con el color de la estación */
function drawSeasonBackground(now) {
  const g = ctx;
  g.setTransform(dpr, 0, 0, dpr, 0, 0);
  g.globalAlpha = 1;

  const c0 = sMix(x => x.cieloRGB[0]), c1 = sMix(x => x.cieloRGB[1]), c2 = sMix(x => x.cieloRGB[2]);
  const sky = g.createLinearGradient(0, 0, 0, vh);
  sky.addColorStop(0, rgbStr(c0));
  sky.addColorStop(0.5, rgbStr(c1));
  sky.addColorStop(1, rgbStr(c2));
  g.fillStyle = sky;
  g.fillRect(0, 0, vw, vh);

  const hz = sMix(x => x.horizonteRGB);
  const glow = g.createRadialGradient(vw / 2, horizonY, 0, vw / 2, horizonY, Math.max(vw, vh) * 0.75);
  glow.addColorStop(0, rgbStr(hz, 0.42));
  glow.addColorStop(0.45, rgbStr(hz, 0.16));
  glow.addColorStop(1, rgbStr(hz, 0));
  g.fillStyle = glow;
  g.fillRect(0, 0, vw, vh);

  if (bgCanvas) {
    g.globalAlpha = clamp(sMix(x => x.estrellas), 0, 1.4);
    g.drawImage(bgCanvas, 0, 0, vw, vh);
    g.globalAlpha = 1;
  }

  const sil0 = sMix(x => x.siluetasRGB[0]), sil1 = sMix(x => x.siluetasRGB[1]);
  if (silhouettes.length) {
    g.fillStyle = rgbStr(sil0, silhouettes[0].alpha);
    g.fill(silhouettes[0].path);
    g.fillStyle = rgbStr(sil1, silhouettes[1].alpha);
    g.fill(silhouettes[1].path);
  }

  // niebla que se desplaza muy despacio sobre el suelo del bosque
  if (FX_ON.niebla) {
    const mistC = sMix(x => x.nieblaRGB);
    const mistA = sMix(x => x.niebla.alpha) * ambient.nox;
    const time = now / 1000;
    for (let i = 0; i < 2; i++) {
      const y = horizonY - vh * (0.02 + i * 0.05);
      const h = vh * (0.10 + i * 0.03);
      const shift = Math.sin(time * (0.05 + i * 0.03) + i) * vw * 0.12;
      const mist = g.createLinearGradient(0, y - h / 2, 0, y + h / 2);
      mist.addColorStop(0, rgbStr(mistC, 0));
      mist.addColorStop(0.5, rgbStr(mistC, mistA * (1 - i * 0.3)));
      mist.addColorStop(1, rgbStr(mistC, 0));
      g.fillStyle = mist;
      g.fillRect(-vw * 0.2 + shift, y - h / 2, vw * 1.4, h);
    }
  }
}

/* Marco dorado de doble línea, como una página encantada */
function drawPanelFrame() {
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.globalAlpha = 1;
  const inset = view.tall ? 7 : Math.max(8, panel.h * 0.014);
  const r = Math.max(0, panel.r - inset);
  const frame = (d, width, alpha) => {
    ctx.beginPath();
    const x = panel.x + inset + d, y = panel.y + inset + d, w = panel.w - 2 * (inset + d), h = panel.h - 2 * (inset + d);
    if (ctx.roundRect) ctx.roundRect(x, y, w, h, Math.max(0, r - d)); else ctx.rect(x, y, w, h);
    ctx.lineWidth = width;
    ctx.strokeStyle = `rgba(${COLORS.gold}, ${alpha})`;
    ctx.stroke();
  };
  frame(0, 1.4, 0.75);
  frame(4, 0.7, 0.45);
}

/* Polvo dorado, luciérnagas, niebla y snitch */
const FX_ON = CONFIG.efectos || {};
let dustSprite = null;
const dustSprites = {};
let fireflySprite = null;
const fireflySprites = {};
const fireflies = [];
const ambient = { nox: 1, flash: 0, flashAt: -1, snitchAt: 12, snitch: null };

function makeFireflySprite(color = '226, 240, 140') {
  const cv = document.createElement('canvas');
  cv.width = cv.height = 48;
  const g = cv.getContext('2d');
  const grad = g.createRadialGradient(24, 24, 0, 24, 24, 24);
  grad.addColorStop(0, 'rgba(255, 255, 230, 1)');
  grad.addColorStop(0.22, `rgba(${color}, 0.85)`);
  grad.addColorStop(1, `rgba(${color}, 0)`);
  g.fillStyle = grad;
  g.fillRect(0, 0, 48, 48);
  return cv;
}

function buildFireflies() {
  fireflies.length = 0;
  if (!FX_ON.luciernagas) return;
  const n = REDUCED ? 6 : 14;
  for (let i = 0; i < n; i++) {
    fireflies.push({
      x: Math.random(), y: 0.45 + Math.random() * 0.5,
      vx: (Math.random() - 0.5) * 0.02, vy: (Math.random() - 0.5) * 0.012,
      size: 1.8 + Math.random() * 2.1,
      ph: Math.random() * TAU, tw: 0.5 + Math.random() * 0.9,
      born: 1.2 + i * 0.45            // aparecen una a una (Lumos Maxima)
    });
  }
}

/* Luciérnagas: vagan despacio por el bosque y parpadean */
function drawFireflies(t, now, dt) {
  if (!FX_ON.luciernagas || t === null) return;
  const time = now / 1000;
  for (const f of fireflies) {
    if (t < f.born) continue;
    const age = clamp((t - f.born) / 1.2);
    f.vx += (Math.random() - 0.5) * 0.004 * dt * 60 * 0.016;
    f.vy += (Math.random() - 0.5) * 0.003 * dt * 60 * 0.016;
    f.vx = clamp(f.vx, -0.03, 0.03);
    f.vy = clamp(f.vy, -0.02, 0.02);
    f.x += f.vx * dt;
    f.y += f.vy * dt;
    if (f.x < 0.02 || f.x > 0.98) f.vx *= -1;
    if (f.y < 0.35 || f.y > 0.97) f.vy *= -1;
    const blink = 0.35 + 0.65 * Math.pow(0.5 + 0.5 * Math.sin(time * f.tw * 2.2 + f.ph), 3);
    const sz = f.size * 5;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.globalAlpha = blink * age * ambient.nox * 0.72 * clamp(sMix(x => x.luces.cantidad), 0, 1.4);
    ctx.drawImage(fireflySprites[season.name] || fireflySprite, panel.x + f.x * panel.w - sz / 2, panel.y + f.y * panel.h - sz / 2, sz, sz);
  }
  ctx.globalAlpha = 1;
}

/* Niebla que se desplaza muy despacio sobre el suelo del bosque */
function drawMist(t, now) {
  if (!FX_ON.niebla || t === null) return;
  const time = now / 1000;
  const base = view.tall ? view.oyEnd + GROUND_Y * view.k : panel.y + GROUND_Y * panel.h;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  for (let i = 0; i < 2; i++) {
    const y = base - panel.h * (0.02 + i * 0.05);
    const h = panel.h * (0.10 + i * 0.03);
    const shift = Math.sin(time * (0.05 + i * 0.03) + i) * panel.w * 0.12;
    const g = ctx.createLinearGradient(0, y - h / 2, 0, y + h / 2);
    g.addColorStop(0, 'rgba(226, 220, 255, 0)');
    g.addColorStop(0.5, `rgba(226, 220, 255, ${(0.05 - i * 0.015) * ambient.nox})`);
    g.addColorStop(1, 'rgba(226, 220, 255, 0)');
    ctx.fillStyle = g;
    ctx.fillRect(panel.x - panel.w * 0.2 + shift, y - h / 2, panel.w * 1.4, h);
  }
}

/* Lumos Maxima: destello y encendido del bosque al llegar a la escena */
function triggerLumosMaxima(t) {
  if (!FX_ON.lumosMaxima || ambient.flashAt >= 0) return;
  ambient.flashAt = t;
  ambient.flash = 1;
}

function drawLumosFlash(t) {
  if (ambient.flash <= 0.01 || t === null) return;
  const k = clamp((t - ambient.flashAt) / 0.9);
  ambient.flash = 1 - k;
  if (ambient.flash <= 0.01) return;
  const cx = S.ox + treeX() * S.k;
  const cy = S.oy + SEED_Y * S.k;
  const r = Math.max(panel.w, panel.h) * (0.25 + k * 0.9);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
  g.addColorStop(0, `rgba(255, 246, 232, ${0.55 * ambient.flash})`);
  g.addColorStop(0.4, `rgba(245, 211, 107, ${0.22 * ambient.flash})`);
  g.addColorStop(1, 'rgba(245, 211, 107, 0)');
  ctx.fillStyle = g;
  ctx.fillRect(cx - r, cy - r, r * 2, r * 2);
  // anillo de luz que se expande
  ctx.strokeStyle = `rgba(245, 211, 107, ${0.5 * ambient.flash})`;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(cx, cy, r * 0.55, 0, TAU);
  ctx.stroke();
}

/* Snitch dorada que cruza la escena de vez en cuando */
function drawSnitch(t, now, dt) {
  if (!FX_ON.snitch || t === null || REDUCED) return;
  if (!ambient.snitch && t > ambient.snitchAt) {
    const dir = Math.random() < 0.5 ? 1 : -1;
    ambient.snitch = {
      x: dir > 0 ? -0.08 : 1.08, y: 0.12 + Math.random() * 0.35,
      dir, born: t, ph: Math.random() * TAU
    };
    ambient.snitchAt = t + 26 + Math.random() * 20;
  }
  const sn = ambient.snitch;
  if (!sn) return;
  sn.x += sn.dir * 0.18 * dt;
  sn.y += Math.sin((t - sn.born) * 3.4 + sn.ph) * 0.06 * dt;
  if ((sn.dir > 0 && sn.x > 1.1) || (sn.dir < 0 && sn.x < -0.1)) { ambient.snitch = null; return; }
  const px = panel.x + sn.x * panel.w;
  const py = panel.y + sn.y * panel.h;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.globalAlpha = ambient.nox;
  const halo = 26;
  ctx.drawImage(dustSprite, px - halo / 2, py - halo / 2, halo, halo);
  // cuerpo y alas
  ctx.fillStyle = '#f5d36b';
  ctx.beginPath();
  ctx.arc(px, py, 3.2, 0, TAU);
  ctx.fill();
  const wing = 5 + 3 * Math.abs(Math.sin(now / 45));
  ctx.strokeStyle = 'rgba(255, 246, 232, 0.75)';
  ctx.lineWidth = 1.2;
  for (const side of [-1, 1]) {
    ctx.beginPath();
    ctx.ellipse(px + side * 5, py - 1, wing, 2.4, side * 0.4, 0, TAU);
    ctx.stroke();
  }
  ctx.globalAlpha = 1;
  if (Math.random() < 0.25) fxSpark(px, py, 22, 0.5);
}

/* Nox: la magia ambiental se apaga poco a poco en el cierre */
function startNoxFade() {
  if (!FX_ON.cierreNox) return;
  ambient.noxFrom = performance.now();
}

function updateNox(now) {
  if (ambient.noxFrom === undefined) return;
  ambient.nox = clamp(1 - (now - ambient.noxFrom) / 1800);
}
const sceneDust = Array.from({ length: 22 }, () => ({
  nx: Math.random(), ny: Math.random(),
  size: 2 + Math.random() * 4, tw: 0.5 + Math.random() * 1.5,
  ph: Math.random() * TAU, drift: 0.004 + Math.random() * 0.01
}));

function makeDustSprite(color = '226, 190, 110') {
  const cv = document.createElement('canvas');
  cv.width = cv.height = 48;
  const g = cv.getContext('2d');
  const grad = g.createRadialGradient(24, 24, 0, 24, 24, 24);
  grad.addColorStop(0, 'rgba(255, 246, 214, 1)');
  grad.addColorStop(0.25, `rgba(${color}, 0.85)`);
  grad.addColorStop(1, `rgba(${color}, 0)`);
  g.fillStyle = grad;
  g.fillRect(0, 0, 48, 48);
  return cv;
}

function drawDust(t, now) {
  if (t === null) return;
  const fade = clamp((t + TIMELINE.intro) / 2) * 0.8;
  if (fade <= 0) return;
  const time = now / 1000;
  for (const d of sceneDust) {
    const y = ((d.ny - time * d.drift) % 1 + 1) % 1;
    const x = d.nx + Math.sin(time * 0.3 + d.ph) * 0.01;
    const a = fade * ambient.nox * (0.25 + 0.75 * Math.pow(0.5 + 0.5 * Math.sin(time * d.tw + d.ph), 2));
    const s = d.size * 2;
    ctx.globalAlpha = a;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.drawImage(dustSprites[season.name] || dustSprite, panel.x + x * panel.w - s / 2, panel.y + y * panel.h - s / 2, s, s);
  }
  ctx.globalAlpha = 1;
}

function drawSeed(t) {
  if (t === null || t > TIMELINE.trunk + 0.05) return;
  unitTransform();
  ctx.globalAlpha = 1;
  ctx.fillStyle = COLORS.seed;
  const x = treeX();

  if (t < TIMELINE.fall) {
    // corazón inicial: aparece, se encoge a un punto
    const size = t < 0
      ? SEED_SIZE * easeOutBack(clamp((t + TIMELINE.intro) / 0.4))
      : lerp(SEED_SIZE, DOT_R * 2.2, easeInQuad(clamp(t / TIMELINE.fall)));
    if (size <= 0) return;
    ctx.save();
    ctx.translate(x, SEED_Y);
    ctx.scale(size, size);
    heartPath(ctx);
    ctx.fill();
    ctx.restore();
    return;
  }

  const y = lerp(SEED_Y, GROUND_Y - DOT_R, easeInQuad(clamp((t - TIMELINE.fall) / (TIMELINE.land - TIMELINE.fall))));
  ctx.beginPath();
  ctx.arc(x, y, DOT_R, 0, TAU);
  ctx.fill();
}

function drawGround(t) {
  if (t === null || t < TIMELINE.ground) return;
  const minX = view.tall ? (panel.x + 14 - S.ox) / S.k : GROUND_X0;
  const maxX = view.tall ? (panel.x + panel.w - 14 - S.ox) / S.k : GROUND_X1;
  const L = (t - TIMELINE.ground) * 0.9;
  const x0 = Math.max(minX, treeX() - L);
  const x1 = Math.min(maxX, treeX() + L);
  unitTransform();
  ctx.globalAlpha = 1;
  // suelo del bosque: línea y halo con el color de la estación
  const cHalo = sMix(x => x.sueloRGB.halo);
  const cLinea = sMix(x => x.sueloRGB.linea);
  const cCharco = sMix(x => x.sueloRGB.charco);
  const halo = ctx.createLinearGradient(0, GROUND_Y - 0.055, 0, GROUND_Y + 0.01);
  halo.addColorStop(0, rgbStr(cHalo, 0));
  halo.addColorStop(1, rgbStr(cHalo, 0.09));
  ctx.fillStyle = halo;
  ctx.fillRect(x0, GROUND_Y - 0.055, x1 - x0, 0.065);
  // manto de hojarasca (otoño) o nieve (invierno) sobre el suelo
  const mantoC = sMix(x => x.mantoRGB || x.sueloRGB.linea);
  const mantoA = sMix(x => (x.manto ? x.manto.alpha : 0));
  if (mantoA > 0.01) {
    const manto = ctx.createLinearGradient(0, GROUND_Y - 0.004, 0, GROUND_Y + 0.02);
    manto.addColorStop(0, rgbStr(mantoC, mantoA * 0.9));
    manto.addColorStop(1, rgbStr(mantoC, 0));
    ctx.fillStyle = manto;
    ctx.fillRect(x0, GROUND_Y - 0.004, x1 - x0, 0.024);
  }
  ctx.fillStyle = rgbStr(cLinea, 0.55);
  ctx.fillRect(x0, GROUND_Y - 0.0016, x1 - x0, Math.max(0.0032, 1.4 / S.k));
  // charco de luz bajo el árbol
  const pool = ctx.createRadialGradient(treeX(), GROUND_Y, 0, treeX(), GROUND_Y, 0.22);
  pool.addColorStop(0, rgbStr(cCharco, 0.16));
  pool.addColorStop(1, rgbStr(cCharco, 0));
  ctx.save();
  ctx.translate(treeX(), GROUND_Y);
  ctx.scale(1, 0.22);
  ctx.translate(-treeX(), -GROUND_Y);
  ctx.fillStyle = pool;
  ctx.fillRect(treeX() - 0.22, GROUND_Y - 0.22, 0.44, 0.44);
  ctx.restore();
}

function drawBranches(t) {
  if (t === null || t < TIMELINE.trunk) return;
  unitTransform();
  ctx.globalAlpha = 1;
  const bx = treeX();
  const path = new Path2D();

  for (const b of branches) {
    const p = clamp((t - b.t0) / b.dur);
    if (p <= 0) continue;
    const sx = bx + b.x0, sy = GROUND_Y + b.y0;
    const cx = bx + b.cx, cy = GROUND_Y + b.cy;
    const ex = bx + b.x1, ey = GROUND_Y + b.y1;
    const n = 16;
    const L = [], Rt = [];
    for (let i = 0; i <= n; i++) {
      const tt = (p * i) / n, mt = 1 - tt;
      const px = mt * mt * sx + 2 * mt * tt * cx + tt * tt * ex;
      const py = mt * mt * sy + 2 * mt * tt * cy + tt * tt * ey;
      const tx = 2 * mt * (cx - sx) + 2 * tt * (ex - cx);
      const ty = 2 * mt * (cy - sy) + 2 * tt * (ey - cy);
      const tl = Math.hypot(tx, ty) || 1;
      const w = (b.w1 + (b.w0 - b.w1) * Math.pow(1 - tt, b.taper)) / 2;
      L.push(px - (ty / tl) * w, py + (tx / tl) * w);
      Rt.push(px + (ty / tl) * w, py - (tx / tl) * w);
    }
    path.moveTo(L[0], L[1]);
    for (let i = 2; i < L.length; i += 2) path.lineTo(L[i], L[i + 1]);
    for (let i = Rt.length - 2; i >= 0; i -= 2) path.lineTo(Rt[i], Rt[i + 1]);
    path.closePath();
  }
  ctx.fillStyle = COLORS.trunk;
  ctx.fill(path);
}

function drawBlossoms(t) {
  if (t === null || t < TIMELINE.blossoms) return;
  const bx = treeX();
  const now = seasonCfg();
  const prev = season.from ? SEASONS[season.from] : null;
  const k = season.k;   // 0 = estación anterior · 1 = nueva
  const prevSprites = season.from ? seasonSprites[season.from] : null;

  for (const b of blossoms) {
    const age = t - b.t0;
    if (age <= 0) continue;
    const pop = age < 0.25 ? easeOutBack(age / 0.25) : 1;
    const base = b.alpha * clamp(age / 0.1);
    const x = bx + b.dx;
    // en invierno la copa se queda con menos flores, pero sigue siendo un corazón
    const keepNow = b.thin <= now.densidad ? 1 : 0;
    const keepPrev = prev ? (b.thin <= prev.densidad ? 1 : 0) : keepNow;
    if (prevSprites && k < 1) {
      if (keepPrev) drawSprite(prevSprites[b.color], x, b.y, b.size * pop * prev.tamano, b.rot, base * (1 - k) * keepPrev);
      if (keepNow) drawSprite(sprites[b.color], x, b.y, b.size * pop * now.tamano, b.rot, base * k);
    } else if (keepNow) {
      drawSprite(sprites[b.color], x, b.y, b.size * pop * now.tamano, b.rot, base);
    }
  }
}

function updateFalling(t, dt) {
  if (t === null || t < 0) return;
  const caida = seasonCfg().caida;
  if (t > TIMELINE.falling && t >= nextFall) {
    const [a, b] = caida.cada;
    nextFall = t + a + fxRng() * (b - a);
    const tope = REDUCED ? Math.round(caida.max / 2) : caida.max;
    if (falling.length < tope) {
      // en horizontal salen sobre todo de la mitad izquierda de la copa (hacia el texto)
      let src = blossoms[Math.floor(fxRng() * blossoms.length)];
      if (!view.tall) {
        for (let k = 0; k < 4 && src.dx > 0.05; k++) src = blossoms[Math.floor(fxRng() * blossoms.length)];
      }
      const tipo = caida.tipo;
      const leaf = tipo === 'hojas' ? fxRng() < 0.75 : tipo === 'petalos' ? FX_ON.petalos && fxRng() < 0.7 : tipo === 'corazones' ? FX_ON.petalos && fxRng() < 0.22 : false;
      const snow = tipo === 'nieve' && fxRng() < 0.8;
      // desde la copa, desde el cielo, o mezclado
      const desdeCielo = caida.desde === 'cielo' || (caida.desde === 'mixto' && fxRng() < 0.45);
      const topU = (panel.y - S.oy) / S.k - 0.03;
      const xa = (panel.x - S.ox) / S.k, xb = (panel.x + panel.w - S.ox) / S.k;
      const [vyMin, vyMax] = caida.vy;
      falling.push({
        leaf, snow,
        x: desdeCielo ? xa + fxRng() * (xb - xa) : treeX() + src.dx,
        y: desdeCielo ? topU : src.y,
        size: src.size * (snow ? 0.55 + fxRng() * 0.4 : 0.9 + fxRng() * 0.3),
        sprite: sprites[src.color],
        alpha: 0.85 + fxRng() * 0.15,
        rot: src.rot, vr: (fxRng() - 0.5) * 1.5,
        vx: (view.tall ? (fxRng() - 0.55) * 0.14 : -(0.12 + fxRng() * 0.12)) * caida.brisa,
        vy: vyMin + fxRng() * (vyMax - vyMin),
        amp: 0.012 * caida.brisa,
        ph: fxRng() * TAU,
        age: 0
      });
    }
  }
  const minX = (panel.x - S.ox) / S.k - 0.1;
  const maxX = (panel.x + panel.w - S.ox) / S.k + 0.1;
  const maxY = (panel.y + panel.h - S.oy) / S.k + 0.05;
  for (let i = falling.length - 1; i >= 0; i--) {
    const p = falling[i];
    p.age += dt;
    p.vy += 0.01 * dt;
    p.x += (p.vx + Math.sin(p.age * 1.6 + p.ph) * (p.amp || 0) * 6) * dt;
    p.y += (p.vy + Math.sin(p.age * 3 + p.ph) * 0.05) * dt;
    p.rot += p.vr * dt;
    if (p.x < minX || p.x > maxX || p.y > maxY) falling.splice(i, 1);
  }
}

function drawFalling() {
  for (const p of falling) {
    const alpha = p.alpha * clamp(p.age / 0.15);
    if (p.snow) {
      // copo de nieve
      const px = dpr * (S.ox + p.x * S.k), py = dpr * (S.oy + p.y * S.k);
      const r = p.size * S.k * dpr * 0.22;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.globalAlpha = alpha * 0.9;
      ctx.fillStyle = '#eef4ff';
      ctx.beginPath();
      ctx.arc(px, py, r, 0, TAU);
      ctx.fill();
      ctx.globalAlpha = 1;
      continue;
    }
    if (p.leaf) {
      // hoja dorada girando
      const k = dpr * S.k;
      const flip = Math.cos(p.age * 3.2 + p.ph);
      ctx.setTransform(Math.cos(p.rot) * k * flip, Math.sin(p.rot) * k * flip, -Math.sin(p.rot) * k, Math.cos(p.rot) * k,
        dpr * S.ox + p.x * k, dpr * S.oy + p.y * k);
      ctx.globalAlpha = alpha * 0.95;
      ctx.fillStyle = seasonCfg().caida.color;
      ctx.beginPath();
      ctx.ellipse(0, 0, p.size * 0.55, p.size * 0.22, 0, 0, TAU);
      ctx.fill();
      ctx.globalAlpha = 1;
      continue;
    }
    drawSprite(p.sprite, p.x, p.y, p.size, p.rot, alpha, Math.cos(p.age * 3.2 + p.ph));
  }
}


/* ---------------------------------------------------------------------
   Música de fondo
   Un único <audio> reutilizado. Empieza sólo dentro del toque inicial.
   Volumen y fundido con Web Audio si se puede; si no, con audio.volume.
   --------------------------------------------------------------------- */
const MC = CONFIG.music || {};
const music = {
  el: null, ctx: null, gain: null,
  available: !!MC.enabled, started: false, userPaused: false, pausedByHidden: false,
  fade: null
};

/* Comprueba en silencio si la canción existe: si no, Sonorus no se ofrece */
async function probeMusic() {
  if (!music.available || !MC.file) return;
  try {
    const res = await fetch(MC.file, { method: 'HEAD' });
    if (!res.ok) music.available = false;
  } catch (e) {
    music.available = false;   // sin canción: la experiencia sigue igual
  }
  updateMusicUi();
}

function initMusic() {
  if (!music.available) return;
  const audio = new Audio();
  audio.preload = 'none';   // no se descarga nada hasta el primer toque
  audio.loop = true;
  audio.setAttribute('playsinline', '');
  audio.addEventListener('error', () => { music.available = false; audio.pause(); updateMusicUi(); });
  audio.addEventListener('play', updateMusicUi);
  audio.addEventListener('pause', updateMusicUi);
  music.el = audio;
}

function setupAudioGraph() {
  if (music.ctx || location.protocol === 'file:') return;
  const AC = window.AudioContext || window.webkitAudioContext;
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  // en iOS la música por Web Audio respetaría el interruptor de silencio salvo con audioSession
  if (!AC || (isIOS && !navigator.audioSession)) return;
  try {
    if (navigator.audioSession) navigator.audioSession.type = 'playback';
    music.ctx = new AC();
    const src = music.ctx.createMediaElementSource(music.el);
    music.gain = music.ctx.createGain();
    music.gain.gain.value = 0;
    src.connect(music.gain).connect(music.ctx.destination);
  } catch (e) {
    music.ctx = music.gain = null;
  }
}

function setMusicVolume(v) {
  if (music.gain) music.gain.gain.value = v;
  else try { music.el.volume = v; } catch (e) { /* iOS: volumen sólo por botones */ }
}

function startMusic() {
  if (!music.available || !music.el) return;
  music.started = true;
  const audio = music.el;
  if (!audio.src) audio.src = MC.file;
  setupAudioGraph();
  if (music.ctx && music.ctx.state === 'suspended') music.ctx.resume().catch(() => {});
  audio.pause();
  try { audio.currentTime = 0; } catch (e) { /* todavía sin datos */ }
  music.userPaused = false;
  music.fade = null;
  setMusicVolume(0);
  const played = audio.play();
  const onStart = () => {
    const target = clamp(MC.volume ?? 0.5, 0, 1);
    const dur = MC.fadeInSeconds ?? 3;
    if (music.gain) {
      const g = music.gain.gain, now = music.ctx.currentTime;
      g.cancelScheduledValues(now);
      g.setValueAtTime(0, now);
      g.linearRampToValueAtTime(target, now + dur);
    } else {
      music.fade = { from: 0, to: target, start: performance.now(), dur: dur * 1000 };
    }
    updateMusicUi();
  };
  if (played && played.then) {
    played.then(onStart).catch(err => {
      // NotAllowed: el navegador espera otro toque (el botón ▶ lo permite); otro error: no hay canción
      if (!err || err.name !== 'NotAllowedError') music.available = false;
      updateMusicUi();
    });
  } else {
    onStart();
  }
  updateMusicUi();
}

function updateMusicFade(now) {
  const f = music.fade;
  if (!f) return;
  const p = clamp((now - f.start) / f.dur);
  setMusicVolume(lerp(f.from, f.to, p));
  if (p >= 1) music.fade = null;
}

function toggleMusic() {
  const audio = music.el;
  if (!audio) return;
  if (audio.paused) {
    music.userPaused = false;
    if (music.ctx && music.ctx.state === 'suspended') music.ctx.resume().catch(() => {});
    if (!music.gain && !music.fade) setMusicVolume(clamp(MC.volume ?? 0.5, 0, 1));
    const played = audio.play();
    if (played && played.catch) played.catch(() => updateMusicUi());
  } else {
    music.userPaused = true;
    audio.pause();
  }
}

function toggleMute() {
  if (!music.el) return;
  music.el.muted = !music.el.muted;
  updateMusicUi();
}

function musicOnVisibility() {
  const audio = music.el;
  if (!audio || !music.available) return;
  if (document.hidden) {
    music.pausedByHidden = !audio.paused;
    audio.pause();
  } else if (music.pausedByHidden && !music.userPaused) {
    music.pausedByHidden = false;
    const played = audio.play();
    if (played && played.catch) played.catch(() => {});
  }
}

function updateMusicUi() {
  const show = music.available && !!music.el && music.started && playT !== null;
  musicUi.hidden = !show;
  if (!show) return;
  const paused = music.el.paused;
  musicUi.classList.toggle('paused', paused);
  musicToggleBtn.classList.toggle('is-paused', paused);
  musicToggleBtn.setAttribute('aria-label', paused ? MC.labels.play : MC.labels.pause);
  musicMuteBtn.classList.toggle('is-muted', music.el.muted);
  musicMuteBtn.setAttribute('aria-label', music.el.muted ? MC.labels.unmute : MC.labels.mute);
}


/* ---------------------------------------------------------------------
   Easter egg: tocar la copa varias veces seguidas
   --------------------------------------------------------------------- */
const egg = { taps: [], used: false };

function canopyHit(clientX, clientY) {
  const ux = (clientX - S.ox) / S.k;
  const uy = (clientY - S.oy) / S.k;
  const hx = (ux - treeX()) / CANOPY.sx;
  const hy = (CANOPY.cy - uy) / (CANOPY.sy * (uy > CANOPY.cy ? 1.1 : 1));
  return canopyInside(hx / 1.08, hy / 1.08); // un poco de margen para dedos
}

function onScenePointer(e) {
  const E = CONFIG.easterEgg;
  if (!E || egg.used || playT === null || frozenAt !== null) return;
  if (!quiz.done || playT < TIMELINE.blossomsEnd || finale.started) return;
  if (!canopyHit(e.clientX, e.clientY)) return;
  const now = performance.now();
  egg.taps = egg.taps.filter(time => now - time <= E.timeWindowMs);
  egg.taps.push(now);
  if (egg.taps.length >= E.tapsRequired) showEgg();
}

function showEgg() {
  const E = CONFIG.easterEgg;
  egg.used = true;
  egg.taps.length = 0;
  // centrado sobre la copa
  eggEl.style.left = S.ox + treeX() * S.k + 'px';
  eggEl.style.top = S.oy + CANOPY.cy * S.k + 'px';
  eggEl.textContent = E.message1;
  eggEl.hidden = false;
  void eggEl.offsetWidth;
  eggEl.classList.add('show');
  later(2600, () => { eggEl.classList.add('swap'); });
  later(2900, () => { eggEl.textContent = E.message2; eggEl.classList.remove('swap'); });
  later(6200, () => { eggEl.classList.remove('show'); });
  later(6800, () => { eggEl.hidden = true; });
}


/* ---------------------------------------------------------------------
   Final: foto → recuerdos → última cosa → lluvia de corazones
   --------------------------------------------------------------------- */
const memoryPhotoFailed = new Set();
const finale = { started: false, memoryShown: false, askShown: false, lastMemory: -1, closing: false };

function loadPhoto() {
  const P = CONFIG.finalPhoto;
  if (!P || !P.enabled || photoImg.dataset.requested) return;
  photoImg.dataset.requested = '1';
  photoImg.src = P.file;
}

/* Rellena una placa de hechizo con su runa, nombre y descripción */
function fillPlate(btn, spell, fallbackDesc) {
  if (!btn || !spell) return;
  btn.replaceChildren();
  const text = el('div', 'plate-text');
  text.append(el('span', 'plate-name', spell.nombre), el('span', 'plate-desc', spell.desc || fallbackDesc || ''));
  btn.append(el('span', 'plate-rune', spell.runa), text);
  btn.setAttribute('aria-label', spell.nombre + (spell.desc || fallbackDesc ? ': ' + (spell.desc || fallbackDesc) : ''));
}

function showPlate(btn, delay = 0) {
  spellbookEl.hidden = false;
  reveal(btn, delay);
}

function hidePlate(btn) {
  btn.classList.remove('in');
  btn.classList.add('out');
  later(420, () => { btn.hidden = true; btn.classList.remove('out'); });
}

function showSpellHint(text) {
  if (spells.hintShown) return;
  spells.hintShown = true;
  spellHintEl.textContent = text;
  spellbookEl.hidden = false;
  void spellHintEl.offsetWidth;
  spellHintEl.classList.add('in');
}

function hideSpellHint() {
  spellHintEl.classList.remove('in');
  later(500, () => { spellHintEl.textContent = ''; });
}

/* Sonorus: invoca la canción (dentro del toque, como exige el móvil) */
function castSonorus() {
  if (spells.sonorus) return;
  spells.sonorus = true;
  const [x, y] = castFxAt(sonorusBtn, { sparks: 26, waves: true });
  if (FX_ON.ondasSonorus) {
    // anillos que recorren toda la escena, como un eco
    for (let i = 0; i < 4; i++) fxRing(x, y, { r1: 320 + i * 220, dur: 1100 + i * 260, delay: i * 190 });
    document.body.classList.add('sonorus-echo');
    later(900, () => document.body.classList.remove('sonorus-echo'));
  }
  playMagicSound();
  startMusic();
  hidePlate(sonorusBtn);
  hideSpellHint();
  if (!spells.patronusShown) {
    spells.patronusShown = true;
    later(700, () => { if (!finale.started && secretBtn.hidden) showPlate(patronusBtn); });
  }
}

/* Lumos Máxima: ilumina el contador (el secreto de siempre) */
function castLumosMaxima() {
  if (secret.started) return;
  castFxAt(secretBtn, { sparks: 22, r1: 200 });
  hidePlate(secretBtn);
  startSecret();
}

/* Revelio: revela la fotografía dentro de un marco encantado */
function castRevelio() {
  if (finale.started) return;
  const [x, y] = castFxAt(revelioBtn, { sparks: 26, r1: 240, dur: 800 });
  fxStreak(x, y, vw / 2, vh * 0.42, 420);
  hidePlate(revelioBtn);
  hideSpellHint();
  later(260, startFinale);
}

/* Accio: trae un recuerdo desde fuera de la pantalla */
function castAccio() {
  const r = memoryEl.getBoundingClientRect();
  const target = r.width ? [r.left + r.width / 2, r.top + r.height / 2] : [vw / 2, vh / 2];
  if (FX_ON.accio) {
    fxStreak(-40, target[1] + 60, target[0], target[1], 460);
    fxRing(target[0], target[1], { r1: 120, dur: 520, delay: 320 });
  }
  showMemory();
}

/* Wingardium Leviosa: la foto y el recuerdo se elevan un momento */
function castLeviosa() {
  castFxAt(leviosaBtn, { sparks: 18, r1: 150, dur: 600 });
  finaleCard.classList.remove('leviosa');
  void finaleCard.offsetWidth;
  finaleCard.classList.add('leviosa');
  const r = finaleCard.getBoundingClientRect();
  for (let i = 0; i < 8; i++) {
    later(i * 90, () => fxSpark(r.left + Math.random() * r.width, r.bottom - 10, 40, 0.9));
  }
  later(2600, () => finaleCard.classList.remove('leviosa'));
}

/* Lingua Amoris: la misma frase, en muchos idiomas, cruzando la pantalla */
const lingua = { activo: false, born: 0, dur: 5200, palabras: [], siguiente: 0, indice: 0 };

function castLingua() {
  if (lingua.activo || !FX_ON.linguaAmoris) return;
  lingua.activo = true;
  lingua.born = performance.now();
  lingua.palabras.length = 0;
  lingua.siguiente = 0;
  lingua.indice = 0;
  castFxAt(linguaBtn, { sparks: 26, r1: 240, dur: 800, waves: true });
  hidePlate(linguaBtn);
  // la tarjeta se aparta un momento para dejar ver el cielo
  finaleEl.classList.add('atenuado');
  later(lingua.dur + 400, () => finaleEl.classList.remove('atenuado'));
}

function spawnPalabra(now) {
  const lista = CONFIG.idiomas || [];
  if (!lista.length) return;
  const texto = lista[lingua.indice % lista.length];
  lingua.indice++;
  const z = 0.45 + Math.random() * 0.9;                 // profundidad
  const lado = Math.random() < 0.5 ? -1 : 1;
  lingua.palabras.push({
    texto,
    x: panel.x + panel.w * (0.15 + Math.random() * 0.7),
    y: panel.y + panel.h * (0.18 + Math.random() * 0.6),
    vx: lado * (6 + Math.random() * 18) * z,
    vy: -(8 + Math.random() * 20) * z,
    rot: (Math.random() - 0.5) * 0.3,
    vr: (Math.random() - 0.5) * 0.12,
    size: (15 + Math.random() * 16) * z,
    tono: Math.random(),
    born: now,
    life: 2400 + Math.random() * 1200
  });
}

function drawLingua(now, dt) {
  if (!lingua.activo) return;
  const k = (now - lingua.born) / lingua.dur;
  const g = fxCtx;
  // va soltando palabras durante la primera mitad del hechizo
  if (k < 0.62 && now >= lingua.siguiente && lingua.palabras.length < (REDUCED ? 8 : 16)) {
    spawnPalabra(now);
    lingua.siguiente = now + (REDUCED ? 340 : 190);
  }
  g.setTransform(1, 0, 0, 1, 0, 0);
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  for (let i = lingua.palabras.length - 1; i >= 0; i--) {
    const w = lingua.palabras[i];
    const e = (now - w.born) / w.life;
    if (e >= 1) { lingua.palabras.splice(i, 1); continue; }
    w.x += w.vx * dt;
    w.y += w.vy * dt;
    w.rot += w.vr * dt;
    // entra con luz, se sostiene y se desvanece
    const alpha = e < 0.18 ? e / 0.18 : e > 0.72 ? (1 - e) / 0.28 : 1;
    const escala = 0.82 + 0.18 * Math.min(1, e / 0.18);
    const color = w.tono < 0.45 ? '245, 211, 107' : w.tono < 0.8 ? '245, 235, 212' : '199, 143, 161';
    g.save();
    g.translate(w.x * dpr, w.y * dpr);
    g.rotate(w.rot);
    g.scale(dpr * escala, dpr * escala);
    g.font = `600 ${w.size}px 'Cormorant Garamond', Georgia, serif`;
    g.shadowColor = `rgba(245, 211, 107, ${0.5 * alpha})`;
    g.shadowBlur = 14;
    g.fillStyle = `rgba(${color}, ${alpha})`;
    g.fillText(w.texto, 0, 0);
    g.restore();
    if (!REDUCED && Math.random() < 0.04) fxSpark(w.x, w.y, 28, 0.6);
  }
  g.shadowBlur = 0;
  if (k >= 1 && !lingua.palabras.length) lingua.activo = false;
}

/* Alohomora: abre lo que seguía cerrado */
function castAlohomora() {
  if (finale.closing) return;
  castFxAt(askBtn, { sparks: 24, r1: 200 });
  finaleCard.classList.add('unlocking');
  if (FX_ON.selloAlohomora) {
    // aparece un sello dorado y se rompe con luz
    sealEl.hidden = false;
    sealEl.classList.remove('break');
    void sealEl.offsetWidth;
    sealEl.classList.add('show');
    later(520, () => {
      sealEl.classList.add('break');
      const r = sealEl.getBoundingClientRect();
      fxBurst(r.left + r.width / 2, r.top + r.height / 2, 30, 150);
      fxRing(r.left + r.width / 2, r.top + r.height / 2, { r1: 260, dur: 700 });
    });
    later(1150, () => { sealEl.hidden = true; sealEl.classList.remove('show', 'break'); });
    later(1000, startClosing);
  } else {
    later(420, startClosing);
  }
}

/* Expecto Patronum: un guardián de luz cruza el bosque y rodea el árbol */
const patronus = { activo: false, born: 0, dur: 4600, trail: [] };

function castPatronus() {
  if (patronus.activo) return;
  patronus.activo = true;
  patronus.born = performance.now();
  patronus.trail.length = 0;
  castFxAt(patronusBtn, { sparks: 24, r1: 220, dur: 700 });
  hidePlate(patronusBtn);
}

function drawPatronus(now) {
  if (!patronus.activo) return;
  const k = (now - patronus.born) / patronus.dur;
  if (k >= 1) { patronus.activo = false; patronus.trail.length = 0; return; }

  // recorrido: entra por abajo, da una vuelta alrededor de la copa y se va
  const cx = S.ox + treeX() * S.k;
  const cy = S.oy + CANOPY.cy * S.k;
  const r = S.k * 0.42;
  let x, y;
  if (k < 0.28) {
    const e = k / 0.28;
    x = lerp(panel.x - 40, cx - r, e * e);
    y = lerp(panel.y + panel.h * 0.92, cy + r * 0.6, e);
  } else if (k < 0.82) {
    const a = ((k - 0.28) / 0.54) * TAU + Math.PI * 0.75;
    x = cx + Math.cos(a) * r;
    y = cy + Math.sin(a) * r * 0.82;
  } else {
    const e = (k - 0.82) / 0.18;
    x = lerp(cx - r * 0.7, panel.x + panel.w + 60, e * e);
    y = lerp(cy + r * 0.5, panel.y + panel.h * 0.35, e);
  }

  patronus.trail.push({ x, y, t: now });
  while (patronus.trail.length && now - patronus.trail[0].t > 700) patronus.trail.shift();

  const fade = k < 0.1 ? k / 0.1 : k > 0.9 ? (1 - k) / 0.1 : 1;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.lineCap = 'round';
  for (const [w, color, alpha] of [[16, '180, 220, 255', 0.10], [7, '214, 240, 255', 0.3], [2.4, '255, 255, 255', 0.85]]) {
    ctx.lineWidth = w;
    for (let i = 1; i < patronus.trail.length; i++) {
      const a = Math.pow(1 - (now - patronus.trail[i].t) / 700, 1.5) * alpha * fade;
      if (a <= 0.01) continue;
      ctx.strokeStyle = `rgba(${color}, ${a})`;
      ctx.beginPath();
      ctx.moveTo(patronus.trail[i - 1].x, patronus.trail[i - 1].y);
      ctx.lineTo(patronus.trail[i].x, patronus.trail[i].y);
      ctx.stroke();
    }
  }
  // cabeza luminosa
  const halo = ctx.createRadialGradient(x, y, 0, x, y, 34);
  halo.addColorStop(0, `rgba(255, 255, 255, ${0.95 * fade})`);
  halo.addColorStop(0.3, `rgba(200, 232, 255, ${0.5 * fade})`);
  halo.addColorStop(1, 'rgba(180, 220, 255, 0)');
  ctx.fillStyle = halo;
  ctx.fillRect(x - 34, y - 34, 68, 68);
  if (!REDUCED && Math.random() < 0.7) fxSpark(x, y, 26, 0.8);
}

/* Tempus: el árbol pasa a la siguiente estación */
function castTempus() {
  const E = CONFIG.estaciones;
  if (!E || !E.activo || playT === null) return;
  const orden = E.orden.filter(n => SEASONS[n]);
  const next = orden[(orden.indexOf(season.name) + 1) % orden.length];
  season.from = season.name;
  season.name = next;
  sprites = seasonSprites[next];
  season.k = 0;
  season.changedAt = performance.now();
  season.sweep = performance.now();

  const [x, y] = castFxAt(tempusBtn, { sparks: 20, r1: 180, dur: 600 });
  void x; void y;
  // la luz sube por el árbol y deja la copa con la ropa nueva
  fxRing(S.ox + treeX() * S.k, S.oy + CANOPY.cy * S.k, { r1: 260, dur: 900, delay: 120 });
  falling.length = 0;              // lo de la estación anterior se disipa
  nextFall = playT + 0.35;
  showSeasonLabel(E.nombres[next] || next);
}

/* Onda de hechizo: recorre TODA la escena y deja la estación nueva a su paso */
function drawSeasonSweep(now) {
  if (season.sweep < 0) return;
  const k = (now - season.sweep) / 1100;
  if (k >= 1) { season.sweep = -1; return; }
  const y = lerp(panel.y + panel.h + 60, panel.y - 60, k);
  const band = panel.h * 0.16;
  const a = Math.sin(k * Math.PI);
  const tone = sMix(x => x.sueloRGB.halo);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const g = ctx.createLinearGradient(0, y - band, 0, y + band * 0.5);
  g.addColorStop(0, rgbStr(tone, 0));
  g.addColorStop(0.45, rgbStr([255, 250, 240], 0.3 * a));
  g.addColorStop(0.55, rgbStr(tone, 0.22 * a));
  g.addColorStop(1, rgbStr(tone, 0));
  ctx.fillStyle = g;
  ctx.fillRect(panel.x, y - band, panel.w, band * 1.5);
  ctx.strokeStyle = rgbStr([255, 250, 240], 0.45 * a);
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(panel.x, y);
  ctx.lineTo(panel.x + panel.w, y);
  ctx.stroke();
  if (!REDUCED && Math.random() < 0.8) {
    fxSpark(panel.x + Math.random() * panel.w, y + (Math.random() - 0.5) * 20, 45, 0.7);
  }
}

function showSeasonLabel(text) {
  seasonLabelEl.textContent = text;
  seasonLabelEl.hidden = false;
  void seasonLabelEl.offsetWidth;
  seasonLabelEl.classList.add('show');
  later(1700, () => seasonLabelEl.classList.remove('show'));
  later(2300, () => { seasonLabelEl.hidden = true; });
}

/* Tinte y luz del bosque según la estación */
function seasonOverlay(now) {
  if (season.changedAt >= 0) season.k = clamp((now - season.changedAt) / 1100);
  if (season.k >= 1) season.from = null;
  // cielo, suelo, niebla y luces se mezclan solos con sMix()
}

/* Nox: apaga la luz de la tarjeta y vuelve al árbol */
function castNox() {
  if (finale.closing) return;
  castFxAt(noxBtn, { sparks: 14, r1: 120, dur: 500 });
  finaleEl.classList.remove('in');
  later(700, () => {
    finaleEl.hidden = true;
    finaleCard.classList.remove('in');
    finale.started = false;
    spells.revelio = false;   // el bucle vuelve a ofrecer Revelio
    spellbookEl.hidden = false;
  });
}

function buildExtras() {
  const P = CONFIG.finalPhoto;
  if (P && P.enabled) {
    document.getElementById('photo-caption').textContent = P.caption;
    document.getElementById('photo-placeholder-text').textContent = P.placeholder;
    photoImg.alt = P.caption;
    photoImg.addEventListener('load', () => photoFrame.classList.add('loaded'));
    photoImg.addEventListener('error', () => photoFrame.classList.add('missing'));
  } else {
    photoFrame.hidden = true;
    document.getElementById('photo-caption').hidden = true;
  }
  const HX = CONFIG.hechizos;
  fillPlate(sonorusBtn, HX.sonorus);
  fillPlate(secretBtn, HX.lumos, CONFIG.secreto ? CONFIG.secreto.boton : '');
  fillPlate(revelioBtn, HX.revelio);
  fillPlate(memoryBtn, HX.accio, CONFIG.memoriesButton);
  fillPlate(noxBtn, HX.nox);
  fillPlate(tempusBtn, HX.tempus);
  fillPlate(patronusBtn, HX.patronus);
  fillPlate(leviosaBtn, HX.leviosa);
  fillPlate(linguaBtn, HX.lingua);
  if (musicTitleEl) musicTitleEl.textContent = (CONFIG.music && CONFIG.music.title) || '';
  const F = CONFIG.finalMessage;
  document.getElementById('closing-question').textContent = HX.alohomora.aviso || "Parece que algo sigue cerrado…";
  fillPlate(askBtn, HX.alohomora, F.question);
  document.getElementById('closing-1').textContent = F.line1;
  document.getElementById('closing-2').textContent = F.line2;
  restartBtn.textContent = CONFIG.botonRepetir;
  initMusic();
}

function bindExtras() {
  musicToggleBtn.addEventListener('click', toggleMusic);
  musicMuteBtn.addEventListener('click', toggleMute);
  canvas.addEventListener('pointerdown', onScenePointer);
  memoryBtn.addEventListener('click', castAccio);
  askBtn.addEventListener('click', castAlohomora);
  sonorusBtn.addEventListener('click', castSonorus);
  secretBtn.addEventListener('click', castLumosMaxima);
  revelioBtn.addEventListener('click', castRevelio);
  noxBtn.addEventListener('click', castNox);
  tempusBtn.addEventListener('click', castTempus);
  patronusBtn.addEventListener('click', castPatronus);
  leviosaBtn.addEventListener('click', castLeviosa);
  linguaBtn.addEventListener('click', castLingua);
  restartBtn.addEventListener('click', () => {
    requestWakeLock();
    if (MAGIC.enabled && MAGIC.showOnReplay) {
      resetForMagic();
      startMagicIntro();
      return;
    }
    restart(true);   // la canción vuelve a invocarse con Sonorus
  });
}

function reveal(node, delayMs = 0) {
  const show = () => {
    node.hidden = false;
    void node.offsetWidth; // aplica el estado inicial antes de animar
    node.classList.add('in');
  };
  if (delayMs) later(delayMs, show); else show();
}

function startFinale() {
  finale.started = true;
  spellbookEl.hidden = true;
  loadPhoto();   // por si se llega aquí sin pasar por la intro
  finaleCard.classList.toggle('accio', !!FX_ON.accio);
  finaleCard.classList.toggle('levita', !!FX_ON.levitacion);
  if (FX_ON.accio) {
    // rastro desde el fondo de la escena hasta el centro
    fxStreak(vw / 2, vh + 60, vw / 2, vh * 0.45, 520);
    later(180, () => fxBurst(vw / 2, vh * 0.45, 16, 90));
  }
  finaleEl.hidden = false;
  finaleCard.hidden = false;
  void finaleEl.offsetWidth;
  finaleEl.classList.add('in');
  finaleCard.classList.add('in');
  const hasPhoto = CONFIG.finalPhoto && CONFIG.finalPhoto.enabled;
  if (hasPhoto) {
    photoFrame.classList.remove('reveal');
    later(260, () => {
      void photoFrame.offsetWidth;
      photoFrame.classList.add('reveal');
      const r = photoFrame.getBoundingClientRect();
      fxBurst(r.left + r.width / 2, r.top + r.height * 0.6, 18, 80);
    });
  }
  reveal(leviosaBtn, hasPhoto ? 2100 : 700);
  if (CONFIG.memories && CONFIG.memories.length) reveal(memoryBtn, hasPhoto ? 1900 : 500);
  else later(hasPhoto ? 1900 : 500, showAsk);
  reveal(noxBtn, hasPhoto ? 2400 : 1200);
}

function showMemory() {
  // el saco de recuerdos mezcla frases y fotos
  const textos = (CONFIG.memories || []).map(texto => ({ tipo: 'texto', texto }));
  const fotos = (CONFIG.recuerdosFoto || []).filter(f => !memoryPhotoFailed.has(f)).map(src => ({ tipo: 'foto', src }));
  // las fotos salen casi la mitad de las veces, aunque haya más frases
  if (!textos.length && !fotos.length) return;
  const usarFoto = fotos.length > 0 && (textos.length === 0 || Math.random() < 0.45);
  const pool = usarFoto ? fotos : textos;
  let i = Math.floor(Math.random() * pool.length);
  const clave = it => it.tipo + (it.src || it.texto);
  if (pool.length > 1 && clave(pool[i]) === finale.lastMemory) i = (i + 1) % pool.length;
  const item = pool[i];
  finale.lastMemory = clave(item);

  memoryEl.classList.remove('in');
  memoryEl.classList.toggle('levita', !!FX_ON.levitacion);
  memoryEl.classList.toggle('foto', item.tipo === 'foto');
  finaleCard.classList.toggle('memoria-foto', item.tipo === 'foto');
  memoryEl.hidden = false;
  void memoryEl.offsetWidth; // reinicia la animación de tarjeta

  if (item.tipo === 'foto') {
    const img = el('img', 'memory-photo');
    img.alt = '';
    img.decoding = 'async';
    img.addEventListener('error', () => {
      // si la foto no está, el recuerdo vuelve a ser una frase
      memoryPhotoFailed.add(item.src);
      memoryEl.classList.remove('foto');
      finaleCard.classList.remove('memoria-foto');
      memoryEl.textContent = (CONFIG.memories && CONFIG.memories[0]) || '';
    }, { once: true });
    img.src = item.src;
    memoryEl.replaceChildren(img);
  } else {
    memoryEl.textContent = item.texto;
  }
  memoryEl.classList.add('in');
  finaleCard.classList.add('has-memory');

  if (!finale.memoryShown) {
    finale.memoryShown = true;
    // Lingua Amoris ocupa el sitio de Wingardium justo antes del final
    if (FX_ON.linguaAmoris && CONFIG.idiomas && CONFIG.idiomas.length) {
      later(900, () => { if (!leviosaBtn.hidden) hidePlate(leviosaBtn); });
      reveal(linguaBtn, 1400);
    }
    later(2200, showAsk);
  }
}

function showAsk() {
  if (finale.askShown) return;
  finale.askShown = true;
  reveal(askEl);
}

function startClosing() {
  if (finale.closing) return;
  finale.closing = true;
  startNoxFade();   // la magia ambiental se apaga poco a poco
  const fin = CONFIG.hechizos.finite;
  if (fin && fin.nombre) {
    finiteEl.textContent = fin.nombre;
    finiteEl.hidden = false;
    void finiteEl.offsetWidth;
    finiteEl.classList.add('show');
    later(2400, () => finiteEl.classList.remove('show'));
    later(3000, () => { finiteEl.hidden = true; });
  }
  finaleCard.classList.add('out');
  finaleEl.classList.add('closing'); // fondo más oscuro para que el mensaje se lea bien
  later(450, () => { finaleCard.hidden = true; });
  closingEl.hidden = false;
  startConfetti(3600);
  reveal(document.getElementById('closing-1'), 500);
  reveal(document.getElementById('closing-2'), 2300);
  reveal(restartBtn, 4400);
}

function resetExtras() {
  // magia ambiental
  ambient.nox = 1;
  delete ambient.noxFrom;
  ambient.flash = 0;
  ambient.flashAt = -1;
  ambient.snitch = null;
  ambient.snitchAt = 12;
  buildFireflies();
  // hechizos
  spells.hintShown = spells.sonorus = spells.revelio = spells.casting = false;
  spellbookEl.hidden = true;
  spellHintEl.classList.remove('in');
  spellHintEl.textContent = '';
  spells.tempusShown = false;
  season.name = (CONFIG.estaciones && SEASONS[CONFIG.estaciones.inicial]) ? CONFIG.estaciones.inicial : 'verano';
  season.from = null;
  season.k = 1;
  season.changedAt = -1;
  season.sweep = -1;
  sprites = seasonSprites[season.name];
  seasonLabelEl.hidden = true;
  seasonLabelEl.classList.remove('show');
  finiteEl.hidden = true;
  finiteEl.classList.remove('show');
  spells.patronusShown = false;
  patronus.activo = false;
  patronus.trail.length = 0;
  finaleCard.classList.remove('leviosa');
  lingua.activo = false;
  lingua.palabras.length = 0;
  finaleEl.classList.remove('atenuado');
  for (const btn of [sonorusBtn, secretBtn, revelioBtn, noxBtn, tempusBtn, patronusBtn, leviosaBtn, linguaBtn]) {
    btn.hidden = true;
    btn.classList.remove('in', 'out');
  }
  photoFrame.classList.remove('reveal');
  finaleCard.classList.remove('unlocking', 'accio', 'levita');
  memoryEl.classList.remove('levita');
  sealEl.hidden = true;
  sealEl.classList.remove('show', 'break');
  document.body.classList.remove('sonorus-echo');
  fx.rings.length = fx.sparks.length = fx.streaks.length = 0;
  fxCtx.setTransform(1, 0, 0, 1, 0, 0);
  fxCtx.clearRect(0, 0, fxCanvas.width, fxCanvas.height);
  // la canción vuelve a empezar desde Sonorus
  if (music.el) { music.el.pause(); try { music.el.currentTime = 0; } catch (e) {} }
  music.started = false;
  music.userPaused = false;
  updateMusicUi();
  // final
  finale.started = finale.memoryShown = finale.askShown = finale.closing = false;
  finale.lastMemory = '';
  finaleEl.hidden = true;
  closingEl.hidden = true;
  for (const node of [finaleEl, finaleCard, memoryEl, memoryBtn, askEl, restartBtn,
    document.getElementById('closing-1'), document.getElementById('closing-2')]) {
    node.classList.remove('in', 'out', 'has-memory', 'closing');
  }
  memoryEl.hidden = memoryBtn.hidden = askEl.hidden = restartBtn.hidden = true;
  document.getElementById('closing-1').hidden = document.getElementById('closing-2').hidden = true;
  memoryEl.replaceChildren();
  memoryEl.classList.remove('foto');
  finaleCard.classList.remove('memoria-foto');
  // easter egg
  egg.used = false;
  egg.taps.length = 0;
  eggEl.classList.remove('show', 'swap');
  eggEl.hidden = true;
  // confeti
  stopConfetti();
}


/* ---------------------------------------------------------------------
   Lluvia de corazones (Canvas, partículas reutilizadas)
   --------------------------------------------------------------------- */
/* Efectos de hechizo: anillos, chispas y estelas, en el mismo canvas que el confeti */
const fx = { rings: [], sparks: [], streaks: [] };
const fxBusy = () => fx.rings.length || fx.sparks.length || fx.streaks.length;

function fxSpark(x, y, speed = 90, life = 0.8) {
  if (fx.sparks.length > 160) return;
  const a = Math.random() * TAU, v = speed * (0.3 + Math.random());
  fx.sparks.push({ x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v - 20, age: 0, life, size: 1.5 + Math.random() * 3 });
}

function fxBurst(x, y, n = 22, speed = 110) {
  const count = REDUCED ? Math.round(n / 2) : n;
  for (let i = 0; i < count; i++) fxSpark(x, y, speed, 0.6 + Math.random() * 0.6);
}

function fxRing(x, y, { r1 = 190, dur = 700, delay = 0 } = {}) {
  fx.rings.push({ x, y, r1, dur, born: performance.now() + delay });
}

/* Estela de luz que entra desde fuera de pantalla (Accio) o recorre un borde */
function fxStreak(x0, y0, x1, y1, dur = 480) {
  fx.streaks.push({ x0, y0, x1, y1, dur, born: performance.now(), trail: [] });
}

function castFxAt(el, opts = {}) {
  const r = el.getBoundingClientRect();
  const x = r.left + r.width / 2, y = r.top + r.height / 2;
  fxBurst(x, y, opts.sparks ?? 24);
  fxRing(x, y, { r1: opts.r1 ?? 170, dur: opts.dur ?? 650 });
  if (opts.waves) for (let i = 1; i <= 2; i++) fxRing(x, y, { r1: 240 + i * 60, dur: 900, delay: i * 220 });
  return [x, y];
}

const CONFETTI_MAX = 110;
const confettiPool = Array.from({ length: CONFETTI_MAX }, () => ({ alive: false }));
const confetti = { running: false, until: 0, acc: 0, alive: 0 };

function startConfetti(durationMs) {
  confetti.running = true;
  confetti.until = performance.now() + durationMs;
  confetti.acc = 0;
}

function stopConfetti() {
  confetti.running = false;
  confetti.alive = 0;
  for (const p of confettiPool) p.alive = false;
  fxCtx.setTransform(1, 0, 0, 1, 0, 0);
  fxCtx.clearRect(0, 0, fxCanvas.width, fxCanvas.height);
}

function spawnConfetti() {
  const p = confettiPool.find(q => !q.alive);
  if (!p) return;
  const roll = Math.random();
  const heart = roll < 0.42;
  p.alive = true;
  p.heart = heart;
  p.spark = !heart && roll < 0.82;   // chispa dorada luminosa
  p.sprite = sprites[Math.floor(Math.random() * sprites.length)];
  p.color = ['#e2c27a', '#c9a45c', '#f3dfa6', '#9e1234'][Math.floor(Math.random() * 4)];
  p.size = heart ? 12 + Math.random() * 14 : 6 + Math.random() * 6;
  p.x = Math.random() * vw;
  p.y = -30 - Math.random() * 40;
  p.vy = 110 + Math.random() * 120;
  p.vx = (Math.random() - 0.5) * 40;
  p.rot = Math.random() * TAU;
  p.vr = (Math.random() - 0.5) * 4;
  p.ph = Math.random() * TAU;
}

function updateFx(dt, now) {
  const g = fxCtx;
  g.setTransform(1, 0, 0, 1, 0, 0);
  g.clearRect(0, 0, fxCanvas.width, fxCanvas.height);
  drawConfetti(dt, now, g);
  drawSpellFx(dt, now, g);
  drawLingua(now, dt);
}

function drawSpellFx(dt, now, g) {
  // anillos de luz
  for (let i = fx.rings.length - 1; i >= 0; i--) {
    const r = fx.rings[i];
    const k = (now - r.born) / r.dur;
    if (k < 0) continue;
    if (k >= 1) { fx.rings.splice(i, 1); continue; }
    g.strokeStyle = `rgba(245, 211, 107, ${(1 - k) * 0.65})`;
    g.lineWidth = (1 + 2 * (1 - k)) * dpr;
    g.beginPath();
    g.arc(r.x * dpr, r.y * dpr, (12 + r.r1 * k) * dpr, 0, TAU);
    g.stroke();
  }
  // estelas
  for (let i = fx.streaks.length - 1; i >= 0; i--) {
    const st = fx.streaks[i];
    const k = clamp((now - st.born) / st.dur);
    const e = 1 - Math.pow(1 - k, 3);
    const x = lerp(st.x0, st.x1, e), y = lerp(st.y0, st.y1, e);
    st.trail.push({ x, y, t: now });
    while (st.trail.length && now - st.trail[0].t > 260) st.trail.shift();
    g.lineCap = 'round';
    for (const [w, color, alpha] of [[10, '240,196,120', 0.16], [4, '255,214,150', 0.4], [1.6, '255,250,238', 0.95]]) {
      g.lineWidth = w * dpr;
      for (let j = 1; j < st.trail.length; j++) {
        const a = Math.pow(1 - (now - st.trail[j].t) / 260, 1.5) * alpha;
        if (a <= 0.01) continue;
        g.strokeStyle = `rgba(${color},${a})`;
        g.beginPath();
        g.moveTo(st.trail[j - 1].x * dpr, st.trail[j - 1].y * dpr);
        g.lineTo(st.trail[j].x * dpr, st.trail[j].y * dpr);
        g.stroke();
      }
    }
    if (dustSprite) {
      const sz = 46 * dpr;
      g.globalAlpha = 1 - k * 0.4;
      g.drawImage(dustSprite, x * dpr - sz / 2, y * dpr - sz / 2, sz, sz);
      g.globalAlpha = 1;
    }
    if (k >= 1) { fxBurst(st.x1, st.y1, 10, 70); fx.streaks.splice(i, 1); }
  }
  // chispas doradas
  for (let i = fx.sparks.length - 1; i >= 0; i--) {
    const sp = fx.sparks[i];
    sp.age += dt;
    if (sp.age >= sp.life) { fx.sparks.splice(i, 1); continue; }
    sp.vx *= Math.exp(-dt * 1.7);
    sp.vy = sp.vy * Math.exp(-dt * 1.7) + 60 * dt;
    sp.x += sp.vx * dt;
    sp.y += sp.vy * dt;
    const a = 1 - sp.age / sp.life;
    if (dustSprite) {
      const sz = sp.size * 6 * dpr;
      g.globalAlpha = a;
      g.drawImage(dustSprite, sp.x * dpr - sz / 2, sp.y * dpr - sz / 2, sz, sz);
      g.globalAlpha = 1;
    }
  }
}

function drawConfetti(dt, now, g) {
  if (!confetti.running) return;
  if (now < confetti.until) {
    confetti.acc += dt * 32; // ≈32 partículas por segundo
    while (confetti.acc >= 1) { confetti.acc -= 1; spawnConfetti(); }
  }
  let alive = 0;
  for (const p of confettiPool) {
    if (!p.alive) continue;
    p.ph += dt * 3;
    p.x += (p.vx + Math.sin(p.ph) * 30) * dt;
    p.y += p.vy * dt;
    p.rot += p.vr * dt;
    if (p.y > vh + 40) { p.alive = false; continue; }
    alive++;
    const c = Math.cos(p.rot) * dpr, sn = Math.sin(p.rot) * dpr;
    const flip = Math.cos(p.ph * 1.3);
    g.setTransform(c * flip, sn * flip, -sn, c, p.x * dpr, p.y * dpr);
    if (p.spark) {
      const s = p.size * 2.4;
      g.drawImage(dustSprite, -s / 2, -s / 2, s, s);
    } else if (p.heart) {
      const s = p.size / SHAPE_FRAC;
      g.drawImage(p.sprite, -s / 2, -s / 2, s, s);
    } else {
      g.fillStyle = p.color;
      g.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
    }
  }
  confetti.alive = alive;
  if (alive === 0 && now >= confetti.until) stopConfetti();
}


/* ---------------------------------------------------------------------
   Puerta encantada: clave y frase antes de entrar
   --------------------------------------------------------------------- */
const GATE = CONFIG.puerta || { activo: false };
const gateEl = document.getElementById('gate');
const gateTitle = document.getElementById('gate-title');
const gateSub = document.getElementById('gate-sub');
const gateLabel = document.getElementById('gate-label');
const gateForm = document.getElementById('gate-form');
const gateInput = document.getElementById('gate-input');
const gateBtn = document.getElementById('gate-btn');
const gateMsg = document.getElementById('gate-msg');
const gateHint = document.getElementById('gate-hint');
const gateLock = document.getElementById('gate-lock');
const gate = { paso: 0, fallos: 0, abierta: false };

/* compara sin tildes, mayúsculas, espacios ni signos */
function normalizar(texto) {
  return String(texto)
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');
}

function gateStep() {
  const paso = GATE.pasos[gate.paso];
  gateLabel.textContent = paso.etiqueta;
  gateInput.value = '';
  gateInput.placeholder = paso.placeholder || '';
  gateInput.setAttribute('aria-label', paso.etiqueta);
  gateBtn.textContent = paso.boton;
  gateSub.textContent = paso.ayuda || GATE.subtitulo;
  gateMsg.textContent = '';
  gateMsg.className = 'gate-msg';
  gateHint.textContent = '';
  gate.fallos = 0;
}

function gateTry(e) {
  if (e) e.preventDefault();
  if (gate.abierta) return;
  const paso = GATE.pasos[gate.paso];
  const validas = [].concat(paso.valor).map(normalizar);
  const dicho = normalizar(gateInput.value);
  if (!dicho) return;

  if (validas.includes(dicho)) {
    gateMsg.textContent = paso.exito || '';
    gateMsg.className = 'gate-msg ok';
    gateHint.textContent = '';
    gateInput.blur();
    const r = gateLock.getBoundingClientRect();
    fxBurst(r.left + r.width / 2, r.top + r.height / 2, 18, 110);
    if (gate.paso < GATE.pasos.length - 1) {
      gate.paso++;
      gateLock.classList.add('turn');
      later(650, () => { gateLock.classList.remove('turn'); gateStep(); });
    } else {
      abrirPuerta();
    }
    return;
  }

  gate.fallos++;
  const errores = [].concat(paso.error || 'No es esa.');
  gateMsg.textContent = errores[(gate.fallos - 1) % errores.length];
  gateMsg.className = 'gate-msg fail';
  gateForm.classList.remove('shake');
  void gateForm.offsetWidth;
  gateForm.classList.add('shake');
  if (gate.fallos >= 2 && paso.pista) gateHint.textContent = paso.pista;
  gateInput.select();
}

/* Alohomora: la cerradura se rompe con luz y empieza la magia */
function abrirPuerta() {
  gate.abierta = true;
  gateLock.classList.add('open');
  const r = gateLock.getBoundingClientRect();
  fxBurst(r.left + r.width / 2, r.top + r.height / 2, 34, 170);
  fxRing(r.left + r.width / 2, r.top + r.height / 2, { r1: 320, dur: 900 });
  later(520, () => {
    gateEl.classList.add('hide');
    if (MAGIC.enabled) startMagicIntro();
    else { introEl.hidden = false; }
  });
  later(1300, () => { gateEl.hidden = true; });
}

function buildGate() {
  if (!GATE.activo || !GATE.pasos || !GATE.pasos.length) return false;
  gateTitle.textContent = GATE.titulo;
  gateStep();
  gateForm.addEventListener('submit', gateTry);
  gateEl.hidden = false;
  return true;
}


/* ---------------------------------------------------------------------
   Intro mágica: frases, partículas de luz, hechizo con estela (Canvas)
   --------------------------------------------------------------------- */
const MAGIC = CONFIG.introMagic || { enabled: false };
const magicEl = document.getElementById('magic');
const magicCanvas = document.getElementById('magic-canvas');
const magicCtx = magicCanvas.getContext('2d');
const magicLinesEl = document.getElementById('magic-lines');
const magicSpellEl = document.getElementById('magic-spell');
const lumosBtn = document.getElementById('spell-correct');
const wrongSpellBtn = document.getElementById('spell-wrong');
const magicEggEl = document.getElementById('magic-egg');

const MAGIC_COLORS = ['255,247,230', '240,208,140', '255,214,232', '214,204,255'];
const magic = {
  active: false, phase: 'idle', queue: [], eggQueue: [],
  motes: [], sparks: [], trail: [], orb: null, ring: null,
  bloom: 0, bloomTarget: 0,
  star: { nx: 0.86, ny: 0.13, taps: [] }, eggShown: false,
  wrongUsed: false, sfx: null, sfxFailed: false
};
let moteSprite = null;

function makeMoteSprite() {
  const cv = document.createElement('canvas');
  cv.width = cv.height = 64;
  const g = cv.getContext('2d');
  const grad = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  grad.addColorStop(0, 'rgba(255,255,255,1)');
  grad.addColorStop(0.18, 'rgba(255,244,220,0.85)');
  grad.addColorStop(0.45, 'rgba(240,200,140,0.25)');
  grad.addColorStop(1, 'rgba(240,200,140,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, 64, 64);
  return cv;
}

function resizeMagic() {
  magicCanvas.width = canvas.width;
  magicCanvas.height = canvas.height;
}

function makeMotes() {
  const n = Math.round(clamp(vw * vh / 8000, 40, 90));
  magic.motes = Array.from({ length: n }, () => ({
    x: Math.random() * vw, y: Math.random() * vh,
    vx: 0, vy: 0,
    drift: 5 + Math.random() * 12,
    size: 1.5 + Math.random() * 3.5,
    tw: 0.6 + Math.random() * 1.6, ph: Math.random() * TAU,
    color: MAGIC_COLORS[Math.floor(Math.random() * MAGIC_COLORS.length)]
  }));
}

/* Cola propia de la intro: tocar la pantalla adelanta al siguiente paso */
function mq(delayMs, fn) {
  const last = magic.queue.length ? magic.queue[magic.queue.length - 1].at : performance.now();
  magic.queue.push({ at: last + delayMs, fn });
}

function skipMagicStep() {
  if (!magic.queue.length || (magic.phase !== 'lines' && magic.phase !== 'wrong')) return;
  const shift = magic.queue[0].at - performance.now();
  if (shift > 0) for (const step of magic.queue) step.at -= shift;
}

function addMagicLine(text, letters = false) {
  const p = el('p', 'm-line' + (letters ? ' letters' : ''));
  if (letters) {
    graphemes(text).forEach((ch, i) => {
      const span = el('span', 'ch', ch);
      span.style.setProperty('--i', i);
      p.appendChild(span);
    });
  } else {
    p.textContent = text;
  }
  magicLinesEl.appendChild(p);
  void p.offsetWidth;
  p.classList.add('in');
  // pequeñas luces alrededor de la frase al revelarse
  const r = p.getBoundingClientRect();
  for (let i = 0; i < 10; i++) {
    spawnSpark(r.left + Math.random() * r.width, r.top + Math.random() * r.height, 18, 0.9);
  }
}

function clearMagicLines(fast = false) {
  for (const line of magicLinesEl.children) line.classList.add('out');
  const old = [...magicLinesEl.children];
  const remove = () => old.forEach(node => node.remove());
  if (fast) magic.eggQueue.push({ at: performance.now() + 450, fn: remove });
  else mq(600, remove);
}

function showSpell(withWrong) {
  magic.phase = 'spell';
  wrongSpellBtn.hidden = !withWrong;
  magicSpellEl.hidden = false;
  magicSpellEl.classList.remove('out');
  void magicSpellEl.offsetWidth;
  magicSpellEl.classList.add('in');
}

function hideSpell() {
  magicSpellEl.classList.add('out');
  magicSpellEl.classList.remove('in');
}

function startMagicIntro() {
  const M = MAGIC;
  magic.active = true;
  magic.phase = 'lines';
  magic.queue = [];
  magic.eggQueue = [];
  magic.sparks.length = 0;
  magic.trail.length = 0;
  magic.orb = magic.ring = null;
  magic.bloom = magic.bloomTarget = 0;
  magic.star.taps.length = 0;
  magic.eggShown = false;
  magicLinesEl.replaceChildren();
  magicSpellEl.hidden = true;
  magicSpellEl.classList.remove('in', 'out');
  magicEggEl.hidden = true;
  magicEggEl.classList.remove('show');
  magicEl.classList.remove('out', 'whiteout');
  magicEl.hidden = false;
  if (!moteSprite) moteSprite = makeMoteSprite();
  resizeMagic();
  makeMotes();

  const letters = M.letterByLetter || {};
  const pace = text => clamp(800 + text.length * 22, 1300, 2200);
  let delay = 700;
  M.romanticLines.forEach((text, i) => {
    mq(delay, () => addMagicLine(text, (letters.romanticLines || []).includes(i)));
    delay = pace(text);
  });
  mq(delay + 300, () => clearMagicLines());
  delay = 500;
  M.checkLines.forEach(text => {
    mq(delay, () => addMagicLine(text));
    delay = pace(text) - 300;
  });
  mq(delay, () => showSpell(!magic.wrongUsed));
}

function spawnSpark(x, y, speed = 40, life = 0.8, color) {
  if (magic.sparks.length > 220) return;
  const a = Math.random() * TAU, v = speed * (0.3 + Math.random());
  magic.sparks.push({
    x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v - 8,
    life, age: 0, size: 1.2 + Math.random() * 2.6,
    color: color || MAGIC_COLORS[Math.floor(Math.random() * 3)]
  });
}

function playMagicSound() {
  const S2 = CONFIG.magicSound;
  if (!S2 || !S2.enabled || magic.sfxFailed) return;
  try {
    if (!magic.sfx) {
      magic.sfx = new Audio();
      magic.sfx.preload = 'none';
      magic.sfx.addEventListener('error', () => { magic.sfxFailed = true; });
      magic.sfx.src = S2.file;
    }
    magic.sfx.currentTime = 0;
    try { magic.sfx.volume = clamp(S2.volume ?? 0.5, 0, 1); } catch (e) { /* iOS */ }
    const played = magic.sfx.play();
    if (played && played.catch) played.catch(() => { magic.sfxFailed = true; });
  } catch (e) {
    magic.sfxFailed = true;
  }
}

function castLumos() {
  if (magic.phase !== 'spell') return;
  magic.phase = 'casting';
  const r = lumosBtn.getBoundingClientRect();
  const x0 = r.left + r.width / 2, y0 = r.top + r.height / 2;
  hideSpell();
  clearMagicLines(true);
  // dentro del mismo toque: sonido del hechizo y canción principal (permitido en iPhone)
  playMagicSound();

  const ex = vw / 2, ey = Math.min(vh * 0.36, y0 - 120);
  magic.orb = {
    born: performance.now(), grow: 200, dur: 760,
    p0: [x0, y0],
    c1: [clamp(x0 - vw * 0.45, vw * 0.06, vw * 0.94), y0 - vh * 0.08],
    c2: [clamp(ex + vw * 0.48, vw * 0.06, vw * 0.94), ey + vh * 0.14],
    p3: [ex, ey], x: x0, y: y0, done: false
  };
  magicEl.style.setProperty('--bx', (ex / vw) * 100 + '%');
  magicEl.style.setProperty('--by', (ey / vh) * 100 + '%');

  const L = MAGIC.successLines, letters = (MAGIC.letterByLetter || {}).successLines || [];
  magic.queue = [];
  // luz (0–0.96 s) → "Hmm…" → "Funcionó" → "Puedes pasar" → destello → experiencia (~3 s)
  mq(950, () => addMagicLine(L[0], letters.includes(0)));
  mq(420, () => clearMagicLines(true));
  mq(180, () => addMagicLine(L[1], letters.includes(1)));
  mq(520, () => clearMagicLines(true));
  mq(180, () => addMagicLine(L[2], letters.includes(2)));
  mq(420, () => { magic.bloomTarget = 1; magicEl.classList.add('whiteout'); });
  mq(330, enterExperience);
}

function castWrong() {
  if (magic.phase !== 'spell' || magic.wrongUsed) return;
  magic.wrongUsed = true;
  magic.phase = 'wrong';
  const r = wrongSpellBtn.getBoundingClientRect();
  // un pequeño "puf" inofensivo
  for (let i = 0; i < 26; i++) {
    spawnSpark(r.left + r.width / 2, r.top + r.height / 2, 55, 1.1, '205,195,225');
  }
  wrongSpellBtn.classList.add('fizzle');
  hideSpell();
  clearMagicLines(true);
  magic.queue = [];
  const R2 = MAGIC.wrongSpellResponse;
  let delay = 500;
  R2.forEach((text, i) => {
    mq(delay, () => addMagicLine(text));
    delay = i === 0 ? 900 : clamp(700 + text.length * 26, 1300, 2200);
  });
  mq(delay, () => { wrongSpellBtn.classList.remove('fizzle'); showSpell(false); });
}

function enterExperience() {
  magic.phase = 'done';
  magic.queue = [];
  requestWakeLock();
  loadPhoto();
  probeMusic();
  restart(true, MAGIC.transitionToQuiz);
  // la luz se desvanece y deja ver el panel (del mismo tono cálido)
  magicEl.classList.add('out');
  magic.eggQueue.push({ at: performance.now() + 800, fn: () => {
    magic.active = false;
    magicEl.hidden = true;
    magicCtx.setTransform(1, 0, 0, 1, 0, 0);
    magicCtx.clearRect(0, 0, magicCanvas.width, magicCanvas.height);
  } });
}

function resetForMagic() {
  tasks = [];
  resetExtras();
  quiz.waitNext = null;
  quiz.introActive = false;
  quizEl.hidden = true;
  secretBtn.classList.remove('show');
  clearTyping();
  clockEl.style.opacity = '0';
  clockEl.classList.remove('glow');
  falling.length = 0;
  playT = null;
  limitT = Infinity;
  if (music.el) { music.el.pause(); music.userPaused = false; }
  updateMusicUi();
  needsRedraw = true;
}

function onMagicPointer(e) {
  if (!magic.active || magic.phase === 'done') return;
  if (e.target.closest('button')) return;
  const x = e.clientX, y = e.clientY;
  // las partículas cercanas se apartan y brillan
  for (const m of magic.motes) {
    const dx = m.x - x, dy = m.y - y, d = Math.hypot(dx, dy);
    if (d < 130 && d > 0.1) {
      const f = (1 - d / 130) * 140;
      m.vx += (dx / d) * f;
      m.vy += (dy / d) * f;
    }
  }
  for (let i = 0; i < 8; i++) spawnSpark(x, y, 60, 0.7);

  // estrella concreta: 3 toques rápidos
  const st = magic.star, E = MAGIC.starEgg;
  if (E && Math.hypot(x - st.nx * vw, y - st.ny * vh) < 30) {
    const now = performance.now();
    st.taps = st.taps.filter(time => now - time <= E.timeWindowMs);
    st.taps.push(now);
    if (st.taps.length >= E.tapsRequired && !magic.eggShown) showStarEgg();
    return; // tocar la estrella no adelanta el texto
  }
  skipMagicStep();
}

function showStarEgg() {
  const E = MAGIC.starEgg, now = performance.now();
  magic.eggShown = true;
  magic.star.taps.length = 0;
  for (let i = 0; i < 24; i++) spawnSpark(magic.star.nx * vw, magic.star.ny * vh, 70, 1.1);
  magicEggEl.textContent = E.message1;
  magicEggEl.hidden = false;
  void magicEggEl.offsetWidth;
  magicEggEl.classList.add('show');
  magic.eggQueue.push(
    { at: now + 2000, fn: () => magicEggEl.classList.add('swap') },
    { at: now + 2280, fn: () => { magicEggEl.textContent = E.message2; magicEggEl.classList.remove('swap'); } },
    { at: now + 5200, fn: () => magicEggEl.classList.remove('show') },
    { at: now + 5800, fn: () => { magicEggEl.hidden = true; } }
  );
}

function runQueue(queue, now) {
  while (queue.length && now >= queue[0].at) queue.shift().fn();
}

function updateMagic(now, dt) {
  runQueue(magic.queue, now);
  magic.eggQueue.sort((a, b) => a.at - b.at);
  runQueue(magic.eggQueue, now);
  if (!magic.active) return;

  const g = magicCtx;
  g.setTransform(1, 0, 0, 1, 0, 0);
  g.clearRect(0, 0, magicCanvas.width, magicCanvas.height);
  g.globalCompositeOperation = 'lighter';
  const t = now / 1000;

  // partículas de fondo (la estrella secreta es una más)
  const damp = Math.exp(-dt * 2.5);
  for (const m of magic.motes) {
    m.vx *= damp; m.vy *= damp;
    m.x += m.vx * dt + Math.sin(t * 0.4 + m.ph) * 4 * dt;
    m.y += (m.vy - m.drift) * dt;
    if (m.y < -10) { m.y = vh + 10; m.x = Math.random() * vw; }
    if (m.x < -10) m.x = vw + 10; else if (m.x > vw + 10) m.x = -10;
    const a = 0.25 + 0.55 * (0.5 + 0.5 * Math.sin(t * m.tw + m.ph));
    drawGlow(g, m.x, m.y, m.size * 3.2, a);
  }
  const st = magic.star;
  drawGlow(g, st.nx * vw, st.ny * vh, 13, 0.55 + 0.25 * Math.sin(t * 1.3));

  // varita: la luz nace en el botón y dibuja una curva
  const orb = magic.orb;
  if (orb && !orb.done) {
    const age = now - orb.born;
    if (age < orb.grow) {
      drawGlow(g, orb.x, orb.y, 8 + 34 * (age / orb.grow), 0.9);
    } else {
      const p = clamp((age - orb.grow) / orb.dur);
      const e = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
      const u = 1 - e;
      orb.x = u * u * u * orb.p0[0] + 3 * u * u * e * orb.c1[0] + 3 * u * e * e * orb.c2[0] + e * e * e * orb.p3[0];
      orb.y = u * u * u * orb.p0[1] + 3 * u * u * e * orb.c1[1] + 3 * u * e * e * orb.c2[1] + e * e * e * orb.p3[1];
      magic.trail.push({ x: orb.x, y: orb.y, t: now });
      for (let i = 0; i < 3; i++) spawnSpark(orb.x, orb.y, 30, 0.6 + Math.random() * 0.5);
      drawGlow(g, orb.x, orb.y, 42, 1);
      if (p >= 1) {
        orb.done = true;
        magic.ring = { x: orb.x, y: orb.y, born: now };
        magic.bloomTarget = 0.45;
        for (let i = 0; i < 46; i++) spawnSpark(orb.x, orb.y, 150, 1.2);
      }
    }
  }
  drawTrail(g, now);

  if (magic.ring) {
    const k = (now - magic.ring.born) / 900;
    if (k >= 1) magic.ring = null;
    else {
      g.strokeStyle = `rgba(240,208,140,${(1 - k) * 0.6})`;
      g.lineWidth = 2 * dpr;
      g.beginPath();
      g.arc(magic.ring.x * dpr, magic.ring.y * dpr, (20 + 220 * k) * dpr, 0, TAU);
      g.stroke();
    }
  }

  // chispas
  for (let i = magic.sparks.length - 1; i >= 0; i--) {
    const s = magic.sparks[i];
    s.age += dt;
    if (s.age >= s.life) { magic.sparks.splice(i, 1); continue; }
    s.vx *= Math.exp(-dt * 1.8);
    s.vy = s.vy * Math.exp(-dt * 1.8) + 22 * dt;
    s.x += s.vx * dt;
    s.y += s.vy * dt;
    const a = 1 - s.age / s.life;
    g.fillStyle = `rgba(${s.color},${a})`;
    g.fillRect((s.x - s.size / 2) * dpr, (s.y - s.size / 2) * dpr, s.size * dpr, s.size * dpr);
    drawGlow(g, s.x, s.y, s.size * 3, a * 0.5);
  }

  // la pantalla se ilumina desde donde terminó la estela
  magic.bloom += (magic.bloomTarget - magic.bloom) * Math.min(1, dt * 2.2);
  if (magic.bloom > 0.01 && orb) {
    g.globalCompositeOperation = 'source-over';
    const R = Math.max(vw, vh) * dpr;
    const grad = g.createRadialGradient(orb.p3[0] * dpr, orb.p3[1] * dpr, 0, orb.p3[0] * dpr, orb.p3[1] * dpr, R);
    grad.addColorStop(0, `rgba(255,244,222,${0.55 * magic.bloom})`);
    grad.addColorStop(0.5, `rgba(240,208,160,${0.22 * magic.bloom})`);
    grad.addColorStop(1, 'rgba(240,208,160,0)');
    g.fillStyle = grad;
    g.fillRect(0, 0, magicCanvas.width, magicCanvas.height);
  }
  g.globalCompositeOperation = 'source-over';
  g.globalAlpha = 1;
}

function drawGlow(g, x, y, radius, alpha) {
  if (alpha <= 0.01) return;
  g.globalAlpha = Math.min(1, alpha);
  const s = radius * 2 * dpr;
  g.drawImage(moteSprite, x * dpr - s / 2, y * dpr - s / 2, s, s);
  g.globalAlpha = 1;
}

/* Estela en capas (halo ancho + brillo + núcleo) que se apaga con la edad */
function drawTrail(g, now) {
  const LIFE = 650;
  const trail = magic.trail;
  while (trail.length && now - trail[0].t > LIFE) trail.shift();
  if (trail.length < 2) return;
  g.lineCap = 'round';
  const layers = [[18, '240,196,120', 0.12], [8, '255,214,150', 0.32], [2.6, '255,250,238', 0.95]];
  for (const [w, color, alpha] of layers) {
    g.lineWidth = w * dpr;
    for (let i = 1; i < trail.length; i++) {
      const a = Math.pow(1 - (now - trail[i].t) / LIFE, 1.5) * alpha;
      if (a <= 0.01) continue;
      g.strokeStyle = `rgba(${color},${a})`;
      g.beginPath();
      g.moveTo(trail[i - 1].x * dpr, trail[i - 1].y * dpr);
      g.lineTo(trail[i].x * dpr, trail[i].y * dpr);
      g.stroke();
    }
  }
}

function bindMagic() {
  if (!MAGIC.enabled) return;
  document.getElementById('magic-prompt').textContent = MAGIC.prompt;
  lumosBtn.textContent = MAGIC.correctSpell;
  wrongSpellBtn.textContent = MAGIC.wrongSpell;
  magicEl.addEventListener('pointerdown', onMagicPointer);
  lumosBtn.addEventListener('click', castLumos);
  wrongSpellBtn.addEventListener('click', castWrong);
}


/* ---------------------------------------------------------------------
   Bucle principal y controles
   --------------------------------------------------------------------- */
function frame(now) {
  rafId = requestAnimationFrame(frame);
  const dt = Math.min(0.05, (now - lastNow) / 1000 || 0);
  lastNow = now;

  if (tasks.length) {
    const due = tasks.filter(task => now >= task.at);
    if (due.length) {
      tasks = tasks.filter(task => now < task.at);
      due.forEach(task => task.fn());
    }
  }

  // la escena avanza con el tiempo real, pero se detiene en la siguiente prueba pendiente
  if (frozenAt !== null) playT = frozenAt;
  else if (playT !== null) playT = Math.min(playT + dt, Math.max(playT, limitT));
  const t = playT;

  processQuiz(now);

  // en la pantalla de inicio sólo se redibuja si cambia el tamaño
  if (magic.active) updateMagic(now, dt);
  if (t === null && !needsRedraw) return;
  needsRedraw = false;

  updateSceneTransform(t);
  drawBackdrop(t, now);
  drawGround(t);
  drawBranches(t);
  drawSeed(t);
  drawBlossoms(t);
  if (frozenAt === null) updateFalling(t, dt);
  drawFalling();
  updateNox(now);
  drawDust(t, now);
  drawFireflies(t, now, dt);
  drawSnitch(t, now, dt);
  drawLumosFlash(t);
  drawPatronus(now);
  seasonOverlay(now);
  drawSeasonSweep(now);
  drawPanelFrame();
  ctx.restore();
  ctx.globalAlpha = 1;

  updateTyping(t);
  updateCounter(t);

  const live = t !== null && frozenAt === null;
  if (live && t > 0.05 && ambient.flashAt < 0) triggerLumosMaxima(t);
  if (live && !finale.started) {
    // Sonorus aparece cuando la copa está completa
    if (!spells.sonorus && music.available && t > TIMELINE.blossomsEnd + 0.4 && sonorusBtn.hidden) {
      showSpellHint(CONFIG.hechizos.aviso);
      showPlate(sonorusBtn);
    }
    // Tempus acompaña al árbol en cuanto la copa está completa
    if (CONFIG.estaciones && CONFIG.estaciones.activo && tempusBtn.hidden && !spells.tempusShown &&
        t > TIMELINE.blossomsEnd + 0.4 && (spells.sonorus || !music.available)) {
      spells.tempusShown = true;
      showPlate(tempusBtn, 300);
      if (!music.available && !spells.patronusShown) {
        spells.patronusShown = true;
        later(900, () => { if (!finale.started) showPlate(patronusBtn); });
      }
    }
    // Revelio aparece cuando termina el secreto
    if (!spells.revelio && secret.started && t > schedule.end && revelioBtn.hidden) {
      spells.revelio = true;
      showPlate(revelioBtn);
    }
  }
  // el pergamino de la carta aparece justo antes de escribirse
  const showLetter = live && t > TIMELINE.title - 0.6;
  if (showLetter && spells.hintShown && spellHintEl.textContent) hideSpellHint();
  if (showLetter !== letterEl.classList.contains('show')) letterEl.classList.toggle('show', showLetter);
  if (live && CONFIG.secreto && !secret.started && t > schedule.textEnd + 0.8 && secretBtn.hidden) {
    secret.shown = true;
    if (!patronusBtn.hidden) hidePlate(patronusBtn);
    showPlate(secretBtn, 300);
  }

  updateMusicFade(now);
  if (confetti.running || fxBusy() || lingua.activo) updateFx(dt, now);
}

/* withQuiz: true = empieza desde la primera prueba; false = reproduce todo seguido */
function restart(withQuiz, introLines) {
  tasks = [];
  playT = -TIMELINE.intro;
  falling.length = 0;
  nextFall = 0;
  resetSchedule();
  clearTyping();
  for (const k in lastValues) delete lastValues[k];
  writeCounter();
  clockEl.style.opacity = '0';
  clockEl.classList.remove('glow');
  secretBtn.classList.remove('show');
  resetExtras();
  quiz.waitNext = null;
  quizEl.hidden = true;

  if (withQuiz && CONFIG.modoAcertijo) {
    quiz.done = false;
    limitT = TIMELINE.holds[0];
    quiz.introActive = false;
    later(900, () => (introLines && introLines.length ? showQuizIntro(introLines) : showQuizStep(0)));
  } else {
    quiz.done = true;
    limitT = Infinity;
  }
  needsRedraw = true;
}

async function requestWakeLock() {
  // mantiene la pantalla encendida durante la experiencia (si el navegador lo permite)
  try {
    if ('wakeLock' in navigator && document.visibilityState === 'visible') {
      wakeLock = await navigator.wakeLock.request('screen');
    }
  } catch (e) { /* no disponible: no pasa nada */ }
}

function begin() {
  if (playT !== null) return;
  introEl.classList.add('hide');
  introEl.addEventListener('transitionend', () => { introEl.hidden = true; }, { once: true });
  requestWakeLock();
  loadPhoto();
  probeMusic();
  restart(true);   // la canción se invoca luego con Sonorus, junto al árbol
}

function buildIntro() {
  const { titulo, lineas, boton } = CONFIG.inicio;
  document.title = titulo;
  document.getElementById('intro-title').textContent = titulo;
  const box = document.getElementById('intro-lines');
  lineas.forEach((text, i) => {
    const p = el('p', 'intro-line', text);
    p.style.animationDelay = 0.5 + i * 0.9 + 's';
    box.appendChild(p);
  });
  startBtn.textContent = boton;
  startBtn.style.animationDelay = 0.5 + lineas.length * 0.9 + 's';
}

function init() {
  buildIntro();
  buildExtras();
  document.getElementById('since').textContent = CONFIG.contadorTitulo;

  const rng = mulberry32(SETTINGS.seed);
  for (const name in SEASONS) seasonSprites[name] = SEASONS[name].palette.map(makeHeartSprite);
  const inicial = (CONFIG.estaciones && CONFIG.estaciones.inicial) || 'verano';
  season.name = SEASONS[inicial] ? inicial : 'verano';
  sprites = seasonSprites[season.name];
  dustSprite = makeDustSprite();
  for (const name in SEASONS) dustSprites[name] = makeDustSprite(SEASONS[name].polvo);
  fireflySprite = makeFireflySprite();
  for (const name in SEASONS) fireflySprites[name] = makeFireflySprite(SEASONS[name].luces.color);
  buildFireflies();
  branches = buildBranches();
  blossoms = buildBlossoms(rng);
  buildTyping();

  resize();
  window.addEventListener('resize', resize);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(resize);

  startBtn.addEventListener('click', begin);
  bindExtras();
  bindMagic();
  quizCard.addEventListener('click', () => { if (quiz.introActive) finishQuizIntro(); });
  document.addEventListener('visibilitychange', () => {
    // el bucle se detiene solo en segundo plano; al volver se retoma sin saltos
    lastNow = performance.now();
    if (!document.hidden && playT !== null) requestWakeLock();
    musicOnVisibility();
  });

  // Depuración: ?t=12 empieza en el segundo 12 (sin pruebas) · ?t=12&pausa=1 congela ese instante
  const query = new URLSearchParams(location.search);
  const param = query.get('t');
  if (param !== null) {
    introEl.hidden = true;
    magicEl.hidden = true;
    gateEl.hidden = true;
    const t0 = parseFloat(param) || 0;
    if (query.get('pausa')) {
      frozenAt = t0;
      playT = t0;
      quiz.done = true;
      fxRng = mulberry32(7);
      for (let x = 0; x < frozenAt; x += 1 / 60) { updateSceneTransform(x); updateFalling(x, 1 / 60); }
    } else {
      restart(false);
      playT = t0;
      loadPhoto();
      probeMusic();
    }
  }

  else if (GATE.activo && GATE.pasos && GATE.pasos.length) {
    introEl.hidden = true;
    magicEl.hidden = true;
    buildGate();
  } else if (MAGIC.enabled) {
    introEl.hidden = true;
    startMagicIntro();
  }

  lastNow = performance.now();
  cancelAnimationFrame(rafId);
  rafId = requestAnimationFrame(frame);
}

init();
