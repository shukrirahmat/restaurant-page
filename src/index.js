import homepage from "./home";
import menupage from "./menu";
import contactpage from "./contact";
import "./styles.css";

const pagelist = [homepage, menupage, contactpage]
const maindiv = document.querySelector('#content');
maindiv.appendChild(homepage);

const buttons = document.querySelectorAll('nav button');
buttons.forEach(
    function(node, index) {
        node.addEventListener('click', function() {
            clearButtonColor();
            node.classList.add("current");
            loadPage(index);
        })
    }
)

function clearButtonColor() {
    buttons.forEach(
        function(node) {
            node.classList.remove("current");
        }
    )
}

function loadPage(index) {
    maindiv.removeChild(maindiv.firstChild);
    maindiv.appendChild(pagelist[index]);

}

