import classNames from "classnames"
import style from './input.module.scss'
function Input({title, icon, type}) {
   return (
      <div className={classNames(style['input-content'])}>
         <input 
         type={type}
         placeholder={title}
         className={
            classNames(style.input)
         } 
         />
         <img 
         src={icon}
         alt="right arrow"
         className={classNames(style['right-arrow'])} />
      </div>
   )
}
export default Input