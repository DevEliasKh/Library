const addBookBtn = document.querySelector('#add-book');
const form = document.querySelector('#form');
const addToLibraryBtn = document.querySelector('#add-to-library');
const readBtn = document.querySelectorAll('#read-btn');
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
	makeBookCard();
	resetUserInput();
});

// readBtn.addEventListener('click', () => {
// 	let ar = Array.from(readBtn);

// 	ar.forEach(() => {
// 		readBtn.classList.toggle('read');
// 		if (readBtn.innerText == 'READED') {
// 			readBtn.innerText = 'Unread';
// 		} else {
// 			readBtn.innerText = 'READED';
// 		}
// 	});
// });

let arrayFromBook = Array.from(readBtn);

arrayFromBook.forEach((book) => {
	book.addEventListener('click', () => {
		book.classList.toggle('read');
		if (book.innerText == 'READED') {
			book.innerText = 'Unread';
		} else {
			book.innerText = 'READED';
		}
	});
});

function makeBookCard() {
	const bookCard = document.createElement('div');
	bookCard.classList.add('book-card');
	bookCard.innerHTML = `<div class="info">
		<div>Title: <span id="card-book-title">${bookTitle.value}</span></div>
		<div>Author: <span id="card-author">${author.value}</span></div>
		<div>Number of pages: <span id="card-number-of-page">${numberOfPages.value}</span></div>
		<button class="read-status unread read" id="read-btn">READED</button>
	</div>
	<div class="img">
		<img
		src="${imageURL.value}"
		alt="book-image" />
	</div>`;
	main.appendChild(bookCard);
}

function resetUserInput() {
	bookTitle.value = '';
	author.value = '';
	numberOfPages.value = '';
	imageURL.value = '';
}
