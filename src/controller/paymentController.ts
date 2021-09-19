import { createPayment, getPaymentById } from "@db/sqlMappingfunction/payment.sql";
import { Request, Response } from "express";

export async function generatePayment(req: Request, res: Response) {
 try {
    const {userId}  = req.params;
    const address = "";

    const payment = await createPayment(userId, address);
    
    res.status(200);
    res.send({payment});
 } catch (error : any) {
    res.status(400);
    res.send({msg : error.message}); 
 }   
}

export async function getPaymentRegistered(req: Request, res: Response) {
    try {
        const {paymentId} = req.params;

        const targetPaymentId = parseInt(paymentId);

        const {address} = await getPaymentById(paymentId); 
        const isRegistered = false;
        const txid = null;
        
        res.status(200);
        res.send({isRegistered, txid});  
    } catch (error : any) {
        res.status(400);
        res.send({msg : error.message})
    }
}