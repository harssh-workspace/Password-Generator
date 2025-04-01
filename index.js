const btn = document.getElementById('genPass')
const newPass = document.getElementById('newPass')
const range = document.getElementById('range')
const rangevalue = document.getElementById('rangeValue')

const upperLetter = document.getElementById('upperLetter')
const lowerLetter = document.getElementById('lowerLetter')
const numbers = document.getElementById('number')
const specialChar = document.getElementById('specialChar')
const copyBtn = document.getElementById("copyBtn")

rangevalue.innerText = range.value

range.addEventListener('input', (e) => {
    rangevalue.innerText = e.target.value
})

btn.addEventListener('click', () => {
    copiedText.innerText = "";
    
    let capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let smallLetters = "abcdefghijklmnopqrstuvwxyz"
    let number = "0123456789"
    let specialCharacter = "!@#$%^&*?"

    let finalStr = ""
    let latestPass = ""

    if (upperLetter.checked) {
        finalStr += capitalLetters
    }

    if (lowerLetter.checked) {
        finalStr += smallLetters
    }

    if (numbers.checked) {
        finalStr += number
    }

    if (specialChar.checked) {
        finalStr += specialCharacter
    }

    if (finalStr === '') {
        alert("please check atleast one option")
    }
    // console.log(finalStr);

    for (let i = 0; i < range.value; i++) {
        let randNumber = Math.floor(Math.random() * finalStr.length)


        latestPass += finalStr.charAt(randNumber)
    }


    newPass.innerText = `${latestPass}`
})
const copiedText = document.getElementById('copiedText')

copyBtn.addEventListener('click', () => {

    window.navigator.clipboard.writeText(newPass.innerText)
    copiedText.innerText = "Copied"
})