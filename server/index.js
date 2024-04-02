const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bcrypt = require('bcrypt');
const next = require('next')
const dev = process.env.NODE_ENV !== 'production';
const JWT_SECRET = "jwtsupersecret";

const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

const adminModel = require('./models/admin-data');
const startupModel = require('./models/startup-data')

mongoose.connect('mongodb+srv://joelwalice:Joel19leema!@clusters.0xolofw.mongodb.net/?retryWrites=true&w=majority&appName=Clusters')


 const app = express(); 
 app.use(cors()); 
 app.use(express.json());

  app.get('/', (req, res) => {
    return res.json('Hello World');
  });

  app.post('/admin/login', async (req, res) => {
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
    const token = jwt.sign({ email: user.email, role: user.role}, JWT_SECRET);
    return res.status(201).send({ status: "Success", data: {
        token,
        name: user.name,
        role: user.role,
        email: user.email,
        new : user.new,
    }});
});

  app.post('/admin/register', async (req, res) => {
    const {name, email, password, role} = req.body;
    const epassw = await bcrypt.hash(password, 10);
    try{
        const user = await adminModel.findOne({email});
        if(user){
            return res.send({Status: "User already exists"});
        }

        const data = await adminModel.create({name, email, password:epassw, role})
        res.send({Status: "Success", data:data});
    }
    catch(err){
        res.send({Status: "Error"});
    }
  });
  
  app.post('/admin/startup', async(req,res) => {
    const {sname, domain,oneline,fundstatus, desc, futureplan, revenue, website, linkedIn, size, fname, phone, email, linkedin, college, dept, year} = req.body
    const data = await startupModel.create({sname, domain,oneline,fundstatus, desc, futureplan, revenue, website, linkedIn, size, fname, phone, email, linkedin, college, dept, year})
    res.send({Status : "Success", data:data})
  })

  app.get('/admin/user', async (req, res) => {
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

  app.all('*', (req, res) => {
    return handle(req, res);  // all other requests be handled by Next.js
  });

  app.listen(1337, () => {
    console.log('Server is running on port 1337');
  });

