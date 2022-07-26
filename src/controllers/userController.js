
const User = require('../models/UserModel')

exports.index = (req, res) => {
  res.render('user');
};

exports.register = async function (req,res) {
  try{
    const user = new User(req.body)
    await user.register()

    if (user.errors.length > 0) {
      req.flash('errors', user.errors); 
      req.session.save(function () { 
        return res.redirect('back'); 
      });
      return;
    }
    
    req.flash('success', 'Seu usuário foi criado com sucesso.'); 
    req.session.save(function () { 
      return res.redirect('/');
    });
  } catch (e) {
    console.log(e);
    return res.render('404');
  }
}