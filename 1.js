function getObjectProps(obj){
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            console.log(`key: ${key}, value: ${obj[key]}`);
        }
    }
}

