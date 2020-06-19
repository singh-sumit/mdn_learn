let myHeading=document.querySelector('h1')
myHeading.textContent='Hello World  !';

//changing logo Onclick propery
let myLogo=document.querySelector('img');
myLogo.onclick=function(){
    let myLogoSrc=myLogo.getAttribute('src');
    if(myLogoSrc==='images/Firefox_Logo.svg'){
        myLogo.setAttribute('src','images/Firefox_logo_dev.png');
    }
    else{
        myLogo.setAttribute('src','images/Firefox_Logo.svg');
    }
}

//changing User
//retriving user name from prompt and storing it into localStorage
//And fecting item
let Heading=document.querySelector('h1');
let myButton=document.querySelector('button');

function setUserName(){
    let userName=prompt('Enter your Name :');
    //check if user input something
    if(!userName)       //if userName=null
    {
        setUserName();
    }
    else{
        localStorage.setItem('name',userName);
        Heading.innerHTML='Mozilla is Cool! '+userName;
    }
}

if(!localStorage.getItem('name'))       //Check if 'name' data exits if not do this
{
    //calling function setUserName() to create User Name
    setUserName();
}
else            //if 'name' data exists
{
    let storedName=localStorage.getItem('name');
    Heading.textContent='Mozilla is Cool! '+storedName;
}
console.log(localStorage.getItem('name'));
//Linking event with button onclick
myButton.onclick=function(){
    setUserName();
}
