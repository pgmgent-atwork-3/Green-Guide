import React, { useState } from 'react';
import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';

const resources = {
    en: {
        translation: {
            "welcome": "Welcome",
            "about": "About"
        }
    },
    nl: {
        translation: {
            "welcome": "Welkom",
            "about": "Over"
        }
    }
};

i18n
.use(initReactI18next)
.init({
    resources,
    lng: "en",
    keySeparator: false,
    interpolation: {
        escapeValue: false
    }
});

function TranslateButton() {
    const [language, setLanguage] = useState('en');
    const { t } = useTranslation();

    const handleClick = (e) => {
        e.preventDefault();
        if (language === 'en') {
        setLanguage('nl');
        i18n.changeLanguage('nl');
        } else {
        setLanguage('en');
        i18n.changeLanguage('en');
        }
    }

    return (
        <button onClick={handleClick}>
        {t('welcome')}
        </button>
    );
}

export default TranslateButton;