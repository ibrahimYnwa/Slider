$(document).ready(function(){

 let length=$(".images").children().length;
 $(".images").width(`${length*100}%`)

 let width=$(".images").width();

 $(".images .item").width(`${width/length}`)

let count=0;
$(".right").click(RightClick);

let interval=setInterval(RightClick,3000)

$(".left").click(function(){
    count--;
    if (count>=0) {
        $(".images").animate({
            "margin-left":`-${count*100}%`
        })
    }
    else{
        count=length-1;
        $(".images").animate({
            "margin-left":`-${count*100}%`
        })
    }
});


function RightClick(){
    count++;
    if (count<=length-1) {
        $(".images").animate({
            "margin-left":`-${count*100}%`
        })
    }
    else{
        count=0;
        $(".images").animate({
            "margin-left":`-${count*100}%`
        })
    }
}

$(document).on("mouseenter",".right",function(){
    clearInterval(interval)
});

$(document).on("mouseleave",".right",function(){
    setInterval(RightClick,3000)
});




})