import { Languages } from '@src/locales';
import { getAsset } from '@src/utilities';
import printJS from 'print-js';

type Extensions = 'doc' | 'pdf' | 'rtf';

export const downloadCV = (lang: Languages, extension: Extensions) => {
  const isEnLang = lang === 'EN';

  switch (extension) {
    case 'doc': {
      return window.open(isEnLang ? getAsset('ENG_CV.doc') : getAsset('RU_CV.doc'), '_self');
    }

    case 'pdf': {
      return window.open(isEnLang ? getAsset('ENG_CV.pdf') : getAsset('RU_CV.pdf'), '_blank');
    }

    case 'rtf': {
      return window.open(isEnLang ? getAsset('ENG_CV.rtf') : getAsset('RU_CV.rtf'), '_self');
    }

    default: {
      return null;
    }
  }
};

export const printCV = (lang: Languages) => {
  const isEnLang = lang === 'EN';

  printJS({
    printable: isEnLang ? getAsset('ENG_CV.pdf') : getAsset('RU_CV.pdf'),
    showModal: true,
    type: 'pdf',
  });
};
