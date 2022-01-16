import styled from "styled-components"

const Container = styled.div`
    height:30px;
    background-color:#83b735;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:14px;
    font-weight:bold;
`;

const Announcement = () => {
    return (
        <Container>
            ¡Gran oferta! Envío gratis en pedidos superiores a $ 15.000
        </Container>
    )
}

export default Announcement
