const mobile = {
    brand : "Xiaomi",
    price : 13000 ,
    color : "black" ,
    camera : "13mpx" ,
    isNew : false 
}

console.log(mobile)

for(const key in mobile){
    console.log(key +  " : "  + mobile[key])
}