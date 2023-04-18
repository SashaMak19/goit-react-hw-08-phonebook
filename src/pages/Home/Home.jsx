import { NavLink } from 'react-router-dom';
import styles from './home.module.css';

const Home = () => {
  return (
    <div className={styles.about}>
      <h1>Welcome to PhoneBook</h1>
      <p className={styles.text}>
        Phone Book is a web application for managing contacts, allowing users to
        easily store, edit, and delete contacts. The application provides a
        convenient and intuitive user interface for adding new contacts, viewing
        contact details, editing contact information, and removing unnecessary
        contacts. Phone Book also offers quick search functionality for contacts
        based on various parameters such as name and surname.
      </p>
      <NavLink className={styles.link} to="/contacts">
        Get Started
      </NavLink>
    </div>
  );
};

export default Home;
