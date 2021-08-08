import './reset.css'
import './style.css'
import gsap from "gsap";

// button control
const playBtn = document.getElementById('btn-play')
const pauseBtn = document.getElementById('btn-pause')

// audio resources
let audio = document.createElement('audio');
audio.src = "/music.mp3"

// GSAP animation timeline
const timeline = gsap.timeline({paused: true})
const rainbowTimeline = gsap.timeline({paused: true})
const infinityConfig = {repeat: -1, yoyo: true}
rainbowTimeline.to('#rainbow', {width: '100vw', duration: 5, delay: 5})
timeline.to('#wrapper', {y: 100, ...infinityConfig})
timeline.to('#wrapper', {y: -100, ...infinityConfig})
timeline.to('#cat-container', {
    backgroundPositionX: -2000, repeat: -1, ease: 'linear', duration: 3, delay: 3
})


if (playBtn && pauseBtn) {
    playBtn.addEventListener('click', () => {
        audio.play().then(() => {
            timeline.play()
            rainbowTimeline.play()
        })
    })

    pauseBtn.addEventListener('click', () => {
        audio.pause()
        timeline.pause()
        rainbowTimeline.pause()
    })
}