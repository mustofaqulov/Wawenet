import styles from './AdvantagesListItem.module.scss';

function AdvantagesListItem({ advantageInfo }) {
   const { image, title, text } =  advantageInfo
   return ( 
      <article className={styles['advantages-list-Item']}>
         <img src={ image } />
         <h4>{ title  }</h4>
         <p>{ text  }</p>
      </article>
   );
}

export default AdvantagesListItem;