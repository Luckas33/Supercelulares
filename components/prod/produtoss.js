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
        <br></br>
            <div className={styles.prod0}>
                <h1>Produtos</h1>
            </div>
           <div classsName={styles.prod1}>
            
            {posts.map((post,index) =>{
               return <p key={index} className={styles.prod2}>{post.nome}<Image src={post.img} alt="foto celulares" width={250} height={250}></Image><h4>Preço:</h4><p className={styles.prod3}>{post.preco}<h4>Descrição:</h4>{post.descricao}<br></br><buttom className={styles.buttom2}>Comprar</buttom></p></p>
                
                
                   
            }) }

           
        </div>
        </div>
      
    )
    
