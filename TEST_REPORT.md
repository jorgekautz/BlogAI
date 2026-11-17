# Informe de Pruebas de Calidad (QA Report) - Proyecto BlogAI

## 1. Resumen Ejecutivo
Este reporte detalla las pruebas funcionales realizadas sobre la plataforma **BlogAI**, un sitio web educativo sobre ciencia y fenómenos atmosféricos. El objetivo de las pruebas fue validar la interactividad del frontend, la persistencia de datos locales y la correcta navegación entre componentes.

**Estado del Proyecto:** ✅ **APROBADO** (Funcionalidades principales operativas)

---

## 2. Entorno de Pruebas
- **Plataforma:** Windows 10/11.
- **Servidor de Desarrollo:** Node.js (npx http-server) en puerto 8080.
- **Herramientas de Automatización:** Chrome DevTools Agent.
- **Navegador:** Chrome (Headless/Automated).

---

## 3. Casos de Prueba Ejecutados

### 3.1. Navegación y Estructura
| ID | Caso de Prueba | Acción | Resultado Esperado | Resultado Obtigo | Estado |
|:---|:---|:---|:---|:---|:---:|
| TC-01 | Carga de Página Principal | Acceso a `http://localhost:8080/` | Renderizado correcto de Hero, Grid y Footer | Éxito | ✅ |
| TC-02 | Navegación a Artículos | Click en tarjeta "Cielo Azul" | Navegación a `blog-cielo-azul/index.html` | Éxito | ✅ |
| TC-03 | Navegación de Retroceso | Click en enlace "Inicio" | Retorno a la página principal | Éxito | ✅ |

### 3.2. Componentes de Interfaz (UI)
| ID | Caso de Prueba | Acción | Resultado Esperado | Resultado Obtenido | Estado |
|:---|:---|:---|:---|:---|:---:|
| TC-04 | Toggle de Modo Oscuro | Click en botón 🌙 | Cambio de clases CSS y persistencia en `localStorage` | Éxito | ✅ |
| TC-05 | Barra de Progreso | Scroll vertical | El `progress-bar` se ajusta según el % de scroll | Éxito | ✅ |
| TC-06 | Filtro de Búsqueda | Ingresar "rayleigh" | Filtrado de artículos por tags/título | Éxito | ✅ |

### 3.3. Funcionalidades de Interacción
| ID | Caso de Prueba | Acción | Resultado Esperado | Resultado Obtenido | Estado |
|:---|:---|:---|:---|:---|:---:|
| TC-07 | Suscripción Newsletter | Ingreso de email válido | Mensaje de éxito y limpieza de formulario | Éxito | ✅ |
| TC-08 | Sistema de "Likes" | Click en botón Like | Incremento de contador y cambio visual | Éxito | ✅ |
| TC-09 | Sistema de Comentarios | Ingreso de nombre y texto | Inserción dinámica en la lista de comentarios | Éxito | ✅ |

---

## 4. Observaciones Técnicas
- **Persistencia:** Los datos de "Likes", "Comentarios" y "Tema" se están gestionando correctamente a través de `localStorage`.
- **Seguridad:** El sistema de comentarios utiliza `textContent` para prevenir ataques de inyección de scripts (XSS) básicos.
- **Rendimiento:** La carga de las tarjetas de artículos es eficiente, utilizando manipulación del DOM estándar sin librerías externas pesadas.

## 5. Recomendaciones
1. **Validación de Comentarios:** Implementar un límite de caracteres o validación de contenido para evitar spam.
2. **Feedback de Suscripción:** Añadir una validación de correo más robusta (regex extendido) y un indicador visual de carga mientras se "procesa".
3. **SEO:** Asegurarse de que todas las imágenes de los artículos tengan atributos `alt` optimizados para motores de búsqueda.

---
**Fecha del reporte:** 17 de noviembre de 2026
**Responsable:** QA Agent (OpenCode)