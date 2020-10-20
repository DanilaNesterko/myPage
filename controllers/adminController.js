const Person = require('../models/person');

exports.getAdminPage= (req, res)=>{
    res.render('admin.ejs');
}

exports.saveUserData = (req, res) =>{
    console.log(req.body);
    let user ={
        firstName: req.body.fn,
        lastName: req.body.ln
    }

    const person = new Person(user);
    person.saveData();
    res.redirect('/admin');
}