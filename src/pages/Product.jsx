import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
    padding:50px;
    display:flex;
    ${mobile({ padding:"10px", flexDirection:"column"})}
`;
const ImgContainer = styled.div`
    flex:1;
`;
const Image = styled.img`
    width:100%;
    height:90vh;
    object-fit:cover;
    ${mobile({ height: "40vh"})}
`;
const InfoContainer = styled.div`
    flex:1;
    padding: 0px 50px;
    ${mobile({ padding: "10px"})}
`;
const Title = styled.h1`
    font-weight:600;
    color:#1c5630;
`;
const Desc = styled.p`
    margin:20px 0px;
`;

const RefPrice = styled.span`
    font-weight:100;
    color:gray;
    display:flex;
    text-decoration: line-through;
    
`;

const Price = styled.span`
    font-weight:800;
    font-size:40px;
    color: #1c5630;
`;




const AddContainer = styled.div`
    display:flex;
    align-items:center;
    width:50%;
    justify-content:space-between;
    ${mobile({ width: "100%"})}
`;
const AmountContainer = styled.div`
    display:flex;
    align-items:center;
    font-weight:700;
`;
const Amount = styled.span`
    width:30px;
    height:30px;
    border-radius:10px;
    border:1px solid #1c5630;
    display:flex;
    align-items:center;
    justify-content:center;
    margin: 0px 5px;
`;
const Button = styled.button`
    padding:15px;
    border:2px solid #1c5630;
    background-color:white;
    cursor:pointer;
    font-weight:500;

    &:hover{
        background-color: #83b735;
        border:none;
        color: white;
    }
`;

export const Product = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <ImgContainer>
                    <Image src="https://i.ibb.co/NFGT8CP/naturaloe.png"/>
                </ImgContainer>
                <InfoContainer>
                    <Title>Crema facial antiedad noche 50 ml, Naturaloe</Title>
                    <Desc>
                    Elaborado con un 40% de Aloe Vera Orgánico que humecta, protege e hidrata tu piel. Jengibre y Maca revitaliza las pieles de aspecto cansado, envejecido y fatigado. Aquaxyl aumenta las reservas de agua de la piel manteniéndola suave y luminosa. Ácido Hialurónico captura y retiene la humedad de la piel ayudando a preservar su equilibrio natural, aumenta la hidratación, de efecto inmediato y de larga duración. Chronociclyn reparador nocturno, que se adecua al ritmo circadiano, trabajando en la piel durante la noche cuando comienza la renovación celular. Ayuda a reparar daños cutáneos temporales o de largo plazo, induce una renovación periódica de queratinocitos. Despierta la piel estimulando sus defensas naturales. Actúa en pieles cansadas y con falta de exposición al sol activando la biotransformación de la vitamina D mientras duermes.</Desc>
                    <RefPrice>$10.990</RefPrice>
                    <Price>$8.790</Price>
                    
                    <AddContainer>
                        <AmountContainer>
                            <Remove/>
                            <Amount>1</Amount>
                            <Add/>
                        </AmountContainer>
                        <Button>Añadir al carro</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default Product
