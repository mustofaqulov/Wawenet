import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames';
import style from './header.module.scss';
import Logo from '../../assets/icons/logo-darkmode.svg';

export function Header() {
  const linksData = [
    {
      id: 1,
      text: 'About-us',
      link: '/About-us',
    },
    {
      id: 2,
      text: 'Services',
      link: '/Services',
    },
    { id: 3, text: 'Pricing', link: '/Pricing' },
    { id: 4, text: 'Blog', link: '/Blog' },
    { id: 5, text: 'Contact', link: '/Contact' },
  ];
  return (
    <header
      className={classNames(
        style.header,
        'container',
      )}
    >
      <div className={classNames(style.logo)}>
        <Link to={'/home'}>
          <Logo />
        </Link>
      </div>
      <ul>
        {linksData.map(({ id, text, link }) => {
          return (
            <li key={id}>
              <NavLink to={link}>{text}</NavLink>
            </li>
          );
        })}
      </ul>
      <button>SIGN IN</button>
    </header>
  );
}
