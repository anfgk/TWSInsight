import { safeQuerySelector, safeQuerySelectorAll, updateTextContent, toggleClass } from '../utils/dom.js';
import { SELECTORS, CSS_CLASSES } from '../config/constants.js';

export async function changeLanguage(lang) {
  try {
    await i18next.changeLanguage(lang);
    
    if (typeof window !== 'undefined' && typeof window.updatePageContent === 'function') {
      window.updatePageContent();
      setTimeout(() => {
        if (typeof window.updatePageContent === 'function') {
          window.updatePageContent();
        }
      }, 0);
    }
    
    updateLanguageButtons(lang);
    updateCurrentLanguageDisplay(lang);
    closeLanguageDropdown();
  } catch (error) {
    console.error("Error changing language:", error);
  }
}

function updateCurrentLanguageDisplay(lang) {
  const currentLangElement = safeQuerySelector(SELECTORS.CURRENT_LANG);
  if (currentLangElement) {
    updateTextContent(currentLangElement, lang.toUpperCase());
  }
}

function updateLanguageButtons(currentLang) {
  const buttons = safeQuerySelectorAll(`${SELECTORS.LANGUAGE_DROPDOWN} button`);
  buttons.forEach((button) => {
    const lang = button.getAttribute('data-lang');
    toggleClass(button, CSS_CLASSES.ACTIVE, lang === currentLang);
  });
}

function closeLanguageDropdown() {
  const languageSelector = safeQuerySelector(SELECTORS.LANGUAGE_SELECTOR);
  if (languageSelector) {
    languageSelector.classList.remove(CSS_CLASSES.ACTIVE);
  }
}

export function toggleLanguageDropdown() {
  const languageSelector = safeQuerySelector(SELECTORS.LANGUAGE_SELECTOR);
  if (languageSelector) {
    languageSelector.classList.toggle(CSS_CLASSES.ACTIVE);
  }
}

export function handleOutsideClick() {
  closeLanguageDropdown();
}

export function handleDropdownClick(event) {
  event.stopPropagation();
}

export function syncLanguageUIFromI18n() {
  const currentLang = (i18next && i18next.language) ? i18next.language : 'ko';
  updateLanguageButtons(currentLang);
  updateCurrentLanguageDisplay(currentLang);
}
