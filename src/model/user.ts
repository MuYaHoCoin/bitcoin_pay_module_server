import internal from "stream";

export interface User {
    user_id: number;
    user_name: string;
    xpub: string;
}
export class User{
    public user_id: number;
    public user_name: string;
    public xpub: string;

    constructor(user_id : number, user_name : string, xpub : string){
        this.user_id = user_id
        this.user_name = user_name;
        this.xpub = xpub;
    }
}