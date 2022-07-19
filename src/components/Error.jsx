import styled from "@emotion/styled"


/* CSS STYLES*/

const Texto = styled.div`
    background-color: #d31107;
    color:#fff;
    padding: 15px;
    font-size: 22px;
    text-transform: uppercase;
    font-family: 'Lato',sans-serif;
    font-weight: 700;
    text-align: center;
    border: none;
    border-radius: 20px;
    display: block;
    width: 65%;
    box-shadow: 0px 0px 25px -5px rgba(255,255,255,0.50);

`


const Error = ({children}) => {
  return (
    <Texto>{children}</Texto>
  )
}

export default Error