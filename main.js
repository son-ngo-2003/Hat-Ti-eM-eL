console.log('Hello world');
//search events
const search_input = document.getElementById('search-input');
const search_button = document.getElementById('search-button');

search_button.onclick = function (e) {
    if (search_input.value.length) {
        console.log(search_input.value);
        search_input.value = '';
        search_input.focus();
    } else {
        search_input.focus();
    }
};

search_button.onmouseover = function (e) {
    this.style.backgroundColor = 'red';
};

search_button.onmouseout = function (e) {
    this.style.backgroundColor = 'var(--main-color)';
};
//dropdown link events
const dropdown_link = document.getElementsByClassName('dropdown-item-link');

for (var i = 0; i < dropdown_link.length; ++i) {
    dropdown_link[i].onmouseover = function (e) {
        this.style.backgroundColor = 'pink';
        this.style.color = 'var(--black-color)';
    };
    dropdown_link[i].onmouseout = function (e) {
        this.style.backgroundColor = 'var(--gray-color)';
        this.style.color = 'var(--white-color)';
    };
}
