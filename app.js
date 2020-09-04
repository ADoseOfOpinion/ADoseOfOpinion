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

/*
.text = .bloglist
.moreText = .readmorechunk1
.viewmoreblogs = .read-more-btn
*/



const ViewMoreButton = document.querySelector('.viewmoreblogs');
const BlogList = document.querySelector('.bloglist');
const BlogChunk = document.querySelector('.readmorechunk1');

ViewMoreButton.addEventListener('click', (e) => {
    BlogList.classList.toggle('show-more');
    ViewMoreButton.classList.toggle('show-less')
    if (ViewMoreButton.innerText === "View More Blogs") {
        ViewMoreButton.style.display = block;
        BlogChunk.style.display = none;
    } else {
        ViewMoreButton.style.display = none;
        BlogChunk.style.display = block;
    }
});




