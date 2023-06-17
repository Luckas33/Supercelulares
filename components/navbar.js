import Link from 'next/link'
import styles from '/components/navbar.module.css'

export default function Navbar() {
  return (
    <main className={styles.navbar}>
     <Link href="/">Home</Link>
     <br></br>
     <Link href="/produtos">Produtos</Link>
    </main>
  )
}