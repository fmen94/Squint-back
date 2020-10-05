export const parseResponse = (json,firstLevel=false) => {
    if(firstLevel){
        for(let attr in json){
            json[attr] = parseResponse(json[attr],false);
        }
    }else{
        for(let attr in json){
            switch (attr) {
                case 'N':
                    json = Number(json[attr]);
                    break;
                case 'S':
                    json = String(json[attr]);
                    break;
                case 'NULL':
                    json = null;
                    break;
                case 'BOOL':
                    json = Boolean(json[attr]);
                    break;
                case 'M':
                    json = parseResponse(json[attr],true);
                    break;
                case 'L':
                    let arr = [];
                    for(let i in json[attr]){
                        let value = json[attr][i];
                        arr.push(parseResponse(value))
                    }
                    json = arr;
                    break;
                default:
                    break;
            }
        }
    }
    return json;
}