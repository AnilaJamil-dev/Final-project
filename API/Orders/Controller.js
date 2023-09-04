const nodemailer = require("nodemailer");
require('dotenv').config()
var Mailgen = require('mailgen');
const { connect } = require("mongoose");
const Order = require('./Model')

const demoMail = async (req, res) => {
    const { email, customerName } = req.body;

    if (!email || !customerName) {
        res.status(403).json({ message: "please give your email" })
    }
    else {
        const config = {
            service: 'gmail',
            auth: {
                // TODO: replace `user` and `pass` values from <https://forwardemail.net>
                user: process.env.NODEMAILER_EMAIL,
                pass: process.env.NODEMAILER_PASSWORD
            }
        }
        const transporter = nodemailer.createTransport(config);

        var mailGenerator = new Mailgen({
            theme: 'default',
            product: {
                // Appears in header & footer of e-mails
                name: 'Mailgen',
                link: 'https://mailgen.js/'
                // Optional product logo
                // logo: 'https://mailgen.js/img/logo.png'
            }
        });

        var mailGenEmail = {
            body: {
                name: customerName,
                intro: 'Welcome to Mailgen! We\'re very excited to have you on board.',
                table: {
                    data: [
                        {
                            name: customerName,
                            email: customerEmail,
                            token: "2343"
                        }]
                },
                outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
            }
        };


        const response = {
            from: process.env.NODEMAILER_EMAIL, // sender address
            to: customerEmail, // list of receivers
            subject: "Order PLaced Successfully", // Subject line
            text: "Metanoia", // plain text body
            html: mailGenerator.generate(mailGenEmail), // html body
        }

        try {
            await transporter.sendMail(response);
            res.json({ message: "Check Your Email" })
        }

        catch (error) {
            res.status(500).json({ error })
        }
    }


}

const addOrders = async (req, res) => {

    const { items, totalBill, customerAddress, customerContact, billingMehtod, account, customerName, customerEmail } = req.body
    if (!items || !totalBill || !customerAddress || !customerContact || !billingMehtod || !account || !customerName || !customerEmail) {
        res.status(403).json({ message: "Invalid payload" })
    }
    else {

        try {
            await connect(process.env.MONGO_URI)
            const order = await Order.create({ items, totalBill, customerAddress, customerContact, billingMehtod, account, customerName, customerEmail })

            //EMAIL
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
                    user: process.env.NODEMAILER_EMAIL,
                    pass: process.env.NODEMAILER_PASSWORD
                }
            });

            //MAIL GEN SETUP
            var mailGenerator = new Mailgen({
                theme: 'default',
                product: {
                    // Appears in header & footer of e-mails
                    name: 'Metanoia',
                    link: 'https://mailgen.js/'
                }
            });


            await transporter.sendMail({
                from: process.env.NODEMAILER_EMAIL, // sender address
                to: customerEmail, // list of receivers
                subject: "Order PLaced Successfully", // Subject line
                text: "Metanoia", // plain text body
                html: mailGenerator.generate({
                    body: {
                        name: customerName,
                        intro: 'Thanks For Placing Order From Metanoia The Hub Of High End Watches Brands',
                        table: {
                            data: [
                                {
                                    name: customerName,
                                    email: customerEmail,
                                    TrackingId:order._id,
                                    Address: customerAddress,
                                    Contact: customerContact,
                                    Billing: billingMehtod,
                                    AccountNumber: account,
                                    // Status,
                                }]
                        },
                        outro: 'Please Make Sure That The Above Details Are Correct, Incase Of Any Mistake, You Can Contact Us.'
                    }
                }), // html body
            });

            res.status(201).json({
                message: "order placed successfully",
                TrackingId: order._id
            })

        } catch (error) {
            res.status(500).json({ message: error.message })
        }

    }
}


const orderbyId = async (req, res) => {
    const { _id } = req.params
    try {
        await connect(process.env.MONGO_URI)
        const orders = await Order.findOne({ _id })
        res.json({ orders })
    }

    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const allOrders = async (req, res) => {
    try {
        await connect(process.env.MONGO_URI)
        const orders = await Order.find()
        res.json({ orders })
    }

    catch (error) {
        res.status(500).message({ message: error })
    }
}
const updateOrder = async (req, res) => {

    const { _id, Status, Message } = req.body;

    const filter = { _id };
    const update = { Status, Message };

    try {
        await connect(process.env.MONGO_URI)
        await Order.findOneAndUpdate(filter, update, {
            new: true
        });

        const orders = await Order.find();
        res.json({
            message: "Order Updated Successfully",
            orders
        });
    }
    catch (error) {
        console.error("Error Updating Order:", error);
        res.status(500).json({ message: "Internal server error" });
    }

}

module.exports = { demoMail, addOrders, orderbyId, allOrders, updateOrder }