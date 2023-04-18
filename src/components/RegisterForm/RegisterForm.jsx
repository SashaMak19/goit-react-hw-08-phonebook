import { useDispatch } from 'react-redux';
import { register } from 'redux/operations/operations';
import styles from './register-form.module.css';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const { name, email, password } = form.elements;
    dispatch(
      register({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={styles.label}>
        Name
        <input className={styles.input} type="text" name="name" />
      </label>
      <label className={styles.label}>
        Email
        <input className={styles.input} type="email" name="email" />
      </label>
      <label className={styles.label}>
        Password
        <input className={styles.input} type="password" name="password" />
      </label>
      <button className={styles.button} type="submit">
        Register
      </button>
    </form>
  );
};

export { RegisterForm };
