let test ="test1";
let test1 = {
    "hello":"world"
} 
let test3 = [1,2,3,4,5,6];

function chechObject(item){

    console.log(Object.prototype.toString.call(item));
    let item = bject.prototype.toString.call(item);
    switch (item) {
        case '[object String]':
            return String
            break;
        case '[object Array]':
                return Array
                break;
        case '[object Array]':
                return Array
                break;
        default:
            break;
    }
    
}

chechObject(test)
chechObject(test1)
chechObject(test3)