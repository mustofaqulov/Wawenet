import classNames from 'classnames';
import styles from './Consultation.module.scss'



function Consultation() {
   return ( 
      <section className={ styles.consultation  }>
         <div className={ classNames('container', styles['consultation__content'])  }>
            <h3>Need IT Solutions? Let’s <span>start now.</span></h3>
         </div>
      </section>
   );
}

export default Consultation;