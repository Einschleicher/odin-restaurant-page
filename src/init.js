function initPage() {

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
    <div id="page">
    <img src="coffee.jpg" alt="Coffee beans lying on a world map">
    <h1>Welcome to BeanJoy Café</h1>
    <p>
        Indulge in a Symphony of Aromatic Bliss
    </p>
    <p>
        Step into a haven where every gulp narrates a tale and every instant is cherished. BeanJoy Café warmly invites you to encounter the craftsmanship of coffee like never before. Tucked away in the heart of Sunnyville, our charming coffee corner is more than just a spot to snag your daily caffeine fix – it's an oasis for all java devotees.
    </p>
    <h2>Our Roast, Your Odyssey</h2>
    <p>
        At BeanJoy Café, we take pride in metamorphosing each coffee bean into a work of artistry. Our expert baristas compose every mug with accuracy and zeal, ensuring that every slurp whisks you away on an odyssey of lush textures and captivating bouquets. From creamy macchiatos to bold Americanos, we proffer a medley of choices to cater to every palate.
    </p>
    <h2>A Cosy Hideaway</h2>
    <p>
        Our snug coffee bar radiates a congenial ambiance, beckoning you to unwind, bond, and shape moments. Whether you're in search of a tranquil nook to delve into literature, engrossed in heartwarming dialogues with pals, or simply seeking respite from the commotion of the outer world, BeanJoy Café provides the quintessential backdrop.
    </p>
    <h2>Community and Kinship</h2>
    <p>
        Beyond exquisite coffee, BeanJoy Café fosters community. We believe that coffee holds the power to unite. That's why we host periodic soirées, workshops, and tastings, cultivating an environment where coffee aficionados can converge to learn, exchange, and revel in their mutual ardor.
    </p>
    <h2>Sustainability at Heart</h2>
    <p>
        Our dedication transcends the cup. We conscientiously source our beans, championing principled farming practices that guarantee a positive influence on both societies and the ecosystem. Join us as we tread towards an eco-friendly future, one mug at a time.
    </p>
    <h2>Pay Us a Visit</h2>
    <p>
        Embark on your escapade to BeanJoy Café. We anticipate the pleasure of serving you not just coffee, but an encounter that lingers well after your final sip. Allow the redolence to escort you, let the savors kindle you, and let our coffee bar evolve into your sanctuary.
    </p>
    <p class="address">
        123 Java Lane, Sunnyville
    </p>
    <p class="hours">
        Open Mon-Sat: 7 AM - 6 PM
    </p>
    <p>
        <em>Your Coffee Excursion Embarks Here</em>
    </p>
    `;

    console.log("initialization done");
};

export { initPage };