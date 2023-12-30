import classNames from 'classnames';
import { useId } from 'react';
import styles from './Statics.module.scss'

const statics = [
   {
      staticName: 'Successful Projects',
      staticRes: '500+'
   },
   {
      staticName: 'Satisfied Clients',
      staticRes: '98%'
   },
   {
      staticName: 'Handled Countries',
      staticRes: '35+'
   },
]
function Statics() {
   return (
      <section className={ classNames('container', styles.statics)  }>
         {
            statics.map(({ staticName, staticRes  }, index) => {
               console.log(staticRes);
               return (<>
                  <div className={ styles.static }  key={ useId() }>
                     <span>{ staticRes }</span>
                     <h5>{ staticName }</h5>
                  </div>
                  {
                     statics.length !== index + 1 ? <div className={styles.circle} /> : null
                  } 
               </>)
            })
         }
         
      </section>
   );
}

export default Statics;