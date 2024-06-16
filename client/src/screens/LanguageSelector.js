import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';

const LanguageSelectorWrapper = styled('div')({
  margin: '10px',
});

const LanguageSelector = () => {
  useEffect(() => {
    if (typeof window.google !== 'undefined' && window.google.translate) {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,fr,de,es,it,zh-CN',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        'google_translate_element'
      );
    }
  }, []);

  return <LanguageSelectorWrapper id="google_translate_element"></LanguageSelectorWrapper>;
};

export default LanguageSelector;
