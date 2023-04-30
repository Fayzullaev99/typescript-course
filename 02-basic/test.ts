const serverConfig1 = {
    protocol:'https', 
    port:3001,
    role:"admin",
    log:(msg:string):void => console.log(msg)
    
}
const backupConfig1 = {
    protocol:'https', 
    port:3001,
    log:(msg:string):void => console.log(msg)
}
interface BasicConfig {
    protocol:string,
    port:number
}
const serve1 = (config:BasicConfig):'Server started'=> {
    console.log(`Server started on ${config.protocol}://server:${config.port}`);
    
    return 'Server started'
}
serve1(serverConfig1)
serve1(backupConfig1)