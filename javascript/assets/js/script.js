//결과보기 버튼을 클릭하면 경고창을 띄워주세요~
document.querySelectorAll(".result").forEach(function(el){
    el.addEventListener("click", function(){
       document.querySelectorAll(".result").forEach(function(el){
           el.classList.toggle("click");
       })
    })
});
//toggle써야됨

// document.querySelector(".result").addEventListener("click", () => {});