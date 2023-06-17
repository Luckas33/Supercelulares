import Navbar from '../../../components/navbar'
import  Link from 'next/link'
export default function page(){
    return(
        <main>
            <Navbar/>
            <h1>Camisas</h1>
            <Link href="/produtos/camisa/camisa_vermelha">Camisa vermelha</Link>
        </main>    
    )

}