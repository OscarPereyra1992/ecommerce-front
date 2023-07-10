import { styled } from "styled-components";
import Center from "./Center";
import ProductBox from "./ProductBox";

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  
`;

const Title = styled.h2`
  font-size: 2rem;
  margin:30px 0 20px 0;
  font-weight: 600;
`;

export default function NewProducts({ products }) {
  return (
    <Center>
      <Title>Nuestros Productos</Title>
      <ProductsGrid>
        {products?.length > 0 &&
          products.map((product, _id) => <ProductBox key={_id} {...product} />)}
      </ProductsGrid>
    </Center>
  );
}
