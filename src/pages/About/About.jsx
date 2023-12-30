import './about.module.scss'
import PageTitle from '../../components/PageTitle/PageTitle';
import Promo from '../../components/Promo/Promo';
import AdvantagesList from '../../components/AdvantagesList/AdvantagesList';
import Statics from '../../components/Statics/Statics';
import Consultation from '../../components/Consultation/Consultation';
import Sponsors from '../../components/Sponsors/Sponsors';

export function About() {
   return (
      <>
         <PageTitle pageName='About us' pagePath='Home/About-us' />
         <Promo />
         <AdvantagesList />
         <Statics />
         <video src="https://www.youtube.com/watch?v=tE_7HeBZgYE&list=RDtE_7HeBZgYE&start_radio=1"></video>
         <Sponsors />
         <Consultation />
      </>
   );
}
