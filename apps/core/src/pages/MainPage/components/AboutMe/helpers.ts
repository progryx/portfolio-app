import docEngCV from '@files/ENG_CV/ENG_CV.doc';
import pdfEngCV from '@files/ENG_CV/ENG_CV.pdf';
import rtfEngCV from '@files/ENG_CV/ENG_CV.rtf';
import docRuCV from '@files/RU_CV/RU_CV.doc';
import pdfRuCV from '@files/RU_CV/RU_CV.pdf';
import rtfRuCV from '@files/RU_CV/RU_CV.rtf';
import { Languages } from '@src/locales';
import printJS from 'print-js';

type Extensions = 'doc' | 'pdf' | 'rtf';

export const downloadCV = (lang: Languages, extension: Extensions) => {
  const isEnLang = lang === 'EN';

  switch (extension) {
    case 'doc': {
      return window.open(isEnLang ? docEngCV : docRuCV, '_self');
    }

    case 'pdf': {
      return window.open(isEnLang ? pdfEngCV : pdfRuCV, '_blank');
    }

    case 'rtf': {
      return window.open(isEnLang ? rtfEngCV : rtfRuCV, '_self');
    }

    default: {
      return null;
    }
  }
};

export const printCV = (lang: Languages) => {
  const isEnLang = lang === 'EN';

  printJS({
    printable: isEnLang ? pdfEngCV : pdfRuCV,
    showModal: true,
    type: 'pdf',
  });
};
