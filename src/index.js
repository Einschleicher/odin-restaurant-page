import { initPage } from "./init";
import { loadMenu } from "./menu";
import { loadContacts } from "./contact";

initPage();
setEventListeners();

function setEventListeners() {
    let homeButton = document.querySelector("li:nth-child(1) button");
    let menuButton = document.querySelector("li:nth-child(2) button");
    let contactsButton = document.querySelector("li:nth-child(3) button");
    
    homeButton.addEventListener("click", function() {
        initPage();
        setEventListeners();        
    });
    menuButton.addEventListener("click", function() {
        loadMenu();
        setEventListeners();
    });
    contactsButton.addEventListener("click", function() {
        loadContacts();
        setEventListeners();
    });
}