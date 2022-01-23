// Make a div
const div = document.createElement('div');
// add a class of wrapper to it
div.setAttribute('class', 'wrapper');

// put it into the body
const body = document.querySelector('body');
console.log(body);
body.appendChild(div);

// make an unordered list
const ul = document.createElement('ul');

// add three list items with the words "one, two, three" in them
ul.innerHTML = `
<li>one</li>
<li>two</li>
<li>three</li>
`;

// put that list into the above wrapper
div.appendChild(ul);

// create an image
const img = document.createElement('img');

// set the source to an image
img.src = 'https://picsum.photos/400';

// set the width to 250
img.width = 400;

// add a class of cute
img.className = 'cute';

// add an alt of Cute Puppy
img.alt = 'Cute Puppy';

// Append that image to the wrapper
div.appendChild(img);

// with HTML string, make a div, with two paragraphs inside of it
const div2 = document.createElement('div');
div2.innerHTML = `
<p></p>
<p></p>
`;
// put this div before the unordered list from above
div.insertAdjacentElement('afterbegin', div2);

// add a class to the second paragraph called warning
const p = div.querySelector('div > p:nth-child(2)');
p.className = 'warning';

// remove the first paragraph
// eslint-disable-next-line no-unused-expressions
p.previousElementSibling.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

const generatePlayerCard = (name, age, height) => {
  const div3 = document.createElement('div');
  div3.className = 'playerCard';
  div3.innerHTML = `
    <h2>${name} - ${age}</h2>
    <p>They are ${height} and ${age} years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
    `;
  return div3;
};

// make a new div with a class of cards
const div4 = document.createElement('div');
div4.className = 'cards';

// make 4 player cards using generatePlayerCard
let card = generatePlayerCard('John', 13, "6'");
card += generatePlayerCard('James', 19, "6'");
card += generatePlayerCard('Jude', 33, "6'");
card += generatePlayerCard('Julius', 53, "6'");

// append those cards to the div
div4.appendChild(card);

// put the div into the DOM just before the wrapper element
body.insertAdjacentElement('afterbegin', div4);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed
const button = document.createElement('button');
button.innerText = 'Delete';

// select all the buttons!
// make out delete function
// loop over them and attach a listener
