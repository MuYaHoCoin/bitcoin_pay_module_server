import { generateUser } from "@db/sqlMappingfunction/user.sql";
import { Request, Response } from "express";

export async function createUser(req: Request, res: Response) {
    try {
        console.dir(req.body);
        const {userName, xpub} = req.body   ;
        const user = await generateUser(userName,xpub);

        res.status(200);
        res.send({user});
    } catch (error: any) {
        res.status(400);
        res.send({msg : error.message})
    }   
}
