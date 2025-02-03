/**
 * Renderiza un componente en el DOM.
 * @param {Function} component - Función del componente
 * @param {HTMLElement} target - Elemento donde se montará
 */
export function renderComponent(component, target) {
  const instance = component();
  const element = document.createElement("div");

  // Vincular metodos al ambito global (simplificado)
  window.handleClick = instance.handleClick;

  // Renderizar plantilla inicial
  element.innerHTML = instance.template();
  target.appendChild(element);

  // Funcion para actualizar el componente
  window.update = () => {
    element.innerHTML = instance.template();
  };
}
