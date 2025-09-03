import { changeLanguage, toggleLanguageDropdown, handleOutsideClick, handleDropdownClick, syncLanguageUIFromI18n } from './services/languageService.js';
import { updateNavigation, updateAboutSection, updateYoutubeSection, updateMemberSection, updateAlbumSection } from './services/sectionUpdater.js';
import { safeQuerySelector, safeQuerySelectorAll } from './utils/dom.js';
import { SELECTORS } from './config/constants.js';

function updatePageContent() {
  updateMetaData();
  
  updateNavigation();
  updateAboutSection();
  updateYoutubeSection();
  updateMemberSection();
  updateAlbumSection();
}

function updateMetaData() {
  document.title = i18next.t('meta.title');
  
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.content = i18next.t('meta.description');
  }
}

function setupEventListeners() {
  const languageToggle = safeQuerySelector(SELECTORS.LANGUAGE_TOGGLE);
  if (languageToggle) {
    languageToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleLanguageDropdown();
    });
  }

  const languageButtons = safeQuerySelectorAll(`${SELECTORS.LANGUAGE_DROPDOWN} button`);
  languageButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.stopPropagation();
      const lang = button.getAttribute('data-lang');
      if (lang) {
        changeLanguage(lang);
      }
    });
  });

  document.addEventListener('click', handleOutsideClick);

  const languageDropdown = safeQuerySelector(SELECTORS.LANGUAGE_DROPDOWN);
  if (languageDropdown) {
    languageDropdown.addEventListener('click', handleDropdownClick);
  }
}

async function initializeApp() {
  try {
    await i18next.initialized;

    // 언어 변경 시 즉시 UI 갱신
    i18next.on('languageChanged', () => {
      updatePageContent();
      syncLanguageUIFromI18n();
    });
    
    updatePageContent();
    syncLanguageUIFromI18n();
    setupEventListeners();
    
    console.log('TWS Website i18n initialized successfully');
  } catch (error) {
    console.error('Failed to initialize i18n:', error);
  }
}

document.addEventListener('DOMContentLoaded', initializeApp);

window.changeLanguage = changeLanguage;
window.updatePageContent = updatePageContent;
