import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding:"10px" })}
`;
const Title = styled.h1`
    font-weight: 700;
    text-align: center;
    color: #1c5630;
`;
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props) => (props.type === "filled" ? "#83b735" : "white")};
    color: ${(props) => props.type === "filled" && "white"};

    
`;

const TopTexts = styled.div`
${mobile({ display: "none" })}
`;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`;
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;
const Image = styled.img`
    width: 200px;
`;
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
const ProductName = styled.span`
color:1c5630;
`;
const ProductId = styled.span``;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const ProductAmount = styled.div`
    font-size: 16px;
    margin: 5px;
    ${mobile({ margin: "5px" })}
`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight:500;
    color: #1c5630;
    ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`;

const Summary = styled.div`
    flex: 1;
    border: 0px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;

const SummaryTitle = styled.h1`
    font-weight: 600;
    color: #1c5630;
`;
const SummaryItem = styled.div`
        margin: 30px 0px;
        display:flex;
        justify-content: space-between;
        font-weight: &{props=> props.type === "total" && "500"};
        font-size: &{props=> props.type === "total" && "24"};
    `;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #1c5630;
    border:none;
    color: white;
    font-weight: 600;
    cursor: pointer;

    &:hover{
        background-color: #83b735;
    }
`;

export const Cart = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>TU CARRO</Title>
                {/* <Top>
                    <TopButton>CONTINUA COMPRA</TopButton>
                    <TopTexts>
                        <TopText>CARRO DE COMPRAS (2)</TopText>
                        <TopText>TU LISTA (1)</TopText>
                    </TopTexts>
                    <TopButton type="filled">PAGAR</TopButton>
                </Top> */}
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="https://i.ibb.co/4KLm9Xs/product01.png" />
                                <Details>
                                    <ProductName>
                                        <b>Producto:</b> Cobertura chocolate org. 70% cacao 400 g, manare
                                    </ProductName>
                                    <ProductId>
                                        <b>SKU:</b> 93813718293
                                    </ProductId>
                                    <ProductSize>
                                        <b>Categoría:</b> Vegano
                                    </ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>2</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>$11.990</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr />
                        <Product>
                            <ProductDetail>
                                <Image src="https://i.ibb.co/L5jWJqx/product02.png" />
                                <Details>
                                    <ProductName>
                                        <b>Producto:</b> Clorofila Líquida 450 mL – Knop Laboratorios®
                                    </ProductName>
                                    <ProductId>
                                        <b>SKU:</b> 93813717823
                                    </ProductId>
                                    <ProductSize>
                                        <b>Categoría:</b> Alimentación saludable
                                    </ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>1</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>$11.290</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>RESUMEN</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemText>$23.280</SummaryItemText>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Envío</SummaryItemText>
                            <SummaryItemText>$1.400</SummaryItemText>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Descuento</SummaryItemText>
                            <SummaryItemText>$-3.000</SummaryItemText>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$21.680</SummaryItemPrice>
                        </SummaryItem>
                        <Button>Pagar ahora</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    );
};

export default Cart;
