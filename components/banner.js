import Link from 'next/link'
import styles from '../styles/banner.module.css'

export default function Banner() {
  return (
    <main className={styles.banner}>
        <div className = {styles.letras1}>
            <h1>Super Celulares</h1>
                <div className = {styles.letras2}> 
                    <h6>Compre Agora!</h6>
            </div>
        </div>
        
    </main>
  )
}