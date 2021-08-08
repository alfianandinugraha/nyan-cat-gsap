import './reset.css'
import './style.css'
import gsap from "gsap";

// button control
const playBtn = document.getElementById('btn-play')
const pauseBtn = document.getElementById('btn-pause')

// audio resources
let audio = document.createElement('audio');
audio.src = "/nyan-cat-gsap/music.mp3"

// GSAP animation timeline
const catTimelineY = gsap.timeline({paused: true})
const rainbowTimeline = gsap.timeline({paused: true})
const backgroundTimeline = gsap.timeline({paused: true})
const infinityConfig = {repeat: -1, yoyo: true}
rainbowTimeline.to('#rainbow', {width: '100vw', duration: 5, delay: 5})
catTimelineY.to('#wrapper', {y: 100, ...infinityConfig})
catTimelineY.to('#wrapper', {y: -100, ...infinityConfig})
backgroundTimeline.to('#cat-container', {
    backgroundPositionX: -2000, repeat: -1, ease: 'linear', duration: 3, delay: 3
})


if (playBtn && pauseBtn) {
    playBtn.addEventListener('click', () => {
        audio.play().then(() => {
            catTimelineY.play()
            rainbowTimeline.play()
            backgroundTimeline.play()
        })
    })

    pauseBtn.addEventListener('click', () => {
        audio.pause()
        catTimelineY.pause()
        rainbowTimeline.pause()
        backgroundTimeline.pause()
    })
}