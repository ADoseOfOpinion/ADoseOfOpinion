//An attempt at creating a functional search bar that doesn't work
/*
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', function(e){
    const term = e.target.value.toLowerCase()
    const books = list.getElementsByTagName('div')
    Array.from(books).forEach(function(book)) {
        const title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) != -1) {
            book.style.display = 'block'
        } else {
            book.style.display = 'none'
        }
    }
})
*/
