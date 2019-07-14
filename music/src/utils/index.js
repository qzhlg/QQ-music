export function getSesstion(key,value){
    return window.sessionStorage.getItem(key)
}
export function setSesstion(key,value){
    if(getSesstion(key)===undefined){
        return ""
    }
    return window.sessionStorage.setItem(key,value)
}