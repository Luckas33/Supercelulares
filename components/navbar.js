import Link from 'next/link'
import styles from '../styles/navbar.module.css'
import Image from 'next/image'
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      
      <Link href="/" >
        
        <Image
          src= "/casa.png"
          width={24}
          height={24}
          alt='foto home'>
        </Image>
      
      </Link>

     <Link href="/">Home</Link>

    <Link href="/produtos">
        <Image
        src="/carrinho-de-compras.png"
        width={24}
        height={24}
        alt='foto carrinho'
        ></Image>
     </Link>
     
     <Link href="/produtos">Produtos</Link>
    </nav>
  )
}