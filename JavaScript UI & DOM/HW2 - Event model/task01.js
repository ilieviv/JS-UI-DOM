/* globals $ */


/*
Create a function that takes an id or DOM element and:
    If an id is provided, select the element
    Finds all elements with class button or content within the provided element
        Change the content of all .button elements with "hide"
    When a .button is clicked:
        Find the topmost .content element, that is before another .button and:
            If the .content is visible:
                Hide the .content
                Change the content of the .button to "show"
            If the .content is hidden:
                Show the .content
                Change the content of the .button to "hide"
            If there isn't a .content element after the clicked .button and before other .button, do nothing
    Throws if:
        The provided DOM element is non-existant
        The id is neither a string nor a DOM element
*/

function solve() {

    var displayType = '';

    function solution(element) {
        var contentElements,
            buttonElements,
            i;

        if (typeof element === 'string') {
            element = document.getElementById(element);

            if (!element) {
                throw new Error();
            }

        } else if (element instanceof HTMLElement) {

            if (!document.contains(element)) {
                throw new Error();
            }

        } else {
            throw new Error();
        }

        buttonElements = element.querySelectorAll('.button');

        for (i = 0; i < buttonElements.length; i += 1) {
            buttonElements[i].innerHTML = 'hide';
        }

        // ATTACH EVENT TO PARENT !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        element.addEventListener('click', toggleVisibilityOfContent);

        function toggleVisibilityOfContent(sender) {
            var nextElement = sender.target.nextElementSibling;

            while (true) {

                if (nextElement) {
                    if (nextElement.className.indexOf('button') >= 0) {
                        return;
                    }

                    if (nextElement.className.indexOf('content') >= 0) {
                        // toggle visibility
                        if (nextElement.style.display === 'none') {
                            nextElement.style.display = '';
                            sender.target.innerHTML = 'hide';
                        } else {
                            nextElement.style.display = 'none';
                            sender.target.innerHTML = 'show';
                        }

                        return;
                    }
                }
                else {
                    return;
                }

                nextElement = nextElement.nextElementSibling;
            }
        }
    }

    return solution;
}