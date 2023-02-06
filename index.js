const rangeInput=document.querySelector("input[type='range']");
const bar=document.querySelector(".bar");
const audio=document.querySelector("audio");
const play=document.querySelector(".play")
const pause=document.querySelector(".pause")
const ducrationTime=document.querySelector(".duration-time")
const currentTime=document.querySelector(".current-time")


play.addEventListener("click",(e)=>{
    audio.play().then(()=>{
        console.log(audio.currentTime)
        console.log(audio.duration)
        const Dmin =("0"+Math.floor(audio.duration/60)).slice(-2);
        const Dsec=("0"+Math.floor(audio.duration%60)).slice(-2);
ducrationTime.innerHTML=`${Dmin}:${Dsec}`;
rangeInput.max=audio.duration;
rangeInput.addEventListener("change",(e)=>{
    audio.currentTime=e.target.value;

})
setInterval(()=>{
    const Cmin =("0"+Math.floor(audio.currentTime/60)).slice(-2);
    const Csec=("0"+Math.floor(audio.currentTime%60)).slice(-2);
currentTime.innerHTML=`${Cmin}:${Csec}`;
 bar.style.width=(audio.currentTime/audio.duration)*100+'%'
},1000)
    })
})
pause.addEventListener("click",(e)=>{
    audio.pause();
})