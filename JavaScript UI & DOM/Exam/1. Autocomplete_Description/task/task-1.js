/* globals document, window, console */

function solve() {
    return function (selector, initialSuggestions) {

        var container = selector;
        var fragment;

        var liContainer;
        var createA;

        var createSuggestion;
        var allListItems;

        var searchInput = document.getElementsByClassName('tb-pattern');


        container = document.querySelector('.suggestions-list');
        fragment = document.createDocumentFragment();

        if (initialSuggestions) {
            for (var i = 0; i < initialSuggestions.length; i += 1) {
                createSuggestion = document.createElement('li');
                createSuggestion.className = 'suggestion';

                createA = document.createElement('a');
                createA.href = '#';
                createA.className = 'suggestion-link';
                createA.innerHTML = initialSuggestions[i];

                createSuggestion.appendChild(createA);
                fragment.appendChild(createSuggestion);

            }
        }
        container.appendChild(fragment);

        searchInput.addEventListener('click', filterListItemsByName);


        function filterListItemsByName() {
            var filter = searchInput.value;
            var length;
            var listItemText;

            allListItems = document.getElementsByClassName('suggestion-link');
            length = allListItems.length;

            for (i = 0; i < length; i += 1) {

                listItemText = allListItems[i].innerHTML;

                if (listItemText.indexOf(filter) < 0) {
                    allListItems[i].style.display = 'none';
                } else {
                    allListItems[i].style.display = '';
                }
            }



        }


    };
}

module.exports = solve;