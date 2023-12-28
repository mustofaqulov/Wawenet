import Logo from '../../assets/icons/logo-darkmode.svg';
import classNames from 'classnames';
import style from './navbar.module.scss';

export function Navbar() {
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
        {linksData.map(({ id, text, link }) => {
          return (
            <li key={id}>
              <NavLink to={link}>{text}</NavLink>
            </li>
          );
        })}
      </ul>
      <button>SIGN IN</button>
    </div>
  );
}
