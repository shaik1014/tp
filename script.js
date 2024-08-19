window.addEventListener('load', function() {
    document.getElementById('logo').style.display='none'
    document.getElementById('loader-text').style.display='none'
    document.getElementById('loader').style.display = 'none';
    document.getElementById('content').style.display = 'block';
})



function btn0(){
    document.getElementById("btn0").style.display='none'

    document.getElementById("btn1").style.display='block'

    document.getElementById("btn2").style.display='block'

    document.getElementById("btn3").style.display='block'

    document.getElementById("btn4").style.display='block'

}

function btn1(){

    document.getElementById("btn0").style.display='block'

    document.getElementById("btn1").style.display='none'

    document.getElementById("btn2").style.display='none'

    document.getElementById("btn3").style.display='none'

    document.getElementById("btn4").style.display='none'


}

function light(){

    alert("Abhi kam chal raha hain ")
    
}










function validate()
{
    if(   document.getElementById("username").value == "nolan"
       && document.getElementById("password").value ==  "dusk")
    {
        alert( "validation successful" );
        window.location="chats.html"
       
    }
    else
    {
        alert( "validation failed" );
        
    }
}


