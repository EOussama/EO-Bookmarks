/**
*
* @name:       EO Bookmarks
* @version:    0.1.0
* @author:     EOussama
* @license     Apache-2.0
* @source:     https://github.com/EOussama/EO-bookmarks
* 
* The main javascript file of the app.
*/

window.addEventListener('load', () => {
    console.log('Hello, world!');
});

/*
var bookmarks = [];

window.addEventListener('load', function() {
	const 
		bookmarkList = document.getElementById('bookmarkList'),
		emptyBMsg = document.getElementById('emptyBMsg'),
		inputForm = document.forms[0];
	
	
	function addBookmark(bm_label, bm_url) {
		let 
			listItem = document.createElement('li'),
			label = document.createElement('a'),
			button = document.createElement('button');
		
		label.textContent = bm_label;
		label.setAttribute('href', bm_url);
		label.setAttribute('target', '_blank');
		button.textContent = 'Delete';
		button.classList.add('btn');
		button.classList.add('btn-outline-danger');
		button.addEventListener('click', removeBookmark);
		listItem.classList.add('list-group-item');
		listItem.classList.add('list-group-item-action');
		
		listItem.appendChild(label);
		listItem.appendChild(button);
		bookmarkList.appendChild(listItem);
		bookmarks.push({label: bm_label, url: bm_url});
		
		isBookmarkEmpty();
	}
	
	function removeBookmark() {
		let index = Array.prototype.indexOf.call(bookmarkList.childNodes, this.parentNode);
		bookmarks.splice(index - 1, 1);
		bookmarkList.removeChild(this.parentNode);

		saveBookmarks();
		isBookmarkEmpty();
	}
	
	function saveBookmarks() {
		localStorage.setItem('Bookmarks', JSON.stringify(bookmarks));
	}
	
	function loadBookmarks() {
		let bm_temp = localStorage.getItem('Bookmarks');
		
		if(bm_temp === null)
			bookmarks = [];
		else {
			bm_temp = JSON.parse(bm_temp);
			
			bm_temp.forEach(function(item) {
				addBookmark(item.label, item.url);
			});
		}
	}
	
	function isBookmarkEmpty() {
		if(bookmarkList.getElementsByTagName('li').length == 0)
			emptyBMsg.style.display = 'block';
		else
			emptyBMsg.style.display = 'none';
	}
	
	inputForm.addEventListener('submit', function(e) {
		e.preventDefault();
		
		let
			urlBox = inputForm.elements.item(0),
			labelBox = inputForm.elements.item(1);
		
		addBookmark(labelBox.value, urlBox.value);
		urlBox.value = labelBox.value = '';
		saveBookmarks();
	});
	
	loadBookmarks();
	isBookmarkEmpty();
});
*/