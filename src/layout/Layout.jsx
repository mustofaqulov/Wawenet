import classNames from 'classnames';
import {
  Header,
  Footer,
} from '../components';

export function Layout({ children }) {
  return (
    <>
      <Header />
      <main
        className={classNames(
          'main-content',
          
        )}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
