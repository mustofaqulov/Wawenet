import classNames from 'classnames';
import React from 'react';
import styles from './Promo.module.scss'
function Promo() {
   return ( 
      <section className={ styles.promo  }>
         <div className={ classNames('container', styles['promo__content'])  }>
            <h3>
               We believe that technology
               can change the world.
            </h3>
            <div>
               <p>
                  That's why we're committed to delivering innovative IT solutions to businesses of all sizes. Our team of experienced professionals is dedicated to helping you achieve your goals and thrive in a rapidly evolving digital landscape.
               </p>
               <p>
                  We are an IT company that offers a wide range of services to help businesses succeed in the digital world. Our expertise includes web development, mobile development, cloud computing, cybersecurity, and digital marketing. We provide customized solutions to meet the unique needs of each of our clients’ business from every size and nation.
               </p>
            </div>
         </div>
      </section>
   );
}

export default Promo;