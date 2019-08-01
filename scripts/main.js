let myImage  = document.querySelector("img");


myImage .onclick = function () {
  let mySrc = myImage .getAttribute("src");
  if (mySrc === "img/hello-girl.jpg"){
    myImage .setAttribute("src", "img/good-girl.jpg")
  } else {
    myImage .setAttribute("src", "img/hello-girl.jpg")
  }
};

function setHeading(name) {
  // document 查询选择器
  // 获取h1 标签中的内容， 并将内容和name拼接在一起
  let myHeading = document.querySelector('h1');
  myHeading.textContent = "漂亮的姑娘，" + name + ''

}
 function setUserName() {
  // prompt 提示弹窗 等待用户输入姓名
  let myName = prompt("请输入您的姓名");
  // 调用localStorage的setItem()创建name数据项，并将myName复制给name
  localStorage.setItem("name", myName);
   // 调用setHeading方法
  setHeading(myName)

 }
 // 获取浏览器中保存的name数据项
 let storeName = localStorage.getItem('name');
if (!storeName){
  setUserName();
} else {
  setHeading(storeName)
}
// 将页面中button元素的引用保存在myButton中
let myButton = document.querySelector("button");
myButton.onclick = setUserName;

