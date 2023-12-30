import { useId } from 'react'
import AdvantagesListItem from '../AdvantagesListItem/AdvantagesListItem'
import expertiseImg from '../../assets/images/expertise-icon.png'
import technologyImg from '../../assets/images/technology-icon.png'
import solutionsImg from '../../assets/images/solutions-icon.png'
import resualtsImg from '../../assets/images/resualts-icon.png'
import styles from './AdvantagesList.module.scss'
import classNames from 'classnames'

const advantages = [
   {
      image: expertiseImg,
      title: 'expertise',
      text: `Our team of experienced experts have the knowledge and expertise to deliver innovative IT solutions that meet your unique needs.`
   },
   {
      image: technologyImg,
      title: 'technology',
      text: `We stay up to date with the latest trends and technologies in the IT industry, so you can get the most advanced solutions available.`
   },
   {
      image: solutionsImg,
      title: 'solutions',
      text: `We take a personalized approach to every project, working closely with you to understand your business and create solutions.`
   },
   {
      image: resualtsImg,
      title: 'technology',
      text: `Our track record speaks for itself – we've helped businesses of all sizes and industries achieve their goals with our IT solutions.`
   },
]
function AdvantagesList() {
   return ( 
      <section className={ classNames('container', styles['advantages-list'])  }>
         {
            advantages.map((advantage) => {
               return <AdvantagesListItem advantageInfo={ advantage } key={ useId() }  />
            })
         }
      </section>
   );
}

export default AdvantagesList;