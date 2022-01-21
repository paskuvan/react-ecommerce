import styled from "styled-components"

const Container = styled.div`
    height:30px;
    background-color:#83b735;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:14px;
    font-weight:500;
`;

const Announcement = () => {
    return (
        <Container>
            Envío gratis en pedidos superiores a $ 15.000 en todo Chile.
        </Container>
    )
}

export default Announcement
