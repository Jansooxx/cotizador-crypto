import {useState,useEffect, Fragment} from 'react'
import styled from '@emotion/styled'
import Error from './Error'
import useSelectMonedas from '../hooks/useSelectMonedas'
import {monedas} from '../data/monedas'

/* 
Styled components Start
*/

const InputSubmit = styled.input`
    background-color: #B232FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 15px;
    box-shadow: -1px 14px 24px 2px rgba(0,0,0,0.46);
    transition: background-color .3s ease;
    margin-top: 20px;
    
    &:hover{
        background-color: #9d00ff;
        cursor: pointer;
    }

`

/* 
Styled components End
*/

const Formulario = ({setMonedas}) => {


 /* STATES*/
    const [criptos,setCriptos] = useState([])
    const [error,setError] = useState(false)

/* HOOKS */

    const [ moneda, SelectMonedas ] = useSelectMonedas('Choose your Currency', monedas)
    const [ cripto, SelectCripto ] = useSelectMonedas('Choose your Cryptocurrency', criptos)

/* HOOKS END'S */

    useEffect(() => {

        const consultarAPI = async () => {

            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=15&tsym=USD"

            const respuesta = await fetch(url)
            const resultado = await respuesta.json()

            const arrayCriptos = resultado.Data.map( cripto => {

                const objeto ={
                    id:cripto.CoinInfo.Name,
                    name:cripto.CoinInfo.FullName
                }
                return objeto
            })
            setCriptos(arrayCriptos)
        }
        consultarAPI();

    }, [])



    const handleSubmit = e => {
        e.preventDefault()

        if([moneda,cripto].includes('') ){
            setError(true)
            
            return
        }

        setError(false)

        setMonedas({
            moneda,
            cripto
        })
    }
    

  return (

    <Fragment>

        {error && <Error>All fields are required</Error>}
        <form
            onSubmit={handleSubmit}
        >

            <SelectMonedas />
            <SelectCripto />

            

            <InputSubmit    
                type="submit" 
                value="Calculate"
            />
        </form>
    
    </Fragment>
  )
}

export default Formulario