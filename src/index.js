import homepage from "./home";
import menupage from "./menu";
import contactpage from "./contact";

const pagelist = [homepage, menupage, contactpage]
const maindiv = document.querySelector('#content');
maindiv.appendChild(homepage);

const buttons = document.querySelectorAll('nav button');
buttons.forEach(
    function(node, index) {
        node.addEventListener('click', function() {
            loadPage(index);
        })
    }
)

function loadPage(index) {
    maindiv.removeChild(maindiv.firstChild);
    maindiv.appendChild(pagelist[index]);

}

