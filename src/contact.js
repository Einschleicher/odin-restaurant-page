function loadContacts() {

    let content = document.querySelector("#content");

    content.innerHTML = 

    `
    <div id="header">
    <ul>
        <li><button>HOME</button></li>
        <li><button>MENU</button></li>
        <li><button>CONTACT</button></li>
    </ul>
    </div>
    <div id="contact-container">
        <div class="contact-info">
            <div class="contact-title">Contact Details</div>
            <div class="contact-detail">Email: info@example.com</div>
            <div class="contact-detail">Phone: (123) 456-7890</div>
            <div class="contact-detail">Address: 123 Main Street, Cityville</div>
        </div>
        <div class="contact-info">
            <div class="contact-title">Opening Hours</div>
            <div class="contact-detail">Monday - Friday: 8:00 AM - 6:00 PM</div>
            <div class="contact-detail">Saturday: 9:00 AM - 4:00 PM</div>
            <div class="contact-detail">Sunday: Closed</div>
        </div>
        <div class="contact-info">
            <div class="contact-title">Social Media</div>
            <div class="contact-detail">
                Follow us on <a href="https://www.facebook.com/example" target="_blank">Facebook</a> and <a href="https://www.twitter.com/example" target="_blank">Twitter</a> for updates.
            </div>
        </div>
    </div>
    `;
    console.log("loading contacts done");
};

export { loadContacts };