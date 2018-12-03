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
    let bookmarks = [];

    const
        bookmarkList = document.getElementById('bookmark-list'),
        emptyBMsg = document.getElementById('empty-msg'),
        bookmarkCount = document.getElementById('bookmark-count'),
        inputForm = document.forms[0];

    inputForm.addEventListener('submit', function (e) {
        // Preventing the form from reloading the page.
        e.preventDefault();

        let
            urlBox = inputForm.elements.item(0),
            labelBox = inputForm.elements.item(1);

        // Adding a new bookmark.
        addBookmark(labelBox.value, urlBox.value);

        // Saving all the boolmarks.
        saveBookmarks();

        // Emptying the inputs.
        urlBox.value = '';
        labelBox.value = '';
    });

    /**
     * Adds a new bookmark.
     * 
     * @param {*} bmLabel 
     * @param {*} bmUrl 
     */
    function addBookmark(bmLabel, bmUrl) {
        let
            listItem = document.createElement('li'),
            label = document.createElement('a'),
            button = document.createElement('button');

        label.textContent = bmLabel;
        label.setAttribute('href', bmUrl);
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
        bookmarks.push({ label: bmLabel, url: bmUrl });

        isBookmarkEmpty();
    }

    /**
     * Removes a bookmark.
     */
    function removeBookmark() {
        let index = Array.prototype.indexOf.call(bookmarkList.childNodes, this.parentNode);
        bookmarks.splice(index - 1, 1);
        bookmarkList.removeChild(this.parentNode);

        saveBookmarks();
        isBookmarkEmpty();
    }

    /**
     * Saves the bookmarks.
     */
    function saveBookmarks() {
        // Saving the bookmark.
        localStorage.setItem('Bookmarks', JSON.stringify(bookmarks));

        // Updating the bookmark count.
        updateCount();
    }

    /**
     * Loads the bookmarks.
     */
    function loadBookmarks() {
        let bmTemp = localStorage.getItem('Bookmarks');

        if (bmTemp === null)
            bookmarks = [];
        else {
            bmTemp = JSON.parse(bmTemp);

            bmTemp.forEach(function (item) {
                addBookmark(item.label, item.url);
            });
        }

        // Updating the bookmark count.
        updateCount();
    }

    /**
     * Displays the empty alert if the list is empty.
     */
    function isBookmarkEmpty() {
        if (bookmarkList.getElementsByTagName('li').length == 0)
            emptyBMsg.style.display = 'block';
        else
            emptyBMsg.style.display = 'none';
    }

    /**
     * Updates the bookmark count.
     */
    function updateCount() {
        bookmarkCount.textContent = bookmarks.length;
    }

    // Loading all the bookmarks.
    loadBookmarks();

    // Check if the list is empty.
    isBookmarkEmpty();
});