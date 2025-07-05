import styles from './Sidebar.module.scss';

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.searchBox}>
        <input type="text" placeholder="Enter keyword..." />
        <button>Search</button>
      </div>

      <div className={styles.latest}>
        <h3>Latest Posts</h3>
        <ul>
          <li>What is iOS Screen Time?</li>
          <li>Firewall App Blocker</li>
          <li>Android Developer Options</li>
          <li>System Restore</li>
        </ul>
      </div>
    </div>
  );
}
