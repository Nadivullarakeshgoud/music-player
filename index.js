

let song = document.getElementById('song')
let play = document.getElementById('play')
let pause = document.getElementById('pause')

//for progress bar

let progress = document.getElementById('progress')

//forward backward button

let forward = document.getElementById('forward')
let backward = document.getElementById('backward')



function PlaySong(){

    play.style.display = "none"//after clicking button not show the button
    pause.style.display = "flex"//after clicking button show
    
    song.volume = 0.05  //0 to 1
    song.play()//to play song
}

function PauseSong(){

    play.style.display = "flex"
    pause.style.display = "none"
    
    // song.currentTime = 0 //it is used for songs start from first
    song.pause()
}

//progress bar
 song.addEventListener('timeupdate',()=>{
    let percentage = Math.floor((song.currentTime/song.duration)*100)
    progress.style.width = percentage + '%'
})


 // Forward button functionality
 forward.addEventListener('click', () => {
    song.currentTime += 5; // Forward by 5 seconds
});

// Backward button functionality
backward.addEventListener('click', () => {
    song.currentTime -= 5; // Backward by 5 seconds
    if (song.currentTime < 0) {
        song.currentTime = 0; // Prevent negative time
    }
});