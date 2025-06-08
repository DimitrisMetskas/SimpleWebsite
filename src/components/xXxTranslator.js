import React from 'react';
import { useTranslation } from 'react-i18next';

const Translator = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h1>{t('welcome_message')}</h1>
            <p>{t('description')}</p>
        </div>
    );
};

export default Translator;