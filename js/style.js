const menu = document.querySelector("div#menu");
//const container = document.querySelector("div.container");
const overlay = document.querySelector("div#overlay");
const mobilewidth = 480;
const tabletwidth =  767;
const desktopwidth = 1024;
const colors=
{grey:'#393e46',dark:'#222831',black:'#000000',light:'#eeeeee',orange:'#d65a31',
green:'#32e0c4',dgreen:'#2aa08c',light_grey:'#474a50'};

function close_menu(){
    menu.style.width = "0%";
    overlay.style.display='none';
}
function open_menu(){
    var device_width = Math.max(window.screen.width, window.innerWidth);
    device_width = window.innerWidth;
    var menuWidth = "50%";
    if(device_width>tabletwidth){//tablet and desktop
        menuWidth = "30%";
    }
    menu.style.width = menuWidth;
    overlay.style.display='block';
}
function menu_dropdown_toggle(){
    var x = document.querySelector("div.dropdown-content");
    var dropdown = document.querySelector("li.dropdown");

    if (x.style.display === "none") {
        x.style.display = "block";
        dropdown.style.backgroundColor = 'rgba(214,90,49,0.5)';
    } else {
        x.style.display = "none";
        dropdown.style.backgroundColor = colors.grey;

    }
}
var cards = document.querySelectorAll('div#main > div.grid-container > div.grid-item');
for(i =0 ; i<cards.length;i++){
    cards[i].addEventListener('click',zoom);
}
function zoom(){
    if(!this.classList.contains('modal')){
        this.classList.add('modal');
        overlay.style.display='block';
    }else{
        this.classList.remove('modal');
        overlay.style.display='none';
    }
}