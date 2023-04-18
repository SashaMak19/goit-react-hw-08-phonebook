import { SectionForm } from 'components/SectionForm/SectionForm';
import { SectionContacts } from 'components/SectionContacts/SectionContacts';
import { Filter } from 'components/Filter/Filter';
import styles from './phone-book.module.css';

const PhoneBook = () => (
  <div className={styles.container}>
    <h2>Phone book</h2>
    <SectionForm />
    <h2>Contacts</h2>
    <div className={styles.contactListContainer}>
      <Filter />
      <SectionContacts />
    </div>
  </div>
);

export default PhoneBook;
