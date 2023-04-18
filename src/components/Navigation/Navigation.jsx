import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import styles from './navigation.module.css';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={styles.headerNav}>
      <NavLink to="/" className={styles.link}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={styles.link}>
          Phone Book
        </NavLink>
      )}
    </nav>
  );
};

export { Navigation };
