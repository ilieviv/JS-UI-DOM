/* globals $ */

/* 
Create a function that takes an id or DOM element and an array of contents
* if an id is provided, select the element
* Add divs to the element
  * Each div's content must be one of the items from the contents array
* The function must remove all previous content from the DOM element provided
* Throws if:
  * The provided first parameter is neither string or existing DOM element
  * The provided id does not select anything (there is no element that has such an id)
  * Any of the function params is missing
  * Any of the function params is not as described
  * Any of the contents is neight `string` or `number`
    * In that case, the content of the element **must not be** changed   
*/

function solve() {
    function task01(el, content) {

        if (typeof el === 'string') {
            el = document.getElementById(el);

            if (el === null) {
                throw new Error();
            }

        } else if (el instanceof HTMLElement) {
            // do nothing
        } else {
            throw new Error();
        }

        if (!Array.isArray(content)) {
            throw new Error();
        }

        var outputContent = '';
        for (var i = 0; i < content.length; i += 1) {

            if (typeof content[i] !== 'string' && typeof content[i] !== 'number') {
                throw new Error();
            }

            outputContent += '<div>' + content[i] + '</div>';
        }
        el.innerHTML = outputContent;
    }

    return task01;
}