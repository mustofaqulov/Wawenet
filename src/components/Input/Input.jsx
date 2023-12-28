import classNames from "classnames"
import style from './input.module.scss'
function Input(props) {
   const {title, icon, type} = props
   return (
      <div className={classNames(style['input-content'])}>
         <input 
         type={type}
         placeholder={title}
         className={
            classNames(style.input)
         } 
         />
            {icon}
      </div>
   )
}
export default Input