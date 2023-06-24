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
        <div clasName={styles.prod}>
            <h1>Proddutos</h1>
            <h1>Proddutos</h1>
            <h1>Proddutos</h1>
            <h1>Proddutos</h1>
            <h1>Proddutos</h1>
            <h1>Proddutos</h1>
            {posts.map((post) =>{
               return <p>{post.img}{post.nome}{post.preco}{post.descricao}</p>     
            }) }
        </div>
    )
}


























//import axios from "axios";

//const getCelularesData = async() => {
   // const response = await axios.get ('https://apitrainees.herokuapp.com/celulares');

   // return response.data;
//}

//export default async function Cell(){
    //const celulares = await getCelulares();
    //console.log({nome});
    //return(
      //  <div>
       // <h2>Axios</h2>
       // {celulares.map((celulares) =>(
      //      <p key={celulares.nome}>{celulares.nome}</p>
     //    ))}
     //   </div>
  //  )
//}