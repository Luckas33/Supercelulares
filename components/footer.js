import styles from "../styles/footer.module.css"
import Link from 'next/link'

export default function Footer(){
    return(
        <main className={`${styles.footer} ${styles.letras3}`}>
                <h1>Contate-nos</h1>
                <div className={styles.letras4}>
                    <ul>
                        <li>
                        Email: supercell@gmail.com
                        </li>
                        <li>
                        Telefone: (99)9999-9999
                        </li>
                        <li>
                        Endereço rua 14, bairro azul,cidade fortaleza
                        </li>
                    </ul>
                </div>
          

        </main>
    )
}