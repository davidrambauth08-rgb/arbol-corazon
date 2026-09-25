# Árbol de corazones ❤️ — edición acertijo

Página web estática, sin backend. Al abrir el enlace aparece **"Karen Trujillo ❤️"** y un reto: superar **3 pruebas**. Cada acierto desbloquea una parte de la animación:

1. **¿Cuándo empezó esta historia?** → la semilla cae al suelo.
2. **¿Quién quiere más a quién?** → crecen el tronco y las ramas.
3. **¿Cuánto tiempo ha pasado?** → "Yo lo he estado contando": se completa el corazón y empieza el contador real desde el 16/07/2021.

Después se escribe la carta y aparece el botón **"¿Quieres descubrir un secreto?"**, que ilumina el contador y escribe dos líneas finales. Después, **"Volver a verlo"** repite la animación completa sin las pruebas.

**Trucos de las pruebas**
- Las respuestas con `escapa: true` huyen las 2 primeras veces que intentas tocarlas (`SETTINGS.escapes`).
- Tras 2 fallos aparece la pista y las respuestas correctas laten (`SETTINGS.hintAfter`).
- Una respuesta incorrecta no dice "incorrecto": muestra su `mensaje` gracioso.

**La puerta encantada** (`CONFIG.puerta`): al abrir el enlace pide dos cosas antes de dejar pasar.
1. **La clave:** `16-08` (también valen `1608`, `16/08`, `16 08`).
2. **La contraseña:** `Valar Morghulis`.

No distingue mayúsculas, tildes ni espacios. Al primer fallo responde breve, al segundo da una pista, y al acertar la cerradura gira y se rompe con luz. Cambia `pasos[].valor` para poner otras respuestas y `activo: false` para quitar la puerta.

**Lo primero al pasar la puerta: Wingardium Leviosa** (`CONFIG.leviosa`). En el suelo de una sala a oscuras hay velas apagadas, libros, cartas y plumas. Al tocar **Wingardium Leviosa** todo se levanta despacio, las velas se encienden una a una al subir, el techo se llena de estrellas y sube polvo dorado con todo lo demás. Después se escriben las frases de `despues` —la Amortentia, que huele a lo que uno más quiere, y el «siempre» de Snape— y **Seguir** da paso a la intro mágica. Con `leviosa.entrada: false` deja de ser lo primero.

**«Quiero volar»** (`CONFIG.vuelo`), ahora en el hechizo **☁ Volar** de la fila del árbol. La imagen de `assets/volar.jpg` llena la pantalla y la frase se escribe encima letra a letra. La foto no se queda quieta: flota muy despacio (unos 9 px de deriva y un 5 % de zoom en ciclos de 24 s, ida y vuelta) y unas estrellas titilan sobre las que ya trae. Después la pregunta: **¿Vamos?**, con **Sí** y **No**. El «No» huye **al intentar tocarlo** —no con sólo pasar el ratón por encima, o desaparecería de camino al «Sí»— dos veces, y a la tercera se rinde, dejando sólo el «Sí».

**El paraíso** (`CONFIG.paraiso`). Al decir que sí, la foto se apaga y aparece una **playa al atardecer**: el sol cayendo sobre el mar, su reflejo roto en el agua, las olas subiendo y bajando por la arena, palmeras a los lados y los dos sentados mirando el horizonte. Está dibujada en su propio canvas, no es una foto. Luego se escriben las líneas de `paraiso.lineas` y el botón **Seguir** cierra la escena. Si la imagen no está o no carga, en su sitio queda el cielo nocturno de la experiencia. Con `vuelo.activo: false` se salta este paso.

**La carta del merodeador** (`CONFIG.merodeador`) vive ahora en el hechizo **⚜ Mapa** de la fila del árbol. Al lanzarlo, las solapas del pergamino se abren, se escribe el juramento y empieza la carta. La carta **no se suelta de golpe**: se lee por trozos, con unos puntos que indican cuánto queda y un **sigue leyendo ❯** (o tocando el pergamino) para pasar al siguiente; el membrete de los Merodeadores sólo sale en el primero. Al llegar al final aparece la firma y **Travesura realizada**, que dobla el mapa. El reparto en trozos **se mide en pantalla** cada vez que se abre, así que se adapta al móvil, al escritorio y al giro de pantalla. Con `merodeador.entrada: true` el mapa vuelve a ser lo primero tras la puerta y entonces sí pregunta el juramento antes de abrirse.

**Hechizos de la experiencia** (textos en `CONFIG.hechizos`)

| Hechizo | Dónde aparece | Qué hace |
|---|---|---|
| Lumos ❤️ | intro | abre la experiencia (estela de luz y destello) |
| Sonorus | junto al árbol, al completarse la copa | invoca la canción y abre el pergamino musical |
| Lumos Máxima | tras la carta | ilumina el contador y escribe el secreto |
| Revelio | tras el secreto | revela la fotografía en su marco encantado |
| Accio recuerdo | en la tarjeta | trae un recuerdo desde fuera de la pantalla |
| Alohomora 🔑 | tras el primer recuerdo | abre el cierre con la lluvia de luces |
| Nox | en la tarjeta | apaga la luz y vuelve al árbol (Revelio se puede repetir) |
| **Tempus** | fila de hechizos del árbol | hace pasar la estación: primavera → verano → otoño → invierno (se puede repetir) |
| **Expecto Patronum** | fila de hechizos del árbol | un guardián de luz entra, rodea la copa y se va |
| **Wingardium Leviosa** | en la tarjeta | eleva la tarjeta con la foto y el recuerdo |
| **Dracarys** | fila de hechizos del árbol | el cielo se vuelve ceniza y fuego, un dragón entra en picado, se sostiene frente al árbol, lo enciende con su llamarada y deja brasas cayendo (se puede repetir) |
| **Terra Australis** | fila de hechizos del árbol | la escena entera da paso al otro lado del mundo (atardecer, Cruz del Sur, nubes, volcán y palmeras); un dinosaurio se acerca y pregunta «¿Te vienes conmigo?», y al irse llega la invitación a Australia |
| **Orchideous** | fila de hechizos del árbol | la escena entera se apaga a negro (árbol, bosque, carta y contador incluidos), crece un jardín de girasoles y una camioneta cisterna lo cruza regándolo |
| **Wingardium Leviosa** | al pasar la puerta | todo lo que hay en el suelo se levanta despacio y las velas se encienden al subir |
| **Quiero volar** ☁ | fila de hechizos del árbol | la nube, la pregunta de Sí/No y la playa al atardecer |
| **Juro solemnemente** ⚜ | fila de hechizos del árbol | el pergamino se despliega (primero las solapas de arriba y abajo, después las de los lados), se escribe el juramento palabra a palabra y aparece la carta, que se lee por trozos, con dos rastros de pisadas que se encuentran en un corazón. Se cierra con **Travesura realizada** y se puede repetir |
| **Lingua Amoris** | en la tarjeta, tras el primer recuerdo | la misma frase en dieciocho idiomas cruzando la pantalla |
| **Finite Incantatem** | al abrir el cierre | se lee mientras la magia se apaga |

**La fila de hechizos**: Sonorus · Expecto Patronum · Dracarys · Terra Australis · Orchideous · Juro solemnemente · Quiero volar · Tempus viven en una fila (en el móvil se parte en dos líneas, pero nunca se mueve después) debajo de la carta, siempre en el mismo sitio. Los de un solo uso se apagan al lanzarlos en vez de desaparecer, así ningún botón se mueve bajo el dedo. Encima queda una sola placa grande para el hechizo del momento (Lumos Máxima o Revelio).

**Cada hechizo trae su fondo**: Dracarys enciende un cielo de brasas (`CIELOS` en script.js, que se mezcla sobre el de la estación y vuelve solo al acabar). Orchideous y Terra Australis van más lejos y se quedan con la pantalla entera: el primero la apaga a negro para que sólo brillen los girasoles; el segundo la cambia por un atardecer del hemisferio sur, con la Cruz del Sur, nubes, un volcán y palmeras. Los dinosaurios son de dibujo, con panza clara, crestas, ojos grandes y mofletes.

**Estaciones** (`CONFIG.estaciones`): cada toque de Tempus cambia la copa, la luz del bosque y lo que cae. Primavera (rosas y blancos, pétalos), verano (como siempre), otoño (ámbar y cobre, hojas) e invierno (copa más escasa en rojos y hielo, con nieve). `inicial` elige con cuál empieza, `orden` el recorrido, `nombres` los carteles y `activo: false` lo desactiva.

**Efectos mágicos** (`CONFIG.efectos`, todos opcionales): `lumosMaxima` (destello y encendido del bosque al entrar), `luciernagas`, `niebla`, `petalos` (hojas doradas entre los corazones), `snitch` (cruza la escena cada ~30 s), `ondasSonorus` (anillos de energía al invocar la canción), `levitacion` (foto y recuerdos flotando tipo polaroid), `accio` (los objetos llegan desde el fondo con rastro), `selloAlohomora` (sello dorado que se rompe) y `cierreNox` (la magia se apaga poco a poco en el cierre), `dracarys` (el dragón y su llamarada) , `australis` (la Cruz del Sur, los dinosaurios y la invitación), `orchideous` (el jardín de girasoles) y `merodeador` (el pergamino que se despliega). Pon cualquiera en `false` para desactivarlo.

**Estética:** bosque nocturno (cielo azul noche y violeta, estrellas, siluetas de árboles, niebla y polvo dorado) con la carta, las placas de hechizo y las tarjetas en pergamino y tinta. La paleta única está en `:root` (bloque "PALETA MÁGICA GLOBAL" de style.css) y en `COLORS` de script.js:
`--magic-night #0B1020` · `--magic-night-2 #17172B` · `--magic-violet #2B2147` · `--parchment #E8DCC2` · `--parchment-light #F5EBD4` · `--ink #4A3426` · `--old-gold #C9A34A` · `--warm-gold #F5D36B` · `--burgundy #6F2232` · `--romantic-rose #C78FA1` · `--magic-white #FFF6E8` · `--magic-green #2D5B49`.

**Intro mágica** (después del Wingardium Leviosa)
- Aparece un cielo nocturno con partículas de luz y frases que se enfocan poco a poco. Tocar la pantalla adelanta el texto, pero el hechizo hay que elegirlo.
- Hechizos: **Lumos ❤️** traza una estela de luz, ilumina la pantalla y da paso a las pruebas. **Avada Kedavra 💀** muestra una respuesta divertida y solo se puede probar una vez.
- Secreto: tocar 3 veces seguidas la estrella de arriba a la derecha muestra un mensaje.
- Todo se configura en `CONFIG.introMagic` y `CONFIG.magicSound`. Con `introMagic.enabled: false` se usa la pantalla de inicio sencilla.

**Después del secreto**
- Aparece una tarjeta con la foto final (`assets/foto-final.jpg`) y su leyenda.
- **"Dame un recuerdo ✨"** muestra recuerdos al azar, sin repetir el anterior.
- Tras el primer recuerdo aparece **"¿Una última cosa?"** con el botón **"Sí ❤️"**: lluvia de corazones de ~3,5 s y mensaje final.
- **"Volver a verlo"** reinicia toda la experiencia: acertijos, árbol, foto, recuerdos, easter egg, confeti y canción.

**Música:** pon tu canción en `assets/cancion.mp3`. La invoca el hechizo **Sonorus** junto al árbol (así cumple las reglas de autoplay del iPhone) y se controla desde el pergamino musical. Los botones de la esquina superior derecha la pausan, la reanudan o la silencian. Si el archivo no existe, no se muestran.

**Easter egg:** con el árbol ya formado, tocar la copa 5 veces en 4 segundos muestra un mensaje oculto. Solo una vez por reproducción.

**Dejar algo escrito** (`CONFIG.recado`). Al final del todo, después de la lluvia de corazones, aparece un recuadro para que ella conteste. La página es estática y no guarda nada por sí sola, así que hay que decirle por dónde sale, y usa la primera opción que esté rellena:

1. `formulario`: una URL de [Formspree](https://formspree.io) o similar. Ella escribe, envía y se queda en la página con un «gracias»; a ti te llega al correo. **Es la buena.**
2. `whatsapp`: tu número con indicativo y sin signos (`"573001112233"`). Se le abre WhatsApp con el mensaje ya escrito.
3. Ninguna de las dos: el texto se le copia al portapapeles para que te lo mande por donde quiera. Es lo que hace de fábrica.

Si el formulario falla, cae solo en el copiado, así que nunca se pierde lo escrito. Con `activo: false` no aparece.

## Personalizar

Todo lo editable está en **`CONFIG`**, al principio de `script.js`:

| Campo | Para qué sirve |
|---|---|
| `nombre`, `fechaInicio` | Nombre y fecha de inicio del contador (hora local, `"AAAA-MM-DDTHH:mm:ss"`) |
| `inicio` | Título, líneas y botón de la pantalla inicial |
| `modoAcertijo` | `false` = sin pruebas: el botón inicial lanza la animación directamente |
| `pruebas` | Preguntas; cada opción tiene `texto`, `correcta`, `mensaje` (texto o lista: cada toque muestra el siguiente) y, opcionalmente, `escapa`; más una `pista` por pregunta. La última usa `revelar: true` con `boton` y `respuestas` |
| `titulo`, `frases`, `firma` | La carta (`titulo: ""` la deja sin encabezado) |
| `contadorTitulo`, `unidades` | Textos del contador |
| `secreto` | Botón, líneas finales y pausas (bórralo para no mostrar el secreto) |
| `botonRepetir`, `etiquetaPrueba` | Otros textos de la interfaz |
| `ritmo` | Letras por segundo, pausas y `contadorAlFinal` |
| `introMagic` | Frases, hechizos, respuestas, transición a las pruebas, frases letra a letra, secreto de la estrella y `showOnReplay` |
| `magicSound` | Efecto corto al lanzar el hechizo (`assets/hechizo.mp3`, opcional) |
| `music` | `enabled`, `file`, `volume` (0–1), `fadeInSeconds` y textos accesibles de los botones |
| `finalPhoto` | `enabled`, `file`, `caption` y `placeholder` (texto mientras no haya foto) |
| `recuerdosFoto` | fotos que Accio puede traer como recuerdo, mezcladas con las frases |
| `australia` | `pregunta` (lo que dice el dinosaurio) y `titulo`, `linea` y `firma` de la invitación de Terra Australis |
| `leviosa` | la apertura: `antes` y `despues` (las frases), `boton`, `seguir` y `entrada` |
| `vuelo` | la nube y la playa: `imagen`, `lineas` (la frase, una por renglón), `pregunta`, `si`, `no`, `noDice` (lo que se lee cada vez que el «No» huye), `pausa` y `activo` |
| `paraiso` | la playa al atardecer: `lineas` y `boton` |
| `recado` | el sitio para que ella escriba: `formulario`, `whatsapp`, `titulo`, `placeholder`, `boton` y los avisos (`gracias`, `copiado`, `error`) |
| `merodeador` | la carta del merodeador: `frases` es tu texto (un párrafo por elemento), y además `encabezado`, `subtitulo`, `titulo`, `juramento`, `firma`, `seguir` y `cierre`. `pregunta` es lo que se pide antes de abrirlo (`linea`, `boton`, `desc`) y `entrada: false` lo quita del arranque. Con `activo: false` el hechizo no aparece |
| `idiomas` | frases de Lingua Amoris (el español no está: se guarda para la línea final) |
| `puerta` | clave, frase, pistas y mensajes de la entrada |
| `easterEgg` | Toques necesarios, ventana de tiempo y los dos mensajes |
| `memoriesButton`, `memories` | Botón y lista de recuerdos (reemplázalos por recuerdos reales) |
| `finalMessage` | Pregunta, botón y las dos líneas del cierre |

La carta se encadena sola y se ajusta para que nunca se corte. La vista previa del enlace en WhatsApp o iMessage se edita en las etiquetas `og:` de `index.html`.

## Al publicar un cambio

`index.html` pide `style.css?v=N` y `script.js?v=N`. **Sube ese número** cada vez que publiques, o los móviles que ya abrieron la página seguirán usando la copia guardada y verán el HTML nuevo con el código viejo (la página se queda a medias).

## Ejecutar en local

```bash
cd ~/arbol-corazon
python3 -m http.server 8000
```

Abre **http://localhost:8000**. También funciona con doble clic en `index.html`.

### Probar desde el teléfono (misma Wi-Fi)

```bash
cd ~/arbol-corazon
python3 -m http.server 8000 --bind 0.0.0.0
ipconfig getifaddr en0        # muestra la IP del Mac, p. ej. 192.168.0.164
```

En el teléfono abre `http://IP-DEL-MAC:8000`, por ejemplo `http://192.168.0.164:8000`. Si no carga, permite las conexiones entrantes de Python en el firewall de macOS.

## Publicar (sitio estático, sin configuración)

- **Netlify:** arrastra la carpeta a https://app.netlify.com/drop. Antes, quita `comparaciones/` si no quieres subirla.
- **Vercel:** ejecuta `npx vercel` dentro de la carpeta. Framework: *Other*; sin comando de build; carpeta de salida `.`.
- **GitHub Pages:** sube el repositorio y activa *Settings → Pages → Deploy from branch → main / (root)*.

`.gitignore` excluye `comparaciones/` y los videos, así que no se publican con Git.

## Controles

- **Volver a verlo:** aparece tras el secreto y repite la animación sin las pruebas y sin recargar la página. En escritorio también sirve la tecla **R** (cuando ya se han superado las pruebas).
- Recargar la página vuelve a empezar desde las pruebas.
- Si la pestaña pasa a segundo plano, la animación se pausa y sigue al volver.
- Para depurar: `?t=12` salta las pruebas y empieza en el segundo 12; `?t=12&pausa=1` congela ese instante.

## Archivos

```
index.html      estructura: canvas, carta, contador, pantalla inicial, final y música
assets/         cancion.mp3 y foto-final.jpg (ver assets/LEEME.md)
style.css       tipografía (Carlito ≈ Calibri) y diseño responsive
script.js       CONFIG + animación en Canvas
.gitignore
comparaciones/  capturas contra el video de referencia (solo documentación, la web no las usa)
```
