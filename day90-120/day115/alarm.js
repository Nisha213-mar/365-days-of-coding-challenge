console.log('This is about alarm in javaScript');

const alarmSubmit=document.getElementById('alarmSubmit');

alarmSubmit.addEventListener('click',setAlarm);

function setAlarm(e){
    e.preventDefault();
    

    const alarm=document.getElementById('alarm');
    alarmDate=new Date(alarm.value);
    console.log(`Setting Alarm for ${alarmDate}...`);
}