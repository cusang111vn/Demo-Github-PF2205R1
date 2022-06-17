function myLetter() {
    let name = document.getElementById("name").value;
    let place = document.getElementById("place").value
    let time = document.getElementById("time")
    let content = name + "thương nhớ," + "</br>";
    let content2 = "Em không biết phải nói sao để anh hiểu rằng, em nhớ anh thật nhiều. Em yêu anh đến khi trái tim này tan thành nghìn mảnh. Tất cả những gì em yêu thương, em khát khao và cần đến, chính là anh, mãi mãi về sau. Em chỉ muốn ở bên anh, và anh yêu hỡi, em sẽ trở thành người phụ nữ như anh mong muốn." + "</br>";
    document.getElementById("result").interHTML = content + content2
}