import styles from './Sidebar.module.scss';
import { Link } from 'react-router-dom';

const latestPosts = [
  {
    id: 1,
    title: 'How to Unblock Roblox on a School Computer Without VPN (2025 Guide)',
    image: 'https://placeholder.pics/svg/300/DEDEDE/555555/image',
    time: '25/06/2025'
  },
  {
    id: 2,
    title: 'What is Cloud Backup? A Complete Guide for Businesses',
    image: 'https://placeholder.pics/svg/300/DEDEDE/555555/image',
    time: '08/06/2025'
  },
  {
    id: 3,
    title: 'What Is Two-Factor Authentication? A Complete Guide to 2FA Security',
    image: 'https://placeholder.pics/svg/300/DEDEDE/555555/image',
    time: '07/06/2025'
  },
  {
    id: 4,
    title: 'What Is Disk Fragmentation? Understanding, Impact, and Solutions',
    image: 'https://placeholder.pics/svg/300/DEDEDE/555555/image',
    time: '04/06/2025'
  }
];

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <h3 className={styles.heading}>Latest Posts</h3>
      <ul className={styles.list}>
        {latestPosts.map(post => (
          <li key={post.id} className={styles.postItem}>
            <Link to={`/post/${post.id}`}>
              <img src={post.image} alt={post.title} />
              <div className={styles.info}>
                <h4>{post.title}</h4>
                <span>{post.time}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
