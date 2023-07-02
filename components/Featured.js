import { styled } from "styled-components";
import Center from "./Center";
import PrimaryBtn from "./PrimaryBtn";

const Bg = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px 0;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: normal;
`;

const Description = styled.p`
  color: #aaa;
  font-size: 0.8rem;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: .8fr 1.2fr;
  gap: 40px;
  img{
    max-width:100%;
  } 
`;

const Column= styled.div`
display: flex;
align-items: center;

`;


export default function Featured() {
  return (
    <Bg>
      <Center>
        <Wrapper>
          <Column>
          <div>
            <Title>Un estilo elegante</Title>
            <Description>
              Deserunt officia amet sunt excepteur est commodo aliquip. Amet
              exercitation velit reprehenderit veniam occaecat elit aute. Ad
              proident anim ipsum irure. Eu deserunt qui ullamco ipsum duis sit.
              </Description>
              <button>Read more</button>
              <PrimaryBtn>Add to card</PrimaryBtn>
              </div>
            </Column>
          <div>
            <img src="" alt="llavero-corazon o manta"/>
          </div>
        </Wrapper>
      </Center>
    </Bg>
  );
}
