import styles from '../styles/portifolio.module.css'

export default function Portifolio(){
    return(
        <div className={styles.portf}>
            <div className={styles.portf0}>
            <h1>Quem somos?</h1>
            </div>
            <div className={styles.portf1}>
                <p>Bem-vindo à Super Celulares: uma revolucionária empresa que está transformando a maneira como as pessoas compram celulares. Diferente das tradicionais lojas de eletrônicos, a Super Celulares adota uma abordagem única para proporcionar aos clientes uma experiência excepcional de compra.</p>
                <br></br>
            <div/>
            <div clasName={styles.portf2}>
                <p>O que nos diferencia é o nosso foco em três pilares principais:</p>
                <br></br>
            </div>
            <div className={styles.portf3}>
                <ul>
                    <li>personalização</li> 
                    <li>transparência</li>
                    <li>conveniência.</li>
                </ul>
            </div>
            <br></br>
            <div>
                <p>Em primeiro lugar, na Super Celulares, acreditamos que cada cliente é único, e suas necessidades e preferências também o são. É por isso que oferecemos um serviço personalizado, garantindo que cada cliente encontre o celular perfeito para atender às suas demandas específicas. Nossa equipe altamente treinada e conhecedora está pronta para orientar os clientes em sua jornada de compra, ouvindo suas necessidades e recomendando os melhores dispositivos com base em suas preferências pessoais.</p>
                <br></br>
                <p>Além disso, a Super Celulares valoriza a transparência. Sabemos que a compra de um celular é um investimento significativo, e os clientes merecem ter todas as informações necessárias para tomar uma decisão informada. Em nossa loja, você encontrará detalhes completos sobre cada produto, incluindo especificações técnicas, recursos, avaliações de clientes e preços claros. Não há surpresas desagradáveis ou letras miúdas. Acreditamos que a transparência é fundamental para estabelecer confiança com nossos clientes e garantir que eles façam a escolha certa.</p>
                <br></br>
                <p>Em resumo, a Super Celulares é uma empresa inovadora que está reinventando a forma como as pessoas compram celulares. Com nossa abordagem personalizada, transparência absoluta e conveniência excepcional, proporcionamos aos clientes uma experiência de compra diferenciada. Estamos comprometidos em ajudar cada cliente a encontrar o celular perfeito, garantindo satisfação total em cada transação.</p>
            </div>
            </div>
        </div>

        
    )
}