const { connect } = require('mongoose')
require('dotenv').config();
const user = require('./model')
const { hash, compare } = require('bcryptjs')
const { sign } = require('jsonwebtoken')



const Dummy = (req, res) => {
  res.json({
    username: "BQ " + req.body.name
  })
}

const signup = async (req, res) => {
  const { username, email, password } = req.body
  console.log({ username, email, password })
  try {
await connect(process.env.MONGO_URI)
console.log("DB Connected")
const checkexisting =await user.exists({email: email})

      if (checkexisting) {
        res.status(208).json({
          message: "User already exists try to Sign Up with a different email address."
        })
      }

      else {
        await user.create({ username, email, password: await hash(password, 12) })
        console.log("User Created")
        res.status(201).json({
          message: "User created successfully!"
        })
      }
    }

    catch (error) {
      res.json({
        message: error.message
      })
    }


  }





const login = async (req, res) => {

  const { password, email } = req.body;


try {
  await connect(process.env.MONGO_URI)
  const checkexisting =await user.findOne({email:email})

      if (!checkexisting) {
        res.status(404).json({
          message: "User not found"
        })
      }
      else {

        const decryptpass = await compare(password, checkexisting.password)
        console.log(decryptpass)

        if (email == checkexisting.email && decryptpass) {
          const token = sign(
            {
              username: checkexisting.username,
              id: checkexisting._id,
              email: checkexisting.email,
              profile_picture: checkexisting.profilepicture,
              role: checkexisting.role
            }
            ,
            process.env.JWT_SECRET
          )

          res.status(200).json({
            message: "Successfully Signed In",
            token: token
          })
        }
        else {
          res.json({
            message: "Invalid Credentials"
          })
        }
      }
    }
    catch (error) {
      res.status(500).json({
        message: error.message
      })
    }


  }

const allUsers = async (req, res) => {
  try {
    await connect(process.env.MONGO_URI)
    const users = await user.find()
    res.json(
      {
        users: users
      }
    )

  }
  catch (error) {
    res.json(
      {
        message: error.message
      }
    )
  }
}

const getUserbyEmail = async (req,res)=>{
  const {email} = req.params.email

  try {
    await connect(process.env.MONGO_URL)
    const users = await user.findOne({email: email})
    res.json(
      {
      users: users
    }
    )
  } catch (error) {
    res.json(
     {
       message : error.message
      }
    )
  }
}

// const userbyEmail = async (req, res) => {
//   const { email } = req.query
//   try {
//     await connect(process.env.MONGO_URL)
//     const users = await user.findOne({email: email})
//     res.json(
//       {
//         users: users
//       }
//     )
//   } catch (error) {
//     res.json(
//       {
//         message: error.message
//       }
//     )
//   }
// }
//name , email , profile pic. Not Role, Password
const updateUser = async (req, res) => {
  const { username, email, profilepicture } = req.body

  const filter = { email };
  const update = { username, profilepicture };

  try {
    await connect(process.env.MONGO_URI)
    await user.findOneAndUpdate(filter, update, {
      new: true
    });

    const users = await user.find()
    res.json({
      message: "Success",
      users
    })
  }
  catch (error) {
    res.status(400).json({
      message: error.message
    })
  }
}



const deleteUser = async (req, res) => {

  const { email } = req.body

  try {
    await connect(process.env.MONGO_URI)
    await user.deleteOne({ email })
    const users = await user.find()
    res.status(200).json({
      message: "Deleted Successfully",
      users
    })
  }
  catch (error) {
    res.status(400).json({
      message: error.message
    })
  }
}



module.exports = { signup, login, Dummy, allUsers, getUserbyEmail, updateUser, deleteUser }

