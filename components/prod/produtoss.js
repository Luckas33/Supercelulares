import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/produtos.module.css'
const getPostsData = async () => {
    const res = await fetch("https://apitrainees.herokuapp.com/celulares")
        return res.json();
}



export default async function Produtoss(){
    const posts = await getPostsData();
    return(
        
        <div className={styles.prod}>
        <br></br>
        <br></br>
        <br></br>
        
            <div className={styles.prod0}>
            <h1>Produtos</h1>
            </div>
           <div classsName={styles.prod1}>
            <Image src={posts.img} alt="foto celulares" width={100} height={100}></Image>
            {posts.map((post) =>{
               return <p>{post.nome}{post.preco}{post.descricao}</p>     
            }) }
            </div>
        </div>
    )
}
