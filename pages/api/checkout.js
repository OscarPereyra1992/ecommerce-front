import { mongooseConnect } from "@/lib/mongoose";
import { Order } from "@/models/Order";
import { Product } from "@/models/Product";
const stripe = require('stripe')(process.env.STRIPE_SK);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.json("should be a POST request");
    return;
  }
  const { name, email, city, postalCode, streetAddress, country, cartProducts } =
    req.body;
  await mongooseConnect();

  const productsIds = cartProducts ;
  const uniqueIds = [...new Set(productsIds)];
  const productsInfos = await Product.find({ _id: uniqueIds });

  let line_items = productsInfos.map((productInfo) => {
    const quantity = productsIds.filter(id => id === productInfo._id.toString()).length;
    return {
      quantity,
      price_data: {
        currency: 'usd',
        product_data: { name: productInfo.title },
        unit_amount: quantity * productInfo.price * 100,
      },
    };
  });

  const orderDoc =  await Order.create({
    line_items,
    name,
    email,
    city,
    postalCode,
    streetAddress,
    country,
    paid: false,
  });

  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: 'payment',
    customer_email: email,
    success_url: process.env.PUBLIC_URL + '/cart?success=1',
    cancel_url: process.env.PUBLIC_URL + '/cart?cancel=1',
    metadata: {
        orderId: orderDoc._id.toString(), test: 'ok',
    },

  });

  res.json({
    url: session.url,
  });

}


