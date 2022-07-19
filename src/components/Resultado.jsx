import styled from "@emotion/styled"

const Contain = styled.div`
    color: #fff;
    font-family: 'Lato', sans-serif;

    display: flex;
    align-items: center;
    
    
`

const Img = styled.img`
    display: block;
    width: 120px;
    gap: 1rem;
    margin-top: 30px;
    margin-right: 10px ;
`


const Texto = styled.p `
    span{
        font-weight: 700;
    }
`
const Precio = styled.p`
    font-size: 25px;
    span{
        font-weight: 700;
    }
    
`


const Resultado = ({resultado}) => {
    const  {PRICE, HIGHDAY, LOWDAY, LOW24HOUR ,CHANGEPCT24HOUR,IMAGEURL,LASTUPDATE } = resultado
    return (

        <Contain>
            <Img 
                src={`https://cryptocompare.com/${IMAGEURL}`} 
                alt="Imagen Crypto" 
            />

                <div>
                 <Precio>The price is:               <span>{PRICE}           </span></Precio>
                    <Texto>Highest price of the day:    <span>{HIGHDAY}         </span></Texto>
                    <Texto>Lowest price of the day:     <span>{LOWDAY}          </span></Texto>
                    <Texto>Variation last 24 hours:  <span>{CHANGEPCT24HOUR} </span></Texto>
                    <Texto>Lowest price in 24 hours: <span>{LOW24HOUR}       </span></Texto>
                    <Texto>Last update::        <span>{LASTUPDATE}      </span></Texto>
                </div>

        </Contain>
    )
}

export default Resultado