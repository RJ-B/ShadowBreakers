<<<<<<< HEAD
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { userRequest } from "../requestMethods";

const Success = () => {
    const location = useLocation();
    const data = location.state.stripeData;
    const cart = location.state.cart;
    const currentUser = useSelector((state) => state.user.currentUser);
    const [orderId, setOrderId] = useState(null);
    
    useEffect(() => {
        const createOrder = async () => {
            try {
                const res = await userRequest.post("/orders", {
                    userId: currentUser._id,
                    products: cart.products.map((item) => ({
                        productId: item._id,
                        quantity: item._quantity,
                    })),
                    amount: cart.total,
                    address: data.billing_details.address,
        });
        setOrderId(res.data._id);
        } catch {}
    };
    data && createOrder();
}, [cart, data, currentUser]);
return (
    <div style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    }}>
        {orderId
        ? `Objednávka byla uspěšná. Číslo Vaší objednávky je${orderId}`
        : `Objednávka byla uspěšná, čekání na vyřízení...`}
        <button style={{ padding: 10, marginTop: 20 }}>Jít na domovskou stránku</button>
    </div>
    );
};

=======
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { userRequest } from "../requestMethods";

const Success = () => {
    const location = useLocation();
    const data = location.state.stripeData;
    const cart = location.state.cart;
    const currentUser = useSelector((state) => state.user.currentUser);
    const [orderId, setOrderId] = useState(null);
    
    useEffect(() => {
        const createOrder = async () => {
            try {
                const res = await userRequest.post("/orders", {
                    userId: currentUser._id,
                    products: cart.products.map((item) => ({
                        productId: item._id,
                        quantity: item._quantity,
                    })),
                    amount: cart.total,
                    address: data.billing_details.address,
        });
        setOrderId(res.data._id);
        } catch {}
    };
    data && createOrder();
}, [cart, data, currentUser]);
return (
    <div style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    }}>
        {orderId
        ? `Objednávka byla uspěšná. Číslo Vaší objednávky je${orderId}`
        : `Objednávka byla uspěšná, čekání na vyřízení...`}
        <button style={{ padding: 10, marginTop: 20 }}>Jít na domovskou stránku</button>
    </div>
    );
};

>>>>>>> a2ab1112518d39227690f560726fa6511a2eee7d
export default Success;