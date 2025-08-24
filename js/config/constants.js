export const SUPPORTED_LANGUAGES = {
  KO: 'ko',
  EN: 'en', 
  JA: 'ja'
};

export const LANGUAGE_NAMES = {
  [SUPPORTED_LANGUAGES.KO]: "한국어",
  [SUPPORTED_LANGUAGES.EN]: "English",
  [SUPPORTED_LANGUAGES.JA]: "日本語",
};

export const DEFAULT_LANGUAGE = SUPPORTED_LANGUAGES.KO;

export const SELECTORS = {
  LANGUAGE_TOGGLE: '.language-toggle',
  LANGUAGE_SELECTOR: '.language-selector',
  LANGUAGE_DROPDOWN: '.language-dropdown',
  CURRENT_LANG: '.current-lang',
  NAVIGATION_MENU: '.gnb li a',
  ABOUT_SECTION: '#about',
  YOUTUBE_SECTION: '#youtube',
  MEMBER_SECTION: '#member',
  ALBUM_SECTION: '#album'
};

export const SECTION_KEYS = {
  NAV: {
    HOME: 'home',
    ABOUT: 'about',
    YOUTUBE: 'youtube',
    MEMBER: 'member',
    ALBUM: 'album'
  },
  YOUTUBE_VIDEOS: ['mv', 'performance', 'showcase'],
  ALBUM_KEYS: ['lastBell', 'heyHey', 'ohMymy', 'summerBeat', 'sparklingBlue']
};

export const CSS_CLASSES = {
  ACTIVE: 'active'
};
