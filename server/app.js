const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51OlpnYSG3OA5HLCLuSBzRxQnofnF8A40PQ2q2Ad69co3d8gXzQmfc2UP4vPgz79yxelyInfFuHw39gxE8ytISHsK00SjQoi55a");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/api/create-checkout-session", async (req, res) => {
    const { products } = req.body;


    const lineItems = products.map((product) => ({
        price_data: {
            currency: "inr",
            product_data: {
                name: product.rname,
                images: [product.imgdata]
            },
            unit_amount: product.price * 100,
        },
        quantity: product.qnty
    }));

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: lineItems,
        mode: "payment",
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel",
    });

    res.json({ id: session.id })
});

app.listen(7000, () => {
    console.log("Server started on port 7000");
});
