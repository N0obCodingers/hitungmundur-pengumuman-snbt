const getEl = (id) => {
    return document.getElementById('countdown-children-' + id)
}

let days = getEl('days')
let hours = getEl('hours')
let minutes = getEl('minutes')
let seconds = getEl('seconds')

// let currentDate = [
//     new Date().getFullYear(),
//     new Date().getMonth(),
// ]

let getUTBKYear = () => {
    if (new Date().getMonth() > 5) {
        return new Date().getFullYear() + 1
    } else {
        return new Date().getFullYear()
    }

}

//set Title
document.getElementById('utbkyear').innerHTML = getUTBKYear()

const UTBKDate = new Date('20 June ' + getUTBKYear())
setInterval(() => {
    let mstimeLeftUTBK = UTBKDate - new Date()
    let timeLeftUTBK = mstimeLeftUTBK / 1000
    let daysLeft = Math.floor(timeLeftUTBK / 86400)
    let hoursLeft = Math.floor((timeLeftUTBK / 3600 ) % 24)
    let minutesLeft = Math.floor((timeLeftUTBK / 60) % 60)
    let secondsLeft = Math.floor((timeLeftUTBK % 60))

    days.innerHTML = daysLeft + ' Hari'
    hours.innerHTML = hoursLeft + ' Jam'
    minutes.innerHTML = minutesLeft + ' Menit'
    seconds.innerHTML = secondsLeft + ' Detik'

    if (timeLeftUTBK < 0) {
        days.innerHTML = 'SEMANGAT'
        hours.innerHTML = 'SEMANGAT'
        minutes.innerHTML = 'SEMANGAT'
        seconds.innerHTML = 'SEMANGAT'

    }

}, 1000)



