const express=require('express');
const route=express.Router();
const articleServices= require('../../services/articles.service');
const userCtrl = require('../../services/user.service.js');

route.get('/',async (req,res)=>{
    let articles=await articleServices.getAllArticles();
    res.render('accueil', {articles});
})

// CHEMIN D'AUTHENTIFICATION
route.get('/signup',(req, res, next)=>{
    res.render('pages/signup');
    next;
})
route.post('/signup',userCtrl.signup);

// CHEMIN DE CONNEXION
route.get('/login',(req,res,next)=>{
    res.render('pages/login');
})
route.post('/login',userCtrl.login);
route.get('/login',(req,res,next)=>{
    res.render('accueil');
})

//CHEMIN POUR LES SERVICE ARTICLE
route.get('/article',async (req,res)=>{
    let articles=await articleServices.getAllArticles();
    res.render('pages/article',{articles});
})
route.post('/article', articleServices.saveArticle);

//A PROPOS
route.get('/apropos',(req,res)=>{
    res.render('pages/apropos');
})
//CONTACT
route.get('/contact',async (req,res)=>{
    res.render('pages/contact');
});

module.exports=route;
