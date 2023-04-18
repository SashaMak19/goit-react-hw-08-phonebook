import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/operations/operations';
import styles from './user-menu.module.css';

const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>Welcome, {user.name}</p>
      <button
        className={styles.button}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};

export { UserMenu };
