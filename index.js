const timer=document.getElementById("timer");
const start=document.getElementById("")

let sec=0,
minutes=0,
hour=0,
intervalId;

const startWatch=()=>{
    intervalId=setInterval(()=>{
        if(sec>59){
            if(minutes>59){
                hour++;
                minutes=0;
            }
            else minutes++;
            sec=0;
        }
        else sec++;
    
        const hr=hour.toString().padStart(2,"0");
        const min=minutes.toString().padStart(2,"0");
        const s=sec.toString().padStart(2,"0");
    
        timer.innerText=`${hr}:${min}:${s}`;
    
    },1000);
    
};

const stopWatch = ()=>{
    clearInterval(intervalId)
    timer.innerText="00:00:00"
}

