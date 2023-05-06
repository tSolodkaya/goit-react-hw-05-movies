import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import styled from 'styled-components';
import Loader from './Loader/Loader';
import css from './Layout.module.css';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    border-bottom: 1px solid #808080;
  }
`;

const Layout = () => {
  return (
    <div>
      <header className={css.header}>
        <nav>
          <ul className={css.menu}>
            <li className={css.menuItem}>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li className={css.menuItem}>
              <StyledLink to="/movies">Movies</StyledLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
export default Layout;
