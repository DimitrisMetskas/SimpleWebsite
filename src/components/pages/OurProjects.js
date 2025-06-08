import '../../App.css'
import ProjectGallery from '../ProjectGallery';
//egkathistioyme ayto gia translation:
import { useTranslation } from 'react-i18next';


export default function OurProjects() {
  //gia na kanoyme metafrasi afou kanoyme ta vimata toy App.js kanoyme se oles tis selides
  const { t } = useTranslation();
  return (
    <>
      {/* <h1>{t('about')}</h1>; */}
      {/* gia to translate eixe kai ena tetoio : <Link to="/">{t('about')}</Link> |{' '}
      poy meta to element vazei |{' '} poy den xero ti einai */}
      <h1 className='our-projects'>{t("ourprojects.projects")}</h1>
      <ProjectGallery />
    </>

  )
}

