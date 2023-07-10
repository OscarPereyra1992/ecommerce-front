import Button from "@/components/Button";
import CartContext from "@/components/CartContext";
import Center from "@/components/Center";
import Header from "@/components/Header";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { styled } from "styled-components";
import Table from "@/components/Table";

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 40px;
  margin-top: 40px;
`;

const Box = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
`;

const ProductInfoCell = styled.td`
    padding: 10px 0;
    
`;

const ProductImageBox= styled.div`
    width: 100px;
    height: 100px;
    padding: 10px;
    border: 1px solid rgba(0,0,0,0.1);
    display:flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    img{
    max-width: 80px;
    max-height: 80px;
}
`;

const QuantityLabel= styled.span`
    padding: 0 15px;
`;

export default function CartPage() {
  const { cartProducts, addProduct } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    console.log(products);
    if (cartProducts.length > 0) {
      axios.post("/api/cart", { ids: cartProducts }).then((response) => {
        setProducts(response.data);
      });
    }
  }, [cartProducts]);

  function moreOfThisProduct(id){
    addProduct(id);
  }

  function lessOfThisProduct(id){
    
  }
  return (
    <>
      <Header />
      <Center>
        <ColumnsWrapper>
          <Box>
            <h2>Carrito</h2>
            {!cartProducts?.length && <div>Tu carrito esta vació</div>}
            {products?.length > 0 && (
              <Table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Cantidad</th>
                    <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {products.map((product) => (
                          <tr key={product._id}>
                            <ProductInfoCell>
                            <ProductImageBox>
                            <img src={product.images[0]} alt="" />
                            </ProductImageBox>
                                
                                {product.title}
                            </ProductInfoCell>
                            <td>
                                <Button onClick={()=> lessOfThisProduct(product._id)}>-</Button>
                                <QuantityLabel>
                                {cartProducts.filter((id) => id === product._id).length}
                                </QuantityLabel>
                            
                            <Button 
                            onClick={()=> moreOfThisProduct(product._id)}>+
                            </Button>
                            </td>
                           <td>
                            ${cartProducts.filter((id) => id === product._id).length * product.price}
                           </td>
                          </tr>
                        ))}
                      </tbody>
                  </Table>
            )}
          </Box>
          {!!cartProducts?.length && (
            <Box>
              <h2>Información de su orden</h2>
              <input type="text" placeholder="Nombre"></input>
              <input type="text" placeholder="Dirección"></input>
              <Button black={1} block={1}>
                Ir a pagar
              </Button>
            </Box>
          )}
        </ColumnsWrapper>
      </Center>
    </>
  );
}
