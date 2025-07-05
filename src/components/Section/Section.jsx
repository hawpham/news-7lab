import React from 'react'
import styles from './Section.module.scss'

function Section({title, category}) {
  return (
    <section className={styles.section}>
      <h3>{title}</h3>
      <div className={styles.articles}>
        {[...Array(3)].map((_, i) => (
          <div key={i} className={styles.card}>
            <img src={`/placeholder-${category}-${i}.jpg`} alt={`Article ${i}`} />
            <p>Article Title Placeholder {i + 1}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Section