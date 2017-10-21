export default function parseQuery (string) {
    if (typeof string !== "string" || string.length === 0) {
        return {};
    }
    
    string = (string[0] === '?') ? string.substr(1) : string;
    string = string.replace(/\+/g, ' ');
    string = string.split("&");
    
    let stringLen = string.length;
    let query = {};
    let bit;
    let first;
    let second;
    
    for(let i = 0; i < stringLen; i++) {
        bit = string[i].split("=");
        first = bit[0];
        
        if (first.length === 0) {
            continue;
        }
        
        second = bit[1];
        
        if (typeof query[first] === "undefined") {
            query[first] = second;
        } else if (query[first] instanceof Array) {
            query[first].push(second);
        } else {
            query[first] = [query[first], second];
        }
    }
    
    return query;
}