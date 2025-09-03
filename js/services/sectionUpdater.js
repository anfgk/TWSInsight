import { safeQuerySelector, safeQuerySelectorAll, updateTextContent, updateInnerHTML, extractKeyFromElement, extractMemberKeyFromImage } from '../utils/dom.js';
import { SELECTORS, SECTION_KEYS } from '../config/constants.js';

export function updateNavigation() {
  const menuItems = safeQuerySelectorAll(SELECTORS.NAVIGATION_MENU);
  
  menuItems.forEach((item) => {
    const key = extractKeyFromElement(item);
    const navKey = key === 'intro' ? 'home' : key;
    const translation = i18next.t(`nav.${navKey}`);
    
    if (translation && translation !== `nav.${navKey}`) {
      updateTextContent(item, translation);
    }
  });
}

export function updateAboutSection() {
  const aboutSection = safeQuerySelector(SELECTORS.ABOUT_SECTION);
  if (!aboutSection) return;

  const titleElement = aboutSection.querySelector('h1');
  updateTextContent(titleElement, i18next.t('about.title'));
  
  const description = i18next.t('about.description');
  const lines = description.split('\n');
  const pElement = aboutSection.querySelector('p');
  updateInnerHTML(pElement, lines.join('<br />'));

  const link = aboutSection.querySelector('a');
  if (link) {
    updateTextContent(link, i18next.t('about.link'));
  }
}

export function updateYoutubeSection() {
  const youtubeSection = safeQuerySelector(SELECTORS.YOUTUBE_SECTION);
  if (!youtubeSection) return;

  const titleElement = youtubeSection.querySelector('h2');
  updateTextContent(titleElement, i18next.t('youtube.title'));

  const videos = youtubeSection.querySelectorAll('.down-desc h3');
  SECTION_KEYS.YOUTUBE_VIDEOS.forEach((videoKey, index) => {
    if (videos[index]) {
      updateTextContent(videos[index], i18next.t(`youtube.videos.${videoKey}`));
    }
  });

  const exploreButtons = youtubeSection.querySelectorAll('.btn-explore');
  exploreButtons.forEach((button) => {
    const textNode = button.childNodes[0];
    if (textNode && textNode.nodeType === Node.TEXT_NODE) {
      textNode.textContent = i18next.t('youtube.explore') + " ";
    }
  });
}

export function updateMemberSection() {
  const memberSection = safeQuerySelector(SELECTORS.MEMBER_SECTION);
  if (!memberSection) return;

  const titleElement = memberSection.querySelector('h2');
  updateTextContent(titleElement, i18next.t('member.title'));

  const memberElements = memberSection.querySelectorAll('.twsmember');
  memberElements.forEach((el) => {
    const img = el.querySelector('img');
    if (!img) return;

    const memberKey = extractMemberKeyFromImage(img.src);
    const spans = el.querySelectorAll('span');
    
    if (spans[0]) {
      updateTextContent(spans[0], i18next.t(`member.members.${memberKey}.name`));
    }
    if (spans[1]) {
      updateTextContent(spans[1], i18next.t(`member.members.${memberKey}.birth`));
    }
  });
}

export function updateAlbumSection() {
  const albumSection = safeQuerySelector(SELECTORS.ALBUM_SECTION);
  if (!albumSection) return;

  const titleElement = albumSection.querySelector('h6');
  updateTextContent(titleElement, i18next.t('album.title'));

  const albumItems = albumSection.querySelectorAll('.post_item');
  
  albumItems.forEach((item) => {
    const albumKey = item.getAttribute('data-album');
    if (!albumKey) return;

    const albumTitleElement = item.querySelector('h3');
    if (albumTitleElement) {
      updateTextContent(albumTitleElement, i18next.t(`album.albums.${albumKey}.title`));
    }

    const description = item.querySelector('p');
    if (description) {
      const descriptionText = description.childNodes[0];
      if (descriptionText && descriptionText.nodeType === Node.TEXT_NODE) {
        descriptionText.textContent = i18next.t(`album.albums.${albumKey}.description`);
      }

      const dateElement = description.querySelector('span');
      if (dateElement) {
        updateTextContent(dateElement, i18next.t(`album.albums.${albumKey}.date`));
      }
    }
  });
}
