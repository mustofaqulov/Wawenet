import classNames from "classnames";
import { Link } from "react-router-dom";
import { useId } from "react";
import styles from './PageTitle.module.scss'

function PageTitle({ pageName, pagePath }) {
   pagePath = pagePath.split('/')
   return (
      <section className={ styles['page-title'] }>
         <div className={ classNames('container', styles['page-title__content']) }>
            <nav>
               {
                  pagePath.map((item, index) => {
                     return (
                        <>
                           <Link to={`/${item}`} key={ useId } >{ item }</Link> 
                           {
                              pagePath.length !== index + 1 ? <span>{'>'}</span> : null
                           }
                        </>
                     )
                  })
               }
            </nav>
            <h1>{ pageName }</h1>
         </div>
      </section>
   );
}

export default PageTitle;