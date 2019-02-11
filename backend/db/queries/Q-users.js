const {db} = require("./index.js");

// Show all users
const getAllUsers = (req, res, next) => {
    db.any('SELECT * FROM users')
    .then((users) => {
        res.status(200).json({
          status: 'Success',
          message: 'Retrieving all users',
          body: users
        })
    }).catch(err => {
        console.log("Error retrieving users: ", err)
        return next(err)
    })
};
// Show one user
const getSingleUser = (req, res, next) => {
    const userId = Number(req.params.id);
    db.one('SELECT * FROM users WHERE id=$1', [userId])
    .then((user)=> {
        res.status(200).json({
            status: 'Success',
            message: 'Retrieving one User',
            body: user
        })
    }).catch(err => {
        console.log("Error retrieving a single user: ", err)
        return next(err)
    })
}
// PATCH /users/:id:  Edit a user
const updateUser = (req, res, next) => {
    db.none('UPDATE users SET id=${id}, username=${username}, email=${email}, phone_number=${phone_number}', {
        id: Number(req.body.species_id),
        username: req.body.username,
        email: req.body.email,
        phone_number: req.body.phone_number
    })
    .then(() => {
        res.status(200).json({
            status: 'Success',
            message: 'Updated single User'
        })
    }).catch(err => {
        console.log("Error updating a user: ", err)
        return next(err)
    })
}
// POST /users: Add a new user
const addUser = (req, res, next) => {
    db.none('INSERT INTO users(id, username, email, phone_number) VALUES(${id}, ${username}, ${email}, ${phone_number}, req.body)', req.body)
    .then(() => {
        res.status(200).json({
            status: 'Success',
            message: 'New user added'
        })
    }).catch(err => {
        console.log("Error adding a new user: ", err)
        return next(err)
    })
}

module.exports = { getSingleUser, getSingleUser, updateUser, addUser}