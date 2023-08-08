import { styled } from "styled-components";
import Center from "./Center";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import CartIcon from "./icons/CartIcon";
import CartContext from "./CartContext";
import { useContext } from "react";

const Bg = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px 0;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 1.5rem;
  @media screen and (min-width: 768px){
    font-size: 3rem;
  }
`;

const Description = styled.p`
  color: #aaa;
  font-size: 0.8rem;
`;

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  img {
    max-width: 100%;
    max-height: 200px;
    display:block;
    margin: 0 auto;
  };
  div:nth-child(1){
    order:2;
  };
 
  @media screen and (min-width: 768px) {
    grid-template-columns: 1.2fr 0.8fr;
    div:nth-child(1){
    order:0;
    }
    img {
    max-width: 100%;
  }
  }
`;

const Column = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 25px;
`;

export default function Featured({product}) {
  const {addProduct} = useContext(CartContext);
  function addFeaturedToCart(){
    addProduct(product._id);
  }
  
  return (
    <Bg>
      <Center>
        <ColumnsWrapper>
          <Column>
            <div>
              <Title>{product.title}</Title>
              <Description>
                {product.description}
              </Description>
              <ButtonsWrapper>
                <ButtonLink href={'/product/'+product._id} outlined={1} skyblue={1} size="l">
                  Read more
                </ButtonLink>
                <Button primary={1} size="l" onClick={addFeaturedToCart}>
                  <CartIcon/>
                  Add to card
                </Button>
              </ButtonsWrapper>
            </div>
          </Column>
          <div>
            <img src={product.images[0]} alt="llavero-corazon o manta" />
          </div>
        </ColumnsWrapper>
      </Center>
    </Bg>
  );
}
