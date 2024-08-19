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




var user=document.getElementById("d88d36a411cf807b75678e899eb6584731daa9eb1605b84e95afd5c9044672299f4cb4ac57dc1570e6f64841534db6301e320e64bc9fcaf39d939fae3e80e770").textContent;          







function validate()
{
    if(   document.getElementById("username").value == user
       && document.getElementById("password").value ==  "pass")
    {
        alert( "validation successful" );
        window.location="chats.html"
       
    }
    else
    {
        alert( "validation failed" );
        
    }
}


