import { useDispatch } from 'react-redux';
import { logIn } from 'redux/operations/operations';
import styles from './login-form.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const { email, password } = form.elements;
    dispatch(logIn({ email: email.value, password: password.value }));
    form.reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        Email
        <input className={styles.input} type="text" name="email" />
      </label>
      <label className={styles.label}>
        Password
        <input className={styles.input} type="password" name="password" />
      </label>
      <button className={styles.button} type="submit">
        Sign In
      </button>
    </form>
  );
};

export { LoginForm };
