題目
let pets = [
    {
	name: '雪納瑞',
	age: 70,
	sex: 0,
	breed: '樂天'
    },
    {
	name: '柴犬',
	age: 3,
	sex: 1,
	breed: '黑龍丸'
    },
    {
	name: '臘腸狗',
	age: 60,
	sex: 0,
	breed: '庫伯'
    },
    {
	name: '烏鴉',
	age: 2,
	sex: 1,
	breed: '托里'
    },
    {
	name: '邊境牧羊犬',
	age: 1,
	sex: 0,
	breed: '葉子'
    },
    {
	name: '迷你馬',
	age: 1,
	sex: 1,
	breed: '小馬哥'
    },
    {
	name: '卡羅萊納箱龜',
	age: 23,
	sex: 1,
	breed: '龜仙'
    },
    {
	name: '法國鬥牛犬',
	age: 4,
	sex: 1,
	breed: 'isuzu' // isuzu(五十鈴)是貨車品牌
    },
    {
	name: '白文鳥',
	age: 20,
	sex: 1,
	breed: '伊麗莎白'
    },
]

解:
function swap (object,key1,key2){
    let tmp=object[key1]
    object[key1]=object[key2]
    object[key2]=tmp
    return object
  }
// 
pets.map(pet=>{
    return swap(pet,'name','breed')
})

// 
pets.map(pet=>{
    if (pet.age>30 && pet.age%10==0){
    pet.age/=10
}
    return swap(pet,'name','breed')
})
// 因為白文鳥20歲(寫錯)，所以判斷式改成年齡大於10
pets.map(pet=>{
    if (pet.age>10 && pet.age%10==0){
    pet.age/=10
}
    return swap(pet,'name','breed')
})
// 直接使用OBJECT會有問題，需要另外複製OBJECT，不複製會修改PETs的值
pets.map(pet=>{
    if (pet.age>10 && pet.age%10==0){
    pet.age/=10
    if (pet.sex===1){console.log(pet)}
    else{pet.sex=1}
      
}
    return swap(pet,'name','breed')
})

pets.map(pet=>{
    let clonePet = Object.assign({}, pet)
    if (clonePet.age>10 && clonePet.age%10==0){
        clonePet.age = clonePet.age / 10
        if (clonePet.sex === 1){
            clonePet.sex = 0
        }
        else{
            clonePet.sex=1
        }
    
}
    return swap(clonePet,'name','breed')
})