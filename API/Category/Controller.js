const Category = require('./Model')
const {connect} = require('mongoose')
require('dotenv').config()

const getAllCategories= async (req, res) => {
  try {
    await connect(process.env.MONGO_URI)
    const allCategories = await Category.find()
    res.json({
      categories :allCategories
    })
  }
   catch (error) {
    res.status(400).json({
      message: error.message
    })
  }
    
  }

const getCategoryByID = async (req,res) => {

const {_id} = req.params

  try {
    await connect(process.env.MONGO_URI)
    const category = await Category.findOne({_id})
    res.json({category})
  } catch (error) {
    res.status(400).json({
      message: error.message
    })
  }
}
const createCategory = async(req,res) => {
  const{CategoryName , CategoryImage} = req.body

  if (!CategoryName || !CategoryImage) {
    res.status(403).json({
      message : "Missing Required Field"
    })
  }
   else {
    try {
      await connect(process.env.MONGO_URI)
      const checkExisting = await Category.exists({CategoryName:CategoryName })
  
    if (checkExisting) {
      res.status(400).json({
        message: "Category Already Exists"
      })
    } else {
      await Category.create({CategoryName , CategoryImage})
      const categories = await Category.find()
      
      res.json({
        message:"Category Created Successfully",
        categories
      })
    }  }

     catch (error) {
      res.status(400).json({
        message:error.message
      })
    }
  }
}


const updateCategory = async (req, res) => {
  const {_id, CategoryName, CategoryImage} = req.body

  const filter = {_id};
  const update = {CategoryName, CategoryImage};

  try {
    await connect (process.env.MONGO_URI)
    await Category.findOneAndUpdate(filter, update,{
      new:true
    });
   
    const category = await Category.find()
    res.json({
      message:"Success",
      category
    })
  } 
  catch (error) {
    res.status(400).json({
    message: error.message
   })
  }
}


const deleteCategory = async (req,res) =>{
  
  const {_id} = req.params

try {
  await connect (process.env.MONGO_URI)
  await Category.deleteOne({_id})
  const category = await Category.find()
  res.status(200).json({
    message: "Deleted Successfully",
    category
  })
}
 catch (error) {
  res.status(400).json({
   message: error.message
    })
}
}

const CategorybyName = async (req, res) => {
      const { name } = req.query;
  
  
      try {
          await connect(process.env.MONGO_URI)
          const category = await Category.findOne({ CategoryName: name })
          res.json({
              category: category
          })
      }
  
      catch (error) {
          res.json({
              message: error.message
          })
  
      }
  
  }
  



  module.exports = {getAllCategories,getCategoryByID,createCategory,updateCategory,deleteCategory,CategorybyName}

