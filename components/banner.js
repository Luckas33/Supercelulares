import Link from 'next/link'
import styles from '../styles/banner.module.css'

export default function Banner() {
  return (
    <main className={styles.banner}>
        <div className = {styles.letras1}>
            <h1>Super Celulares</h1>
                <div className = {styles.letras2}> 
                <Link href='/produtos'>
                   <button className={styles.button}>Compre Agora!</button>
                </Link>
            </div>
        </div>

        </main>
  )
}