import { useState } from 'react'
import styles from './Footer.module.scss'
import Logo from '../../assets/icons/logo-darkmode.svg'
import ArrowIcon from '../../assets/icons/arrow-icon.svg'
import FacebookIcon from '../../assets/icons/facebook-icon.svg'
import InstaIcon from '../../assets/icons/insta-icon.svg'
import TwitterIcon from '../../assets/icons/twitter-icon.svg'

import classNames from 'classnames'
export const Footer = () => {
   const [value, setValue] = useState('')
   const explores = ['About Us', 'Services', 'Pricing', 'Blog', 'Contact']
   const contacts = ['Email', 'Phone', 'Address', 'Social Media']
   return (
      <footer className={styles.footer}>
         <div className={classNames(styles['footer__content'], 'container')}>
            <div className={styles.logo}>
               <Logo />
               <div className={styles['social-networks']}>
                  <a href="/">
                     <InstaIcon />
                  </a>
                  <a href="/">
                     <FacebookIcon />
                  </a>
                  <a href="/">
                     <TwitterIcon />
                  </a>
               </div>
            </div>
            <div className={styles['footer-info']}>
               <ul>
                  <h6>Explore</h6>
                  {
                     explores.map((explore, index) => {
                        return <li key={ index  }>{explore}</li>
                     })
                  }
               </ul>
               <ul>
                  <h6>Contact</h6>
                  {
                     contacts.map((explore, index) => {
                        return <li key={ index }>{explore}</li>
                     })
                  }
               </ul>
               <div className={styles['newsletter']}>
                  <h6>Newsletter</h6>
                  <p>Subscribe to our newsletter to stay informed about our latest products, services, and promotions.
                     Feel free to unsubscribe anytime!</p>
                  <div className={styles.input}>
                     <input type="text" value={value} onInput={({ target }) => setValue(target.value)} placeholder='Enter Your Email Address ...' />
                     <button>
                        <ArrowIcon />
                     </button>
                  </div>
               </div>
            </div>
         </div>
         <div className={classNames(styles.line, 'container')}></div>
         <div className={classNames(styles.copyright, 'container')}>
            <p>Copyright © 2023 for WaveNet. All rights reserved.</p>
            <p>Terms & Condition  |  Privacy Policy</p>
         </div>
      </footer>
   )
}