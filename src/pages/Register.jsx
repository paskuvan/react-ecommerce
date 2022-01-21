import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://i.ibb.co/qFh8328/Untitled-2.png")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
width: 40%;
padding: 20px;
background-color: white;
${mobile({ width: "75%" })}
`;
const Title = styled.h1`
        font-size:24px;
        font-weight:700;
        color: #1c5630;
`;
const Form = styled.form`
        display:flex;
        flex-wrap:wrap;
`;
const Input = styled.input`
        flex:1;
        min-width:40%;
        margin:20px 10px 0px 0px;
        padding:10px;
`;
const Agreement = styled.span`
        font-size:12px;
        margin:20px 0px;
        color: #343230;
`;
const Button = styled.button`
        width:40%;
        border:none;
        padding:15px 20px;
        background-color:#1c5630;
        color:white;
        cursor:pointer;
        font-weight:600;

        &:hover{
            background-color: #83b735;
        }
`;

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Regístrate</Title>
                <Form>
                    <Input type="text" placeholder="Nombre" />
                    <Input type="text" placeholder="Apellidos" />
                    <Input type="text" placeholder="Rut" required />
                    <Input type="text" placeholder="Email" />
                    <Input type="text" placeholder="Contraseña" />
                    <Input type="text" placeholder="Confirmar contraseña" />
                    <Agreement>
                    Declaro haber leído, y acepto expresamente los <b>Términos y Condiciones</b> del sitio y su <b>Política de Privacidad</b> y <b>Protección de Datos</b>.
                    </Agreement>
                    <Button>Regístrate</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register