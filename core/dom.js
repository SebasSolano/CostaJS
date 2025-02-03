export const $ = (selector) => document.querySelector(selector);

export const html = (element, content) => {
  element.innerHTML = content;
};

export const addClass = (element, className) => {
  element.classList.add(className);
};

// Example usage:
// html($('#app'), '<h1>Hello CostaJS</h1>');
