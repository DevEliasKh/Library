const addBookBtn = document.querySelector('#add-book');
const form = document.querySelector('#form');
const addToLibraryBtn = document.querySelector('#add-to-library');
let readBtn = document.querySelectorAll('#read-btn');
let removeBtn = document.querySelectorAll('#remove-btn');
const main = document.querySelector('main');

const bookTitle = document.querySelector('#book-title');
const author = document.querySelector('#author');
const numberOfPages = document.querySelector('#number-of-page');
const imageURL = document.querySelector('#image-url');

let library = [];
let arrayFromReadBtn = Array.from(readBtn);
let arrayFromRemoveBtn = Array.from(removeBtn);
// constructor

function book(title, author, numberOfPages, imageURL) {
	this.title = title;
	this.author = author;
	this.numberOfPages = numberOfPages;
	this.imageURL = imageURL;
}

// DOM

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
	readBtn = document.querySelectorAll('#read-btn');
	removeBtn = document.querySelectorAll('#remove-btn');
	arrayFromReadBtn = Array.from(readBtn);
	arrayFromRemoveBtn = Array.from(removeBtn);
	changeReadStatus();
	removeBook();
});

function changeReadStatus() {
	arrayFromReadBtn.forEach((btn) => {
		btn.addEventListener('click', () => {
			btn.classList.toggle('read');
			if (btn.innerText == 'READED') {
				btn.innerText = 'Unread';
			} else {
				btn.innerText = 'READED';
			}
		});
	});
}

function makeBookCard() {
	const bookCard = document.createElement('div');
	bookCard.classList.add('book-card');
	bookCard.innerHTML = `<div class="info">
		<div>Title: <span id="card-book-title">${bookTitle.value}</span></div>
		<div>Author: <span id="card-author">${author.value}</span></div>
		<div>Number of pages: <span id="card-number-of-page">${numberOfPages.value}</span></div>
		<button class="read-status unread " id="read-btn">Unread</button>
		<button class="read-status remove" id="remove-btn">Remove</button>
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

function removeBook() {
	arrayFromRemoveBtn.forEach((btn) => {
		btn.addEventListener('click', () => {
			let cardBookRemoving = btn.parentElement.parentElement;
			cardBookRemoving.remove();
		});
	});
}

removeBook();
changeReadStatus();
