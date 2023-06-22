const getPostsData = async () => {
    const res = await fetch("https://apitrainees.herokuapp.com/celulares")
        return res.json();
}

import Link from 'next/link'

export default async function Produtoss(){
    const posts = await getPostsData();
    return(
        <div>

            {posts.map((post) =>{
               return <p>{post.nome}</p>     
            }) }
        </div>
    )
}