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
| **Terra Australis** | fila de hechizos del árbol | la noche pasa al otro hemisferio, la carta se aparta, se enciende la Cruz del Sur, un dinosaurio se acerca y pregunta «¿Te vienes conmigo?», y al irse llega la invitación a Australia |
| **Orchideous** | fila de hechizos del árbol | la noche se vuelve negra, la carta se aparta, crece un jardín de girasoles y una camioneta cisterna lo cruza regándolo |
| **Lingua Amoris** | en la tarjeta, tras el primer recuerdo | la misma frase en dieciocho idiomas cruzando la pantalla |
| **Finite Incantatem** | al abrir el cierre | se lee mientras la magia se apaga |

**La fila de hechizos**: Sonorus · Expecto Patronum · Dracarys · Terra Australis · Orchideous · Tempus viven en una fila fija debajo de la carta, siempre en el mismo sitio. Los de un solo uso se apagan al lanzarlos en vez de desaparecer, así ningún botón se mueve bajo el dedo. Encima queda una sola placa grande para el hechizo del momento (Lumos Máxima o Revelio).

**Cada hechizo trae su cielo** (`CIELOS` en script.js): Dracarys enciende un cielo de brasas, Terra Australis lo lleva al hemisferio sur (azul profundo y muchas más estrellas) y Orchideous apaga el cielo hasta el negro, para que el amarillo de los girasoles cante. El cielo del hechizo se mezcla sobre el de la estación y vuelve solo al acabar, así que se puede combinar con Tempus sin romper nada.

**Estaciones** (`CONFIG.estaciones`): cada toque de Tempus cambia la copa, la luz del bosque y lo que cae. Primavera (rosas y blancos, pétalos), verano (como siempre), otoño (ámbar y cobre, hojas) e invierno (copa más escasa en rojos y hielo, con nieve). `inicial` elige con cuál empieza, `orden` el recorrido, `nombres` los carteles y `activo: false` lo desactiva.

**Efectos mágicos** (`CONFIG.efectos`, todos opcionales): `lumosMaxima` (destello y encendido del bosque al entrar), `luciernagas`, `niebla`, `petalos` (hojas doradas entre los corazones), `snitch` (cruza la escena cada ~30 s), `ondasSonorus` (anillos de energía al invocar la canción), `levitacion` (foto y recuerdos flotando tipo polaroid), `accio` (los objetos llegan desde el fondo con rastro), `selloAlohomora` (sello dorado que se rompe) y `cierreNox` (la magia se apaga poco a poco en el cierre), `dracarys` (el dragón y su llamarada) , `australis` (la Cruz del Sur, los dinosaurios y la invitación) y `orchideous` (el jardín de girasoles). Pon cualquiera en `false` para desactivarlo.

**Estética:** bosque nocturno (cielo azul noche y violeta, estrellas, siluetas de árboles, niebla y polvo dorado) con la carta, las placas de hechizo y las tarjetas en pergamino y tinta. La paleta única está en `:root` (bloque "PALETA MÁGICA GLOBAL" de style.css) y en `COLORS` de script.js:
`--magic-night #0B1020` · `--magic-night-2 #17172B` · `--magic-violet #2B2147` · `--parchment #E8DCC2` · `--parchment-light #F5EBD4` · `--ink #4A3426` · `--old-gold #C9A34A` · `--warm-gold #F5D36B` · `--burgundy #6F2232` · `--romantic-rose #C78FA1` · `--magic-white #FFF6E8` · `--magic-green #2D5B49`.

**Intro mágica**
- Al abrir aparece un cielo nocturno con partículas de luz y frases que se enfocan poco a poco. Tocar la pantalla adelanta el texto, pero el hechizo hay que elegirlo.
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
| `idiomas` | frases de Lingua Amoris (el español no está: se guarda para la línea final) |
| `puerta` | clave, frase, pistas y mensajes de la entrada |
| `easterEgg` | Toques necesarios, ventana de tiempo y los dos mensajes |
| `memoriesButton`, `memories` | Botón y lista de recuerdos (reemplázalos por recuerdos reales) |
| `finalMessage` | Pregunta, botón y las dos líneas del cierre |

La carta se encadena sola y se ajusta para que nunca se corte. La vista previa del enlace en WhatsApp o iMessage se edita en las etiquetas `og:` de `index.html`.

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
