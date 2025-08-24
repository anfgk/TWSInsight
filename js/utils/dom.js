export function safeQuerySelector(selector, parent = document) {
  try {
    return parent.querySelector(selector);
  } catch (error) {
    console.warn(`Invalid selector: ${selector}`, error);
    return null;
  }
}

export function safeQuerySelectorAll(selector, parent = document) {
  try {
    return parent.querySelectorAll(selector);
  } catch (error) {
    console.warn(`Invalid selector: ${selector}`, error);
    return [];
  }
}

export function elementExists(element) {
  return element && element instanceof Element;
}

export function updateTextContent(element, text) {
  if (elementExists(element)) {
    element.textContent = text;
  }
}

export function updateInnerHTML(element, html) {
  if (elementExists(element)) {
    element.innerHTML = html;
  }
}

export function toggleClass(element, className, force) {
  if (elementExists(element)) {
    element.classList.toggle(className, force);
  }
}

export function extractKeyFromElement(element, attribute = 'href', prefix = '#') {
  if (!elementExists(element)) return '';
  
  const value = element.getAttribute(attribute);
  if (!value) return '';
  
  return value.replace(prefix, '').toLowerCase();
}

export function extractMemberKeyFromImage(imageSrc) {
  if (!imageSrc) return '';
  return imageSrc.split('/').pop().split('.')[0].toLowerCase();
}
