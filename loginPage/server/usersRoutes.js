//creater router object
const express = require('express')
const app = express()
const userRouter = express.Router()

//to read list of users - sellers, buyers, admins
userRouter.route('/')
    .get((req, res) => { 
        const users = [
            {name: 'Mona M', id: 001},
            {name: 'Peter T', id: 002},
            {name: 'Annelise B', id: 003}
        ]
    res.sendStatuscode(200)
    res.send(`${JSON.stringify(users)}`)
    res.end()
})
    .post((req, res) => {
        res.write(`New User Created: ${newUser}`)
        res.sendStatuscode(201)
        res.end() 
    })

//to update user info
userRouter.route('/:name')
    .get((req, res) => {
        const userAccount = [{name: "This User"}]
        res.json(`Username: ${userAccount}`)
        res.sendStatus(200)
        res.end()
    })
    .put((req, res) => {
        const newName = [{name: "new name"}]
        res.json(`Updated User: ${newName}`)
        res.sendStatuscode(201)
        res.end()
    })

