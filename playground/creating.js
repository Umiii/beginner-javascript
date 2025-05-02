console.log("it works")

const myParagraph = document.createElement('p')

myParagraph.textContent = "I am a P"
myParagraph.classList.add('special')
console.log(myParagraph);

const myImage = document.createElement('img')
myImage.src = 'https://picsum.photos/500'
myImage.alt = 'Nice photo'
console.log(myImage)

document.body.appendChild(myParagraph)