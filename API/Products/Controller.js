const Product = require('./model')
const { connect } = require('mongoose')
require('dotenv').config()

const getAllProducts = async (req, res) => {
  try {
    await connect(process.env.MONGO_URI)
    const allProducts = await Product.find()
    res.json({
      products: allProducts
    })
  }
  catch (error) {
    res.status(400).json({
      message: error.message
    })
  }

}

const getProductByID = async (req, res) => {

  const { _id } = req.params;
  if (!_id) {
    res.status(403).json({ message: "Please Give Product id" })
  }
  else {
    await connect(process.env.MONGO_URI)
    const product = await Product.findOne({ _id })
    res.json({ product })
  }
}

//   const getProductById = async (req, res) => {
//     const { _id } = req.query;

//     try {
//         await connect(process.env.MONGODB_URL);
//         const product = await Product.findById(_id);

//         if (!product) {
//             return res.status(404).json({
//                 message: 'Product not found'
//             });
//         }

//         res.json({
//             product: product
//         });
//     } catch (error) {
//         res.status(500).json({
//             message: error.message
//         });
//     }
// };

const getProductByBrand = async (req, res) => {

  const { brand } = req.params
  if (!brand) {
    res.status(403).json({ message: "Please Give BrandName" })

  } else {
    await connect(process.env.MONGO_URI)
    const product = await Product.find({ brand })
    res.json({ product })
  }
}

const getProductByCategory = async (req, res) => {

  const { category } = req.params
  if (!category) {
    res.status(403).json({ message: "Please Give Category Name" })
  }
  else {
    await connect(process.env.MONGO_URI)
    const product = await Product.find({ category })
    res.json({ product })
  }
}
const createProduct = async (req, res) => {
  const { productName, description, price, brand, category, thumbnail, images } = req.body

  if (!productName || !thumbnail || !description || !price || !category || !brand || !images) {
    res.status(403).json({
      message: "Missing Required Field"
    })
  }
  else {
    try {
      await connect(process.env.MONGO_URI)
      const checkExisting = await Product.exists({ productName })

      if (checkExisting) {
        res.status(400).json({
          message: "Product Already Exists"
        })
      } else {
        await Product.create({ productName, thumbnail, description, price, brand, category, images })
        const allProducts = await Product.find()

        res.json({
          message: "DB Connected",
          product: allProducts
        })
      }
    }

    catch (error) {
      res.status(400).json({
        message: error.message
      })
    }
  }
}


const updateProduct = async (req, res) => {
  const { _id, productName, thumbnail, description, price, brand, category, images } = req.body

  const filter = { _id };
  const update = { productName, thumbnail, description, price, brand, category, images };

  try {
    await connect(process.env.MONGO_URI)
    await Product.findOneAndUpdate(filter, update, {
      new: true
    });

    const product = await Product.find()
    res.json({
      message: "Success",
      product
    })
  }
  catch (error) {
    res.status(400).json({
      message: error.message
    })
  }
}


const deleteProduct = async (req, res) => {

  const { _id } = req.params
  if (!_id) {
    res.status(403).json({ message: "Please Give Product id" })
  }
  else {
    await connect(process.env.MONGO_URI)
    await Product.deleteOne({ _id })
    const product = await Product.find()
    res.json({ message: "Deleted Successfully", product })
  }
}




module.exports = { getAllProducts, getProductByID, getProductByBrand, getProductByCategory, createProduct, updateProduct, deleteProduct }