const Users = require('../models/users');
const { v4: uuidv4 } = require('uuid');
const getUsers = async (req,res,next)=>{
    const users = await Users.find();
    res.json({users});
}

const postUser =  async (req,res)=>{
    try {

        const {name,surname,country,birthday,sex,state,address} = req.body.data;

        const user = await new Users({
            name,
            surname,
            country,
            birthday:birthday.split('-').reverse().join('.'),
            sex,
            state,
            address,
            id:uuidv4()
        }).save();

        res.json({success:true ,user,message:"saved"})
    } catch (error) {
        res.json({success:false,message:error})
    }
}

const editUser = async (req,res)=>{
    try {
        const {birthday,sex,state,address,id} = req.body.data;
        const user = await Users.findOne({id});
        user.birthday = birthday.split('-').reverse().join('.');
        user.sex = sex;
        user.state = state;
        user.address = address;
        user.save()

        res.json({success:true,user,message:"saved"})
    } catch (error) {
        res.json({success:false,message:error})
    }
}

const postComment = async (req,res) =>{
    try {
        const {id,comment} = req.body
        const date = new Date().toLocaleString();
        const response = {
            date,
            comment
        }
        const user = await Users.findOne({id});
        user.comments.push(response);
        user.save();
        res.json({success:true,message:"saved"})
    } catch (error) {
        res.json({success:false,message:error})
    }
}

const deleteUser = async (req,res) =>{
    try {
        const {id} = req.body
        await Users.deleteOne({id});
        const users = await Users.find();
        res.json({success:true,users,message:"deleted"})
    } catch (error) {
        res.json({success:false,message:error})
    }
}

module.exports = {
    getUsers,
    postUser,
    editUser,
    postComment,
    deleteUser
}