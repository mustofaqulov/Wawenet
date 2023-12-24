import Input from "./components/Input/Input.jsx";
import icon from '../src/components/Input/right-arrow.svg'
import './styles/style.scss'
export default function App() {
  return <Input title={'Enter Your Email Address ...'} type={'text'} icon={icon}/>
}
