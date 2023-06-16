const express = require('express')

const routes = express.Router();
const users = [{
    id: 1,
    name: "John",
    email: "teste@teste.com",
    password: "123456789"
}]

routes.post('/login', (req, res) => {
    const {email, password} = req.body;

    const user = users.find(user => user.email === email && user.password === password)
   if (user){
    return res.status(200).json(user);
   }
   return res.status(401).json({ message: "Invalid credentials"})

   // res.send('Login endpoint');
})

module.exports = routes;