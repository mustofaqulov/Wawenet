import { Footer } from './components/Footer/Footer'
import Input from './components/Input/Input';
import ArrowIcon from '../src/assets/icons/arrow-icon.svg'
import './styles/style.scss'
export default function App() {
  return <Input title='Enter Your Email Address ...' type='email' icon={<ArrowIcon/>} />;
}
