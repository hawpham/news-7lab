import styles from './NavBar.module.scss'
import {Link} from 'react-router-dom'


export default function NavBar() {
  const links = [
    'News', 'Icon Facebook', 'Graphics', 'Office', 'Windows', 'Software', 'Mobile', 'Games', 'Computer Tricks'
  ];

  return (
    <nav className={styles.navbar}>
      {links.map(link => (
        // <a key={link} href="/">{link}</a>
        <Link to="/">{link}</Link> 
      ))}
    </nav>
  );
}