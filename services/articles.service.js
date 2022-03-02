const mongoose=require('mongoose')
const Article=require('../datalayer/article.model');

const getAllArticles= async ()=>{
    let articles = await Article.find();
    return articles;
}

const saveArticle = async (req, res, next)=>{
    delete req.body._id;
    const article = {
      ...req.body
    };
    Article.create(article)
      .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
      .catch(error => res.status(400).json({ error }));
  };

module.exports={
    getAllArticles,
    saveArticle
}

