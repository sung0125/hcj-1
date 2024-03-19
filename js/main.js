document.getElementById("time").innerHTML = new Date().toLocaleString();

function pink() {
    document.body.style.backgroundColor =
    "pink"
}

function Lightblue() {
    document.body.style.backgroundColor =
    "Lightblue"
}

function Yellow() {
    document.body.style.backgroundColor =
    "Yellow"
}

function Reset() {
    document.body.style.backgroundColor =
    "white"
}

function showhtml() {
    document.getElementById("image").src = "img/html.png"
    document.getElementById("desc").innerHTML = 
    "<b>HTML5는 </b> 콘텐츠의 구조를 정의하는 마크업 언어 입니다."
}

function showcss() {
    document.getElementById("image").src = "img/css.png"
    document.getElementById("desc").innerHTML = 
    "CSS (Cascading Style Sheets)는 웹페이지를 꾸미려고 작성하는 코드입니다."
}

function showjavascript() {
    document.getElementById("image").src = "img/js.jpg"
    document.getElementById("desc").innerHTML = 
    "JavaScript의 동적 기능에는 런타임 객체 구성, 변수 매개변수 목록, 함수 변수,"
}

function hide() {
    document.getElementById("image").src = ""
    document.getElementById("desc").innerHTML = 
    ""
}