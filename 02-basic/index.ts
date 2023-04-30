// type Config = {protocol:'http' | 'https', port:3000 | 3001}
interface Config {
    protocol:'http' | 'https', 
    port:3000 | 3001,
    log:(msg:string)=>void
}
// type Role = {
//     role:string
// }
interface Role {
    role:string
}
interface ConfigWithRole extends Config, Role{}
const serverConfig:ConfigWithRole = {
    protocol:'https', 
    port:3001,
    role:"admin",
    log:(msg:string):void => console.log(msg)
    
}
const backupConfig:Config = {
    protocol:'https', 
    port:3001,
    log:(msg:string):void => console.log(msg)
}

type ServeType = (protocol:'http' | 'https', port:3000 | 3001, log:Function) => string
const serve:ServeType = (
    protocol:'http' | 'https', port:3000 | 3001, log:Function):'Server started'=> {
    log(`Server started on ${protocol}://server:${port}`);
    
    return 'Server started'
}
serve(serverConfig.protocol,serverConfig.port, serverConfig.log)


interface Styles {
    [key:string]:string
}

const styles:Styles = {
    position: 'absolute'
}