const moneda = document.getElementById('m')
const animation = moneda.animate([
    {
        transform: 'rotateX(0)'
    },
    {
        transform: 'rotateX(360deg)'
    }
],
{
    duration:2000,
    direction:'normal',
    easing:'linear',
    iterations:Infinity
}
)

const pb = document.getElementById('play')
const pp = document.getElementById('pause')
const ps = document.getElementById('stop')
const pr = document.getElementById('reverse')

pb.addEventListener('click', ()=>{
    animation.play()
    pb.classList.toggle('active_button')
    if (pp.classList.contains('active_button') || ps.classList.contains('active_button') || pr.classList.contains('active_button')){
        pp.classList.remove('active_button')
        ps.classList.remove('active_button')
        pr.classList.remove('active_button')
    }
})

pp.addEventListener('click', ()=>{
    animation.pause()
    pp.classList.toggle('active_button')
    if (pb.classList.contains('active_button') || ps.classList.contains('active_button') || pr.classList.contains('active_button')){
        pb.classList.remove('active_button')
        ps.classList.remove('active_button')
        pr.classList.remove('active_button')
    }
})

ps.addEventListener('click', ()=>{
    animation.cancel()
    ps.classList.toggle('active_button')
    if (pp.classList.contains('active_button') || pb.classList.contains('active_button') || pr.classList.contains('active_button')){
        pp.classList.remove('active_button')
        ps.classList.remove('active_button')
        pr.classList.remove('active_button')
    }
})

pr.addEventListener('click', ()=>{
    animation.reverse()
    pr.classList.toggle('active_button')
    if (pp.classList.contains('active_button') || ps.classList.contains('active_button') || pb.classList.contains('active_button')){
        pp.classList.remove('active_button')
        ps.classList.remove('active_button')
        pr.classList.remove('active_button')
    }
})