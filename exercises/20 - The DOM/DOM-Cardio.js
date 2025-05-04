// Make a div
// add a class of wrapper to it
// put it into the body
// make an unordered list
// add three list items with the words "one, two, three" in them
// put that list into the above wrapper
// create an image
// set the source to an image
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy
// Append that image to the wrapper
// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
// add a class to the second paragraph called warning
// remove the first paragraph
// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// make a new div with a class of cards
// make 4 player cards using generatePlayerCard
// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed
// select all the buttons!
// make out delete function
// loop over them and attach a listener

const myDiv = document.createElement('div');
myDiv.classList = 'wrapper';
document.body.appendChild(myDiv);
const list = `<ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
        </ul>`
let width = 250;
const puppy_name = 'Cute Puppy';
src = `https://picsum.photos/${width}`;
const myImage =`<img src="${src}" alt="${puppy_name}" class="cute">`;

myDiv.innerHTML = list + myImage;

const topDiv = `<div>
<p>Paragraph 1</p>
<p>Paragraph 2</p>
</div>`
const wrapper_list = document.querySelector('.wrapper > ul');
wrapper_list.insertAdjacentHTML('beforebegin', topDiv);

const second_paragraph = document.querySelector('.wrapper > div > p + p');
second_paragraph.classList = 'warning';
second_paragraph.previousElementSibling.remove()

function generatePlayerCard(name, age, height) {
    const playerCard = `<div class="playerCard">
                        <h2>NAME — AGE</h2>
                        <p>They are ${height} and ${age} years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
                        </div>`
    return playerCard;
}

let playerDiv = document.createElement('div');
let playerCards = [];
playerDiv.classList = "cards"

for (let i = 0; i < 4; i++) {
    playerCards[i] = generatePlayerCard('john',27,'5\'5');
    playerDiv.innerHTML += playerCards[i];
}

myDiv.insertAdjacentElement('beforebegin', playerDiv)
const players = document.querySelectorAll(".playerCard")
let button = document.createElement('button');
    button.textContent = "Delete";
    button.classList = "delete"
players.forEach((player) => {
    
    player.innerHTML += `<button class="delete">Delete</button>`
 })

function deletePlayer() {
    const deletBtn = document.querySelectorAll('.delete')
    deletBtn.forEach((button) => {
        
        button.addEventListener('click', function(e) {
            button.parentElement.remove()
        })
    })
}

deletePlayer()