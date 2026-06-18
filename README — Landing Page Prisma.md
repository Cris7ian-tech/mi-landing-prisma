# README — Landing Page Prisma

## Contexto

Proyecto de práctica para el curso de Claude.

Se está desarrollando una landing page para **Prisma**, una productora audiovisual ficticia.

El objetivo principal no es crear un sitio completo sino una landing enfocada en conversión, aplicando principios de diseño, copywriting, responsive design y desarrollo frontend.

---

# Objetivo de la Landing

## Objetivo principal

**Contratar el servicio.**

Toda la página debe empujar al usuario hacia esta acción.

## Objetivos secundarios

* Escribir por WhatsApp.
* Completar formulario de contacto.
* Solicitar presupuesto.

Los objetivos secundarios existen únicamente como pasos previos a la contratación.

---

# Público objetivo

## Principal

* Emprendedores.
* Pymes.
* Comercios locales.
* Profesionales independientes.
* Marcas personales.

## Secundario

* Organizadores de eventos.
* Instituciones.
* Organizaciones que necesiten contenido audiovisual.

---

# Propuesta de valor

Prisma transforma ideas, productos y servicios en contenido audiovisual profesional que genera confianza, visibilidad e impacto.

---

# Estructura actual

## 1. Hero

Contiene:

* Eyebrow:
  "Producción audiovisual · Buenos Aires"

* Título:
  "Tu marca, en otro nivel."

* Subtítulo:
  Explica el beneficio principal.

* CTA principal:
  "Hablemos de tu proyecto"

---

## 2. Beneficios

Tres bloques:

### 01

Tu cliente te ve y confía de inmediato.

### 02

Destacás frente a la competencia.

### 03

Material listo para publicar hoy.

---

## 3. Cómo funciona

Tres pasos:

### Paso 1

Nos contás tu proyecto.

### Paso 2

Producimos el contenido.

### Paso 3

Lo recibís listo para usar.

---

## 4. CTA Final

Título:

"¿Arrancamos?"

Subtexto:

"Contanos tu proyecto y te respondemos hoy."

Botón CTA repetido.

---

## 5. Footer

Copyright simple.

---

# Decisiones de diseño

## Estilo visual

* Minimalista.
* Oscuro.
* Editorial.
* Enfocado en tipografía.
* Inspiración premium.

## Tipografía

Google Fonts:

* Syne

Pesos utilizados:

* 400
* 600
* 700
* 800

---

# Sistema de colores

```css
:root {
  --bg: #0C0C0C;
  --border: #222222;
  --text: #F0EDE6;
  --muted: #6A6A6A;
  --accent: #E8C547;
}
```

# Animaciones implementadas

## Reveal on Scroll

Intersection Observer.

Las secciones aparecen una sola vez al entrar en viewport.

Clase utilizada:

```css
.reveal
.visible
```

## CTA Animation

Animación slide-thru aplicada al texto del botón.

Se ejecuta:

* Hover en desktop.
* Click en todos los dispositivos.

# CTA WhatsApp

El CTA dirige a:

```text
https://wa.me/5492216681863
```

Actualmente existe un delay previo a la navegación.

```javascript
setTimeout(() => {
  window.open(url, "_blank", "noopener");
}, 200);
```

Pendiente decidir si mantener 200ms o subir a 300ms.

# Iconografía CTA

Se reemplazó el carácter:

```text
→
```

por SVG.

Actualmente se están probando distintas variantes:

* Chevron >
* Flecha diagonal ↗
* Flecha horizontal →

La intención es elegir la que mejor comunique "avance" y acción.

# Responsive realizado

## Ajustes Hero

Antes:

```css
padding: 100px 28px 88px;
```

Ahora:

```css
padding: 80px 24px 72px;
```

## Ajuste Hero Title

Antes:

```css
font-size: clamp(68px, 18vw, 148px);
```

Ahora:

```css
font-size: clamp(52px, 18vw, 148px);
```

## Ajuste Steps

Antes:

```css
grid-template-columns: 52px 1fr;
```

Ahora:

```css
grid-template-columns: 40px 1fr;
```

# Problema encontrado

## Viewport 320px

La página generaba scroll horizontal.

Se diagnosticó el problema utilizando inspección responsive.

El culpable fue:

* Botón CTA.

No fueron responsables:

* Hero.
* Títulos.
* Layout general.

# Solución aplicada

```css
@media (max-width: 360px) {
  .btn {
    font-size: 12px;
    padding: 14px 20px;
  }

  .btn-icon {
    width: 16px;
    height: 16px;
  }
}
```

Resultado:

* Sin scroll horizontal.
* CTA mantiene legibilidad.
* No afecta tamaños superiores.

# Filosofía de trabajo adoptada

1. Construir primero.
2. Revisar visualmente.
3. Detectar problemas reales.
4. Corregir de forma localizada.
5. Evitar hacks globales.
6. Mantener consistencia visual.

# Próximos pasos sugeridos

* Elegir icono definitivo del CTA.

* Revisar comportamiento en:

  * 320px
  * 375px
  * 768px
  * 1024px

* Refinar animaciones.

* Evaluar portfolio visual.

* Incorporar imágenes o video.

* Optimizar accesibilidad.

* Crear versión final del MVP.

# Observación personal

El enfoque actual está siendo:

* Detallista.
* Iterativo.
* Orientado a sistemas.

El objetivo no es solo terminar una landing, sino desarrollar un método propio para diseñar y construir interfaces de forma consistente y escalable.
