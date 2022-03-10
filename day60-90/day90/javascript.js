document.getElementById("button").addEventListener('click',function(){
    document.querySelector(".share").style.display='inline-block';
    document.getElementById("buttonClose").style.display='inline-block';
    document.getElementById("button").style.display='none';
});
function init(){
    document.querySelector(".share").style.display='none';
    document.getElementById("button").style.display='inline-block';
    document.getElementById("buttonClose").style.display='none';

};
document.getElementById("buttonClose").addEventListener('click',init);
document.getElementById("buttonCloseOne").addEventListener('click',init);