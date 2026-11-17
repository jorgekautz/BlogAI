# 🤖 Project Agents - BlogAI

Este proyecto es un blog educativo sobre ciencia, luz y fenómenos atmosféricos. Para llevarlo a cabo con éxito, se definen los siguientes agentes con sus respectivos roles y responsabilidades:

## 🧬 Agentes de Contenido

### 1. Investigador Científico (Science Researcher)
*   **Rol:** Garantizar la precisión técnica de toda la información presentada.
*   **Responsabilidades:**
    *   Verificar datos sobre dispersión de Rayleigh, Mie y refracción.
    *   Asegurar que las explicaciones sobre fenómenos como el "arcoíris" o la "luna de sangre" sean científicamente correctas.
    *   Proporcionar fuentes fiables para las curiosidades y datos técnicos.

### 2. Redactor de Contenido (Content Writer)
*   **Rol:** Transformar información compleja en narrativas accesibles y atractivas para el público general.
*   **Responsabilidades:**
    *   Escribir los artículos principales para cada tema (Cielo, Arcoíris, Estrellas, Nubes, Luna).
    *   Mantener un tono educativo pero cercano ("Ciencia explicada fácil").
    *   Crear los textos de la página de inicio (Hero section, hilo conductor).
    *   Gestionar los tags y descripciones cortas de cada artículo.

## 💻 Agentes Técnicos

### 3. Desarrollador Frontend (Frontend Developer)
*   **Rol:** Construir y mantener la infraestructura visual y funcional del blog.
*   **Responsabilidades:**
    *   Mantener la coherencia del diseño en `styles.css`.
    *   Implementar y depurar la lógica en `script.js` (modo oscuro, barra de progreso, búsqueda, likes, comentarios).
    *   Asegurar la responsividad y accesibilidad (ARIA labels, navegación fluida).
    *   Gestionar la estructura HTML de los artículos y la página principal.

### 4. Especialista en SEO (SEO Specialist)
*   **Rol:** Maximizar la visibilidad del blog en motores de búsqueda.
*   **Responsabilidades:**
    *   Optimizar títulos, meta-descripciones y encabezados (H1-H3).
    *   Analizar palabras clave relevantes (ej. "dispersión de Rayleigh", "por qué el cielo es azul").
    *   Asegurar que las imágenes tengan atributos `alt` descriptivos.
    *   Gestionar la estructura de URLs y la navegación interna.

## 🤝 Agentes de Comunidad y Calidad

### 5. Gestor de Comunidad (Community Manager)
*   **Rol:** Fomentar la interacción y la retención de usuarios.
*   **Responsabilidades:**
    *   Gestionar el sistema de comentarios y feedback de los usuarios.
    *   Analizar el crecimiento de la suscripción al newsletter.
    *   Planificar campañas de contenido para redes sociales basadas en los artículos.

### 6. QA & Tester (QA Engineer)
*   **Rol:** Asegurar la estabilidad y el correcto funcionamiento de todas las funcionalidades.
*   **Responsabilidades:**
    *   Verificar que la barra de progreso funcione correctamente en todos los artículos.
    *   Probar el motor de búsqueda para asegurar que los resultados sean relevantes.
    *   Validar que el almacenamiento en `localStorage` (likes, comentarios, tema) sea persistente y seguro.
    *   Realizar pruebas de compatibilidad en diferentes navegadores y dispositivos móviles.
