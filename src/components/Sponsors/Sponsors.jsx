import classNames from 'classnames';
import { useId } from 'react';
import styles from './Sponsors.module.scss'
import Samsung from '../../assets/icons/samsung-dark-mode.svg'
import Google from '../../assets/icons/google-dark-mode.svg'
import Amazon from '../../assets/icons/amazon-dark-mode.svg'
import Windows from '../../assets/icons/windows-dark-mode.svg'
import Sony from '../../assets/icons/sony-dark-mode.svg'

const sponsors = [
   {
      item: <Samsung />,
      link: 'https://www.samsung.com/uz_ru/'
   },
   {
      item: <Google />,
      link: 'https://www.google.com'
   },
   {
      item: <Amazon />,
      link: 'https://www.amazon.com'
   },
   {
      item: <Windows />,
      link: 'https://www.windows.com'
   },
   {
      item: <Sony />,
      link: 'https://www.sony.com'
   }
]

function Sponsors() {
   return ( 
      <div className={styles.sponsors}>
         <div className={ classNames(styles['sponsors__content'], 'container') }>
            {
               sponsors.map(({ item, link }) => {
                  return <a href={ link } key={useId()}>{item}</a>
               })
            }
         </div>
      </div>
   );
}

export default Sponsors;