import { payment } from './../model/payment';
import { createPayment, getPaymentById, getXpubIndex } from "@db/sqlMappingfunction/payment.sql";
import { getAddress } from "@src/bitcoinAddress/function/getAddress";
import { getXpub } from "@src/db/sqlMappingfunction/user.sql";
import { Request, Response } from "express";

export async function generatePayment(req: Request, res: Response) {
 try {
    const {userId}  = req.body;
    const xpub = await getXpub(userId);
    const index = await getXpubIndex(userId);
    const address = getAddress(xpub,index);

    if(address == "") throw new Error("Address를 만드는데 실패했습니다.");

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