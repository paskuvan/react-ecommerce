import styled from 'styled-components'
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";

const Container = styled.div``;

const Title = styled.h1`
    margin:20px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Filter = styled.div`
    margin:20px;
    ${mobile({ width: "0px 20px", display:"flex", flexDirection:"column" })}
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right:20px;
    ${mobile({ marginRight: "0px"})}
`;

const Select = styled.select`
    padding:10px;
    margin-right:20px;
    ${mobile({ margin: "10px 0px"})}
`;
const Option = styled.option``;

const ProductList = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Title>Alimentos Saludables</Title>
            <FilterContainer>
                <Filter><FilterText>Filtrar por:</FilterText>
                    <Select>
                        <Option disabled selected>
                            Marca
                        </Option>
                        <Option>Knop Labs</Option>
                        <Option>Naturals Pharma Knop</Option>
                        <Option>Manare</Option>
                        <Option>Naturaloe</Option>
                        <Option>Garden House</Option>
                        <Option>Ipak</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>
                            Categoría
                        </Option>
                        <Option>Emporio</Option>
                        <Option>Alimentos</Option>
                        <Option>Medicamentos</Option>
                        <Option>Cosméticos</Option>
                    </Select>
                </Filter>
                
                <Filter><FilterText>Ordenar por:</FilterText>
                <Select>
                    <Option selected>Novedades</Option>
                    <Option>Precio mayor a menor </Option>
                    <Option>Precio menor a mayor</Option>
                </Select>
                </Filter>
            </FilterContainer>
            <Products/>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default ProductList
