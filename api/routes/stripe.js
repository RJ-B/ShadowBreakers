<<<<<<< HEAD
const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);

router.post("/payment", (req, res) => {
    stripe.charges.create(
        {   source: req.body.tokenId,
            amount: req.body.amount,
            currency: "CZK",
        },
        (stripeErr, stripeRes) => {
            if (stripeErr) {
                res.status(500).json(stripeErr);
            } else {
                res.status(200).json(stripeRes);
            }
        }
        );
});

module.exports = router;
=======
const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);

router.post("/payment", (req, res) => {
    stripe.charges.create(
        {   source: req.body.tokenId,
            amount: req.body.amount,
            currency: "CZK",
        },
        (stripeErr, stripeRes) => {
            if (stripeErr) {
                res.status(500).json(stripeErr);
            } else {
                res.status(200).json(stripeRes);
            }
        }
        );
});

module.exports = router;
>>>>>>> a2ab1112518d39227690f560726fa6511a2eee7d
