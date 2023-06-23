import styles from '../styles/portifolio.module.css'

export default function Portifolio(){
    return(
        <div className={styles.portf}>
            <h1>Quem somos?</h1>
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
                    <li>personalização</li> <li>transparência</li>
                    <li>conveniência.</li>
                </ul>
            </div>
            <div>
                <h5>Em primeiro lugar, na Super Celulares, acreditamos que cada cliente é único, e suas necessidades e preferências também o são. É por isso que oferecemos um serviço personalizado, garantindo que cada cliente encontre o celular perfeito para atender às suas demandas específicas. Nossa equipe altamente treinada e conhecedora está pronta para orientar os clientes em sua jornada de compra, ouvindo suas necessidades e recomendando os melhores dispositivos com base em suas preferências pessoais.</h5>
            </div>
            </div>
        </div>

        
    )
}