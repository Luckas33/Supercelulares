import Link from 'next/link'
import Navbar from '../../components/navbar'
export default function page(){
    return(
        <main>
            <Navbar/>
            <h1>Produtos</h1>
            <ul>
                <li>
                    <p>maça</p>
                </li>
                <li>
                    <p>banana</p>
               </li>
            </ul>
            <Link href="/produtos/camisa">Camisas</Link>
        </main>    
    )

}