import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/icons/logo.svg';
import classNames from 'classnames';
import style from './navbar.module.scss';

export function Navbar() {
  const linksData = [
    { id: 1, text: 'About-us', link: '/About-us' },
    { id: 2, text: 'SERVICES', link: '/SERVICES' },
    { id: 3, text: 'PRICING', link: '/PRICING' },
    { id: 4, text: 'BLOG', link: '/BLOG' },
    { id: 5, text: 'CONTACT', link: '/CONTACT' },
  ];
  return (
    <div
      className={classNames(
        'container',
        style.navbar,
      )}
    >
      <div className={classNames(style.logo)}>
        <Logo />
      </div>
      <ul>
        {/* {
          linksData.map(
            ({id, text, link})=>{
            return(
              <li key={id}>
              <NavLink
              to={link}>
                {text}
              <NavLink />
              </li>
            )
          })
        } */}
      </ul>
      <button>SIGN IN</button>
    </div>
  );
}
