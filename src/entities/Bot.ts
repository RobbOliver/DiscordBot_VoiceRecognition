import { Dictionary } from "../repositories/Dictionary";
import { OPMaster } from "../repositories/OPMasterName";

export class Bot {
    

    public readonly id: string;

    public name: string;
    public master: Dictionary<OPMaster>;                // For a future feature the BOT can be managed by N users 
    public serverName: string;                
    public roleOnServer: Array<string>


    constructor(props: Omit<Bot, 'id'>, id?: string){

    }

}

