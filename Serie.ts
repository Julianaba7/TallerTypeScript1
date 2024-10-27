export class Serie {

    name: string;
    id: number;
    channel: string;
    seasons: number;

    constructor(name: string, id:number ,channel:string, seasons:number){
        this.name=name;
        this.channel=channel;
        this.seasons=seasons;
        this.id=id;
    }

}