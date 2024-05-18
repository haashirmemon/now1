var italic = document.getElementById("italic")
var bold = document.getElementById("bold")
var heading =document.getElementById("heading")
// var select = document.getElementById("select")
var para = document.getElementById("para")
var under = document.getElementById("underline")
var sub = document.getElementById("subheading")
italic.addEventListener("click",function () {
      para.style.fontStyle="italic"
    para.style.border="1px solid red"
    
})
bold.addEventListener("click",function () {
    para.style.border ="1px solid yellow"
    para.style.fontWeight ="bold"
})
    under.addEventListener("click", function () {
        para.style.textDecoration ="underline"
    })

    function changeFunc() {
        var selectBox = document.getElementById("select");
        var selectedValue = selectBox.options[selectBox.selectedIndex].value;

        heading.addEventListener('click',function () {
            // console.log('heading',heading);
                    para.style.fontSize="24px"
                })
                sub.addEventListener("click", function () {
                    para.style.fontSize = "18px"
                })
       }



