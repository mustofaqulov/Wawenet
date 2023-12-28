import { Route, Routes } from 'react-router-dom';
import { routePaths } from '../constants/Routers';
import {
  About,
  Blog,
  Contact,
  Home,
  Pricing,
  Services,
} from '../pages';

export function Router() {
  const {
    ABOUT,
    HOME,
    SERVICES,
    PRICING,
    BLOG,
    CONTACT,
  } = routePaths;
  return (
    <Routes>
      <Route path={HOME} element={<Home />} />
      <Route path={ABOUT} element={<About />} />
      <Route
        path={SERVICES}
        element={<Services />}
      />
      <Route
        path={PRICING}
        element={<Pricing />}
      />
      <Route path={BLOG} element={<Blog />} />
      <Route
        path={CONTACT}
        element={<Contact />}
      />
    </Routes>
  );
}
