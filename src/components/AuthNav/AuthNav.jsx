import { NavLink } from 'react-router-dom';
import styles from './auth-nav.module.css';

const AuthNav = () => (
  <div className={styles.authNav}>
    <NavLink className={styles.link} to="/users/signup">
      Register
    </NavLink>
    <NavLink className={styles.link} to="/users/login">
      Sign In
    </NavLink>
  </div>
);

export { AuthNav };
