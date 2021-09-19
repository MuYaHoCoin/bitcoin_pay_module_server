import { generatePayment, getPaymentRegistered } from "@src/controller/paymentController";
import { createUser } from "@src/controller/userController";
import { Router } from "express";

const router : Router = Router();
router.get('/test',(req,res)=> res.send('hey'))

// user Router
router.post('/user/create',createUser);

//paymentRouter
router.post('/payment/create',generatePayment)
router.get('/payment/paymentId/:paymentId',getPaymentRegistered);

export default router;