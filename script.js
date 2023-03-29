console.log("Welcome to Spotify");

//intialize the variables
let songIndex=0;
let audioElement=new Audio('song1.mp3');
let masterPlay =document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems= Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName : "Pied Piper", filePath: "song1.mp3" , coverPath: "cover1.jpg"},
    {songName : "Boy's Liar", filePath: "song2.mp3" , coverPath: "cover2.jpg"},
    {songName : "Alone by Alan Walker", filePath: "song3.mp3" , coverPath: "cover3.jpg"},
    {songName : "Wanna be rock by TXT", filePath: "song4.mp3" , coverPath: "cover4.jpg"},
    {songName : "Ghost by Justin bieber", filePath: "song5.mp3", coverPath: "cover5.jpg"},
]

songItems.foreach((element)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})

//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity= 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
//listen to events
audioElement.addEventListener('timeupdate',()=>{
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value =progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-circle-play');
        element.classList.remove('fa-circle-pause');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
    makeAllPlays();
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
    })
})
