const addBookBtn = document.querySelector('#add-book');
const form = document.querySelector('#form');
const addToLibraryBtn = document.querySelector('#add-to-library');
const readBtn = document.querySelector('#read-btn');
const main = document.querySelector('main');

const bookTitle = document.querySelector('#book-title');
const author = document.querySelector('#author');
const numberOfPages = document.querySelector('#number-of-page');
const imageURL = document.querySelector('#image-url');

// constructor

function book(title, author, numberOfPages, imageURL) {
	this.title = title;
	this.author = author;
	this.numberOfPages = numberOfPages;
	this.imageURL = imageURL;
}

let library = [];

addBookBtn.addEventListener('click', () => {
	form.style.visibility = 'visible';
});

addToLibraryBtn.addEventListener('click', () => {
	form.style.visibility = 'hidden';
	let tempBook = new book(
		bookTitle.value,
		author.value,
		numberOfPages.value,
		imageURL.value
	);
	library.push(tempBook);
	resetUserInput();
	makeBookCard();
});

readBtn.addEventListener('click', () => {
	readBtn.classList.toggle('read');
	if (readBtn.innerText == 'READED') {
		readBtn.innerText = 'Unread';
	} else {
		readBtn.innerText = 'READED';
	}
});

function makeBookCard() {
	const bookCard = document.createElement('div');
	bookCard.classList.add('book-card');
	main.appendChild(bookCard);
}

function resetUserInput() {
	bookTitle.value = '';
	author.value = '';
	numberOfPages.value = '';
	imageURL.value = '';
}
