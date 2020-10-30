import docEngCV from '@assets/files/ENG_CV/ENG_CV.doc';
import pdfEngCV from '@assets/files/ENG_CV/ENG_CV.pdf';
import rtfEngCV from '@assets/files/ENG_CV/ENG_CV.rtf';
import docRuCV from '@assets/files/RU_CV/RU_CV.doc';
import pdfRuCV from '@assets/files/RU_CV/RU_CV.pdf';
import rtfRuCV from '@assets/files/RU_CV/RU_CV.rtf';
import printJS from 'print-js';

type Languages = 'en' | 'ru';
type Extensions = 'doc' | 'pdf' | 'rtf';

export const downloadCV = (lang: Languages, extension: Extensions) => {
  const isEnLang = lang === 'en';

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
  const isEnLang = lang === 'en';

  if (isEnLang) {
    printJS({
      printable: pdfEngCV,
      showModal: true,
      type: 'pdf',
    });
  } else {
    printJS({
      printable: pdfRuCV,
      showModal: true,
      type: 'pdf',
    });
  }
};
