import React from 'react'
import '../../App.css'
import { useTranslation } from 'react-i18next';


export default function OurStory() {
  const { t } = useTranslation();
  return (
    <>
      <h1 className='our-story'>{t('ourstory.story')}</h1>
      <h1 className='our-story'>{t('ourstory.story')}</h1>
      <h1 className='our-story'>{t('ourstory.story')}</h1>
      <h1 className='our-story'>{t('ourstory.story')}</h1>
      <h1 className='our-story'>{t('ourstory.story')}</h1>
    </>

  )
}

