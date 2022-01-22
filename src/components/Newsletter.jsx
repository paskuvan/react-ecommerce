import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from "../responsive";

const Container = styled.div`
    height: 60vh;
    background-color: #f5fbfd;
    display:flex;
    align-items: center;
    justify-content:center;
    flex-direction: column;
`;
const Title = styled.h1`
    font-size:24px;
    margin-bottom:20px;
    ${mobile({ textAlign: "center" })}
`;
const Desc = styled.div`
    font-size:16px;
    font-weight:300;
    margin-bottom:20px;
    ${mobile({ textAlign: "center" })}
`;
const InputContainer = styled.div`
    width:50%;
    height:40px;
    background-color:white;
    display:flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobile({ width: "80%" })}
`;
const Input = styled.input`
    border:none;
    flex:8;
    padding-left:20px;
`;
const Button = styled.button`
    flex:1;
    border:none;
    background-color:#1c5630;
    color:white;

    &:hover{
        background-color: #83b735;
    }
`;

const Newsletter = () => {
    return (
        <Container>
            <Title>Recibe Ofertas y Contenido Natural</Title>
            <Desc>Descubra las novedades de productos, promociones, descuentos y ofertas.</Desc>
            <InputContainer>
                <Input placeholder="Tu email" />
                <Button>
                    <Send/>
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter
