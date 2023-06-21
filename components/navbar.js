import Link from 'next/link'
import styles from '../styles/navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
     <Link href="/">Home</Link>
     <Link href="/produtos">Produtos</Link>
    </nav>
  )
}