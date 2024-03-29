const router = require('express').Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const JWT_SECRET = "jwtsupersecret";

mongoose.connect('mongodb+srv://joelwalice:Joel19leema!@clusters.0xolofw.mongodb.net/?retryWrites=true&w=majority&appName=Clusters')


router.get('/', (req, res) => {
    return res.json('Hello World');
});

router.post('/login', async (req, res) => {
    const { email, password, role } = req.body;
    const user = await adminModel.findOne({ email });
    if (!user) {
        return res.status(401).send({ status: "User Not exists" });
    }
    if (!user.role.includes(role)) {
        return res.status(401).send({ status: "Role not authorized" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(401).send({ status: "Invalid Credentials" });
    }
    const token = jwt.sign({ email: user.email, role: user.role }, JWT_SECRET);
    return res.status(201).send({
        status: "Success", data: {
            token,
            name: user.name,
            role: user.role,
            email: user.email,
        }
    });
});

router.post('/register', async (req, res) => {
    const { name, email, password, role } = req.body;
    
    const epassw =  password; //await bcrypt.hash(password, 10);
    try {
        const user = await adminModel.findOne({ email });
        if (user) {
            return res.send({ Status: "User already exists" });
        }

        const data = await adminModel.create({ name, email, password: epassw, role })
        res.send({ Status: "Success", data: data });
    }
    catch (err) {
        res.send({ Status: "Error" });
    }
});


router.get('/user', async (req, res) => {
    const { token } = req.body;
    try {
        const user = jwt.verify(token, JWT_SECRET);
        const userData = await adminModel.findOne({ email: user.email });
        if (userData) {
            return res.send({ Status: "Success", data: userData });
        } else {
            return res.send({ Status: "error", data: "User not found" });
        }
    } catch (err) {
        console.log(err);
        return res.send({ Status: "error", data: "Invalid token" });
    }
});


module.exports = router;