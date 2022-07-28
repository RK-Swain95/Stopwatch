var hour=0;
var min=0;
var sec=0;
var last=0;
var timer=false;
var buttons=document.querySelectorAll('button');
buttons.forEach(function(btn){
    btn.addEventListener("click", function (e) {
        // console.log(e.currentTarget.dataset);
        var category = e.currentTarget.id;
        console.log(category);
        if(category=='start'){
            timer=true;
          stopwatch();
        }else if(category=='stop'){
            timer=false;

        }else{
            timer=false;
            hour=0;
            min=0;
            sec=0;
            last=0;
            document.getElementById("hour").innerHTML="00";
        document.getElementById("min").innerHTML="00";
        document.getElementById("sec").innerHTML="00";
        document.getElementById("last").innerHTML="00";

        }


})
});
function stopwatch(){
    if(timer==true){
        last++;
        if(last==100){
            sec++;
            last=0;
        }
        if(sec==60){
            min++;
            sec=0;
        }
        if(min==60){
            hour++;
            min=0;
            sec=0;
        }
        if(hour===24){
            timer=false;
            hour=0;
            min=0;
            sec=0;
            last=0;
            document.getElementById("hour").innerHTML="00";
        document.getElementById("min").innerHTML="00";
        document.getElementById("sec").innerHTML="00";
        document.getElementById("last").innerHTML="00";

        }
        var newhour=hour;
        var newmin=min;
        var newsec=sec;
        var newlast=last;
        if(hour<10){
            newhour="0"+newhour;
        }
        if(min<10){
            newmin="0"+newmin;
        }
        if(sec<10){
            newsec="0"+newsec;
        }
        if(last<10){
            newlast="0"+newlast;
        }

        document.getElementById("hour").innerHTML=newhour;
        document.getElementById("min").innerHTML=newmin;
        document.getElementById("sec").innerHTML=newsec;
        document.getElementById("last").innerHTML=newlast;
        setTimeout("stopwatch()",10);
    }
}