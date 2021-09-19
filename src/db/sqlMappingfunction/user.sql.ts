import { User } from '@model/user';
import client, { executeQuery }  from '@db/client';

export async function generateUser(user_name:string, xpub:string){
    try{
        const {insertId: user_id} = await executeQuery(`INSERT INTO user(user_name, xpub_key) VALUES("${user_name}", "${xpub}")`);
        const user = {userId: user_id, userName: user_name, xpub};
        return user;
    } catch (error) {
        console.log(error);
    }
}

export async function getXpub(userId: number){
    try {
        const result = await executeQuery(`SELECT xpub_key FROM user WHERE user_id = ${userId}`);
        const {xpub_key} = result[0];
        return xpub_key;
    } catch (error) {
        console.log(error);
    }

}