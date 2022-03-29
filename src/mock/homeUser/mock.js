let Mock = require("mockjs")
let data = [
    { id: 0, name: "鸡", text: "鸡你太美" ,texta:1111},
    { id: 1, name: "鸡1", text: "鸡你太美1",texta:2222 },
    { id: 2, name: "鸡2", text: "鸡你太美2",texta:3333 },
    { id: 3, name: "鸡3", text: "鸡你太美3",texta:4444 },
    { id: 4, name: "鸡4", text: "鸡你太美4",texta:5555 },
    { id: 5, name: "鸡4", text: "鸡你太美4",texta:6666 },
    { id: 6, name: "鸡4", text: "鸡你太美4",texta:7777 },
    { id: 7, name: "鸡4", text: "鸡你太美4",texta:8888 },
    { id: 8, name: "鸡4", text: "鸡你太美4",texta:9999 },
    { id: 9, name: "鸡4", text: "鸡你太美4",texta:100101010 },
    { id: 10, name: "鸡4", text: "鸡你太美4",texta:11111111 }

]
Mock.mock("/api/homeUser", "get", function (config) {
    console.log(config)
    return data
})
// 删除
Mock.mock(/\/api\/homeUser\/\d/, "delete", function (config) {
    console.log(config.url)
    let arr = config.url.split("/")
    let id = arr.pop()
    data.splice(id, 1)
    data=data.map(function(item,id){
        return{
            id,
            name:item.name,
            text:item.text,
            texta:item.texta
        }
    })
    // data.forEach(function(item,index){
    //     item.id=index
    // })
    return data
})
// 修改
Mock.mock(/\/api\/homeUser\/edit\/\d/, "put", function (config) {
    let arr = config.url.split("/")
    let id = arr.pop() //获取id
    let canshu = config.body //string
    canshu = JSON.parse(canshu) //obj
    console.log("canshu",canshu)
    data[id].name = canshu.name
    data[id].text = canshu.text
    data[id].texta = canshu.texta
    console.log(config.url)
    return data

})
// 添加
Mock.mock("/api/homeUser","post",function(config){
    // console.log("添加",config)
    let obj=JSON.parse(config.body)
    let name=obj.name
    let text=obj.text
    let texta=obj.texta
    // 数组凹陷的解决方案

    data.push({id:data.length,name,text,texta})
    return data
})