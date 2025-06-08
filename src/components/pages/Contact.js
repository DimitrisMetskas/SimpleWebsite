import React from 'react'
import '../../App.css'
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
  return (
    <>
      <h1 className='contact'>{t("contactus.contactus")}</h1>
      <h1 className='contact'>{t("contactus.contactus")}</h1>
      <h1 className='contact'>{t("contactus.contactus")}</h1>
    </>


  )
}
