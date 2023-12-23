import Logo from '../../assets/icons/logo.svg'
import classNames from 'classnames';
import style from './navbar.module.scss';

export function Navbar() {
  return <div className={classNames(style.navbar)}>
    <div className={classNames(style.logo)}>
      <Logo />
    </div>
  </div>;
}
