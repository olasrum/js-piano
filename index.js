const pianoKeys = document.querySelectorAll('.key')

function playSound(newUrl) {
    console.log(newUrl)
    new Audio(newUrl).play()
}

pianoKeys.forEach((pianoKey, i) => {
    const keyNumber = i < 9 ? '0' + (i + 1) : (i + 1)
    const newUrl = '24-piano-keys/key' + keyNumber + '.mp3'
    pianoKey.addEventListener('click', () => playSound(newUrl))
    
})