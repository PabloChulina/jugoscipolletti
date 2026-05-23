# Instrucciones para Codex — Web Cipolletti

## Estado actual del proyecto

El proyecto ya tiene una versión creada, funcionando y publicada en producción en:

https://jugoscipolletti.com.ar/

Los archivos principales del proyecto son:

- index.html: estructura principal de la web.
- styles.css: estilos visuales, diseño responsive, colores, tarjetas, secciones y navegación.
- script.js: interacción del menú responsive y comportamiento del formulario de contacto.

No rehacer el proyecto desde cero salvo que se pida expresamente.

Trabajar siempre sobre la estructura existente, aplicando cambios concretos, mínimos y prolijos.

Antes de modificar archivos importantes, revisar el estado actual del proyecto y entender cómo está construida la web.

## Objetivo del proyecto

Crear, mantener y mejorar una página web institucional para la marca Cipolletti.

Cipolletti no debe presentarse como una tienda con stock propio ni como un catálogo cerrado de productos.

La web debe presentar a Cipolletti como una marca/concepto comercial, con identidad, historia, valores, propuesta de trabajo, posibles líneas de productos, modalidad comercial y canales de contacto.

La web debe transmitir una imagen clara, seria, moderna, cercana y comercial.

## Secciones actuales de la web

La web debe conservar estas secciones principales:

- Inicio
- Quiénes somos
- Misión y valores
- Qué ofrecemos
- Línea de Productos
- Modalidad
- Contacto

La navegación principal actual ya está definida. No modificarla salvo que el usuario lo pida expresamente.

Si se agregan secciones nuevas, deben tener sentido comercial y no sobrecargar la página.

## Reglas sobre el contenido

Mantener un tono claro, profesional, moderno, comercial y humano.

Evitar frases genéricas, vacías o demasiado repetidas.

No afirmar que Cipolletti vende productos propios con stock disponible.

Cuando se mencionen productos, tratarlos como líneas, categorías, propuestas comerciales, productos en desarrollo o posibilidades futuras vinculadas a la identidad de la marca.

No presentar la web como un ecommerce.

No agregar información comercial no confirmada por el usuario.

No agregar teléfonos ni WhatsApp salvo que el usuario lo pida expresamente.

Los datos reales de contacto son:

- Email: jugoscipolletti@gmail.com
- Instagram: @jugoscipolletti

No usar datos ficticios de contacto.

## Reglas sobre formulario y EmailJS

El formulario de contacto ya fue integrado con EmailJS y funciona correctamente.

No reemplazar EmailJS por otra solución salvo que el usuario lo pida expresamente.

No eliminar ni romper la integración existente del formulario.

No modificar credenciales, claves públicas, service ID, template ID ni configuración de EmailJS salvo que el usuario lo solicite.

No decir que el formulario es solo visual o simulado, porque actualmente ya envía consultas reales por EmailJS.

Si se modifica script.js, verificar que:

- el menú responsive siga funcionando;
- el formulario siga enviando correctamente;
- se mantengan los mensajes visuales de éxito o error;
- no haya errores de consola;
- no falle si algún elemento no existe en el HTML.

## Reglas sobre diseño

Mantener una estética limpia, moderna y elegante.

Respetar la paleta actual salvo que se solicite cambiarla.

La web debe verse correctamente en computadora, tablet y celular.

No agregar efectos innecesarios ni sobrecargar la página.

Priorizar buena legibilidad, espaciado correcto, botones claros y navegación simple.

No modificar imágenes, colores, tipografías, tamaños, estructura visual ni estilos generales salvo que el pedido lo indique expresamente.

Si el pedido es únicamente de textos, no tocar estilos ni JavaScript salvo que sea estrictamente necesario.

## Reglas sobre los archivos

Mantener separados los archivos:

- index.html para estructura y contenido.
- styles.css para estilos.
- script.js para interacciones.

No agregar frameworks ni dependencias externas salvo que se indique expresamente.

No crear archivos nuevos innecesarios.

No borrar contenido existente sin explicar antes el motivo.

Si el pedido es solo de textos, modificar principalmente index.html y evitar tocar styles.css o script.js.

## Reglas de trabajo para Codex

Antes de modificar, explicar brevemente qué cambios se van a hacer.

No rehacer componentes completos si solo se pidieron cambios de texto.

Aplicar cambios concretos y prolijos.

Después de modificar, revisar:

- enlaces internos;
- nombres de secciones;
- navegación principal;
- responsive;
- accesibilidad básica;
- errores de consola;
- coherencia entre HTML, CSS y JavaScript;
- que no queden textos viejos duplicados;
- que los datos de contacto sean correctos;
- que el formulario con EmailJS siga funcionando;
- que la web siga funcionando en escritorio y celular.

## Reglas especiales por estar publicada

La web ya está publicada, por lo tanto:

- Evitar cambios grandes innecesarios.
- No romper rutas, enlaces internos ni nombres de secciones.
- No eliminar contenido sin necesidad.
- No modificar archivos que no estén relacionados con el pedido.
- Probar localmente antes de subir cambios.
- Si el cambio puede afectar producción, avisar antes de aplicarlo.

## Puntos a tener presentes

Estos puntos no deben aplicarse automáticamente. Solo deben revisarse o modificarse cuando el usuario lo pida expresamente:

- Cambios de textos enviados por el cliente.
- Modificación de imágenes.
- Cambios de fondo por sección.
- Nuevas categorías de productos.
- Contador de visitantes.
- Cambios en navegación principal.
- Cambios estéticos generales.
- Cambios en EmailJS o en el formulario.