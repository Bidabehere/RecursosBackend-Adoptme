import { Router } from "express";
import usersController from '../controllers/users.controller.js';
import userModel from "../dao/models/User.js";
import UserDTO from "../dto/User.dto.js";
import petModel from "../dao/models/Pet.js";


const router = Router();

router.get('/',(req,res)=>{
    res.render('home');
})

router.get('/users', async (req,res)=>{
    const result = await userModel.find().lean();
    res.render('users',{users:result})
})

router.get('/pets', async (req,res)=>{
    const result = await petModel.find().lean();

    console.log(result)
    res.render('pets',{pets:result})
})

export default router;