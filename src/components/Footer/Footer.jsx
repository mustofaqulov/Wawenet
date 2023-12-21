import { useState } from 'react'
import styles from './Footer.module.scss'
import logo from '../../assets/images/logo.svg'
import arrowIcon from '../../assets/images/arrow-icon.svg'
import classNames from 'classnames'
console.log(styles);
export const Footer = () => {
   const [value, setValue] = useState('')
   return (
      <footer className={styles.footer}>
         <div className={classNames(styles['footer__content'], 'container')}>
            <div className={styles.logo}>
               <img src={logo} alt="logo" />
               <div className={styles['social-networks']}>
                  <a href="/">
                     <svg xmlns="http://www.w3.org/2000/svg" width="43" height="42" viewBox="0 0 43 42" fill="none">
                        <g clip-path="url(#clip0_49_102)">
                           <path d="M32.25 0H10.75C4.83803 0 0 4.72346 0 10.5V31.5C0 37.2745 4.83803 42 10.75 42H32.25C38.162 42 43 37.2745 43 31.5V10.5C43 4.72346 38.162 0 32.25 0ZM21.5 29.7497C16.5517 29.7497 12.5415 25.831 12.5415 21C12.5415 16.1668 16.5517 12.2498 21.5 12.2498C26.4461 12.2498 30.4585 16.1668 30.4585 21C30.4585 25.831 26.4461 29.7497 21.5 29.7497ZM33.146 12.2498C31.6603 12.2498 30.4585 11.0743 30.4585 9.62483C30.4585 8.17534 31.6603 6.99983 33.146 6.99983C34.6317 6.99983 35.8335 8.17534 35.8335 9.62483C35.8335 11.0743 34.6317 12.2498 33.146 12.2498Z" fill="white" />
                        </g>
                        <defs>
                           <clipPath id="clip0_49_102">
                              <rect width="43" height="42" fill="white" />
                           </clipPath>
                        </defs>
                     </svg>
                  </a>
                  <a href="/">
                     <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <path d="M19.392 26.4957C19.248 26.4957 16.08 26.4957 14.64 26.4957C13.872 26.4957 13.632 26.2077 13.632 25.4877C13.632 23.5677 13.632 21.5997 13.632 19.6797C13.632 18.9117 13.92 18.6717 14.64 18.6717H19.392C19.392 18.5277 19.392 15.7437 19.392 14.4477C19.392 12.5277 19.728 10.7037 20.688 9.02366C21.696 7.29566 23.136 6.14366 24.96 5.47166C26.16 5.03966 27.36 4.84766 28.656 4.84766H33.36C34.032 4.84766 34.32 5.13566 34.32 5.80766V11.2797C34.32 11.9517 34.032 12.2397 33.36 12.2397C32.064 12.2397 30.768 12.2397 29.472 12.2877C28.176 12.2877 27.504 12.9117 27.504 14.2557C27.456 15.6957 27.504 17.0877 27.504 18.5757H33.072C33.84 18.5757 34.128 18.8637 34.128 19.6317V25.4397C34.128 26.2077 33.888 26.4477 33.072 26.4477C31.344 26.4477 27.648 26.4477 27.504 26.4477V42.0957C27.504 42.9117 27.264 43.1997 26.4 43.1997C24.384 43.1997 22.416 43.1997 20.4 43.1997C19.68 43.1997 19.392 42.9117 19.392 42.1917C19.392 37.1517 19.392 26.6397 19.392 26.4957Z" fill="white" />
                     </svg>
                  </a>
                  <a href="/">
                     <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <g clip-path="url(#clip0_49_106)">
                           <path d="M40 7.5975C38.5125 8.25 36.9275 8.6825 35.275 8.8925C36.975 7.8775 38.2725 6.2825 38.8825 4.36C37.2975 5.305 35.5475 5.9725 33.6825 6.345C32.1775 4.7425 30.0325 3.75 27.6925 3.75C23.1525 3.75 19.4975 7.435 19.4975 11.9525C19.4975 12.6025 19.5525 13.2275 19.6875 13.8225C12.87 13.49 6.8375 10.2225 2.785 5.245C2.0775 6.4725 1.6625 7.8775 1.6625 9.39C1.6625 12.23 3.125 14.7475 5.305 16.205C3.9875 16.18 2.695 15.7975 1.6 15.195C1.6 15.22 1.6 15.2525 1.6 15.285C1.6 19.27 4.4425 22.58 8.17 23.3425C7.5025 23.525 6.775 23.6125 6.02 23.6125C5.495 23.6125 4.965 23.5825 4.4675 23.4725C5.53 26.72 8.545 29.1075 12.13 29.185C9.34 31.3675 5.7975 32.6825 1.9625 32.6825C1.29 32.6825 0.645 32.6525 0 32.57C3.6325 34.9125 7.9375 36.25 12.58 36.25C27.67 36.25 35.92 23.75 35.92 12.915C35.92 12.5525 35.9075 12.2025 35.89 11.855C37.5175 10.7 38.885 9.2575 40 7.5975Z" fill="white" />
                        </g>
                        <defs>
                           <clipPath id="clip0_49_106">
                              <rect width="40" height="40" fill="white" />
                           </clipPath>
                        </defs>
                     </svg>
                  </a>
               </div>
            </div>
            <div className={styles['footer-info']}>
               <ul>
                  <h6>Explore</h6>
                  <li>About Us</li>
                  <li>Services</li>
                  <li>Pricing</li>
                  <li>Blog</li>
                  <li>Contact</li>
               </ul>
               <ul>
                  <h6>Contact</h6>
                  <li>Email</li>
                  <li>Phone</li>
                  <li>Address</li>
                  <li>Social Media</li>
               </ul>
               <div className={styles['newsletter']}>
                  <h6>Newsletter</h6>
                  <p>Subscribe to our newsletter to stay informed about our latest products, services, and promotions.
                     Feel free to unsubscribe anytime!</p>
                  <div className={styles.input}>
                     <input type="text" value={value} onInput={({ target }) => setValue(target.value)} placeholder='Enter Your Email Address ...' />
                     <button>
                        <img src={arrowIcon} alt="arrow icon" />
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