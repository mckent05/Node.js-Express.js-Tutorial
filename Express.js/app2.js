let firstDiv = document.querySelector('.container')

const giveMessage = () => {
    firstDiv.classList.toggle("hide")
    console.log("added")
}

firstDiv.addEventListener('click', giveMessage)

