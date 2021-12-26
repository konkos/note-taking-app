export interface JokeValue{
    error: boolean,
    category:String,
    type:String,
    setup:String,
    delivery:String,
    joke:String,
    flags:Flag,
    id:Number,
    safe:boolean,
    lang:String
}

export interface ApiResponse{
    // type: string,
    // value: JokeValue[]
    error: boolean,
    category:String,
    type:String,
    setup:String,
    delivery:String,
    joke:String,
    flags:Flag,
    id:Number,
    safe:boolean,
    lang:String
}

interface Flag{
    nsfw:boolean,
    religious:boolean,
    political:boolean,
    racist:boolean,
    sexist:boolean,
    explicit:boolean
}