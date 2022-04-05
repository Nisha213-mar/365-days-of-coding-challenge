console.log('This is about alarm in javaScript');

const alarmSubmit=document.getElementById('alarmSubmit');

//Add an eventlistner to 
alarmSubmit.addEventListener('click',setAlarm);
var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');

//function to play the alarm ringtone
function ringbell(){
    audio.play();
}

//this function will run whenever alarm is set from the ui
function setAlarm(e){
    e.preventDefault();
    

    const alarm=document.getElementById('alarm');
    alarmDate=new Date(alarm.value);
    console.log(`Setting Alarm for ${alarmDate}...`);
    now=new Date();
    let timetoAlarm=alarmDate-now;
     console.log(timetoAlarm);
     if(timetoAlarm>=0){
         setTimeout(()=>{
             console.log('ringing now');
             ringbell();
         },timetoAlarm);
     }
}