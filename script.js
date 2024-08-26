console.log("Welcome to spotify");
let songindex = 0;
let audioElement = new Audio('1.mp3');
let masterplay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');
let songs = [
    {songName: "salam-E-ishq" , filePath: "song/1.mp3" , coverpath: "covers/1.jpg"},
    {songName: "salam-E-ishq" , filePath: "song/1.mp3" , coverpath: "covers/1.jpg"},
    {songName: "salam-E-ishq" , filePath: "song/1.mp3" , coverpath: "covers/1.jpg"},
    {songName: "salam-E-ishq" , filePath: "song/1.mp3" , coverpath: "covers/1.jpg"},
    {songName: "salam-E-ishq" , filePath: "song/1.mp3" , coverpath: "covers/1.jpg"},
    {songName: "salam-E-ishq" , filePath: "song/1.mp3" , coverpath: "covers/1.jpg"},
    {songName: "salam-E-ishq" , filePath: "song/1.mp3" , coverpath: "covers/1.jpg"},
    {songName: "salam-E-ishq" , filePath: "song/1.mp3" , coverpath: "covers/1.jpg"},
    {songName: "salam-E-ishq" , filePath: "song/1.mp3" , coverpath: "covers/1.jpg"}, 
    {songName: "salam-E-ishq" , filePath: "song/1.mp3" , coverpath: "covers/1.jpg"},
]
// audioElement.play();

// play pause of song 
masterplay.addEventListener('click' , ()=>{
if (audioElement.paused || audioElement.currentTime<=0) {
    audioElement.play(); 
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
}
else{
    audioElement.pause();
    masterplay.classList.remove('fa-pause');
    masterplay.classList.add('fa-play');

}
})
// listen to the Event;

myProgressBar.addEventListener('timeupdate' , ()=>{
    console.log('timeupdate');
    
})