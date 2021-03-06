import { Email, Facebook, Instagram, Phone, Room, Twitter, YouTube } from '@material-ui/icons';
import styled from 'styled-components'
import { mobile } from "../responsive";

const Container = styled.div`
        display:flex;
        ${mobile({ flexDirection: "column" })}
    `;
const Left = styled.div`
        flex:1;
        display:flex;
        flex-direction:column;
        padding:20px;
    `;

    const Logo = styled.h1`
    `;
    const Desc = styled.p`
        margin:20px 0px;
    `;
    const SocialContainer = styled.div`
        display:flex;
    `;
    const SocialIcon = styled.h1`
        width:40px;
        height:40px;
        border-radius:50%;
        color:white;
        background-color: #${props => props.color};
        display:flex;
        align-items:center;
        justify-content:center;
        margin-right:20px;
        cursor:pointer;
    `;


const Center = styled.div`
    flex: 1;
    padding:20px;
    ${mobile({ display: "none" })}
`;

const Title =styled.h3`
    margin-bottom:30px;
`;

const List =styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;
`;

const ListItem =styled.li`
      width:50%;  
      margin-bottom:10px;
`;

const Right = styled.div`
    flex:1;
    padding: 20px;
    ${mobile({ backgroundColor: "#eee" })}
`;

const ContactItem = styled.div`
    margin-bottom:20px;
    display:flex;
    align-items:center;
`;
const Payment = styled.img`
    width:80%;
`;


const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>FARMACIAS KNOP.</Logo>
                <Desc>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, quasi! Eligendi velit debitis obcaecati error itaque, tempora repudiandae voluptate, quisquam.
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3b5999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="e4405f">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="55acee">
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon color="e60023">
                        <YouTube/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Categor??as</Title>
                <List>
                    <ListItem>Packs</ListItem>
                    <ListItem>Ofertas</ListItem>
                    <ListItem>Vegano</ListItem>
                    <ListItem>Libre de Az??car</ListItem>
                    <ListItem>Libre de Gluten</ListItem>
                    <ListItem>Org??nicos</ListItem>
                    <ListItem>Keto</ListItem>
                    <ListItem>Infusiones</ListItem>
                </List>
            </Center>
            <Right>
                    <Title>Contacto</Title>
                    <ContactItem><Room style={{marginRight:"10px"}}/>
                        Alameda 1665, Santiago 8340531
                    </ContactItem>
                    <ContactItem><Phone style={{marginRight:"10px"}}/>
                    +56225698300
                    </ContactItem>
                    <ContactItem><Email style={{marginRight:"10px"}}/>
                        contacto@farmaciasknop.com
                    </ContactItem>
                    <Payment src="https://i.ibb.co/k0PVhbf/payment.png" />
            </Right>
        </Container>
    )
}

export default Footer
