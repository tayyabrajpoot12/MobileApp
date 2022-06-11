let express = require('express');
let Users = require('./model/user')
let mongoose = require('mongoose');

let app = express();

app.use(express.json());


mongoose.connect('mongodb://localhost:27017/mobileApp', (err, connection) => {
    console.log(err || connection);
})



app.post('/auth/signup', async (req, res) => {

    try {
        let newUser = new Users(req.body);
        await newUser.save();
    } catch (e) {
        res.json({
            success: true,
        })
    }
})



app.post('/auth/login', async (req, res) => {

    try {

        let userFound = await Users.findOne({
            Password: req.body.Password,
            Email: req.body.Email,

        });

        if (userFound) {

            res.json({ userFound })

        } else {
            res.json(null)
        }
    } catch (e) {
        res.json({
            userFound,
        })
    }
});








app.listen(9192, () => {
    console.log('server in working on Port 9192');
})