function loadMenu() {

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
    <div id="menu">
    <h1>Menu</h1>
    <table>
        <tr>
            <th>Item</th>
            <th>Description</th>
            <th>Price</th>
        </tr>
        <tr>
            <td>Classic Espresso</td>
            <td>Strong and rich espresso shot</td>
            <td>$2.50</td>
        </tr>
        <tr>
            <td>Cappuccino</td>
            <td>Espresso with equal parts of steamed milk and milk foam</td>
            <td>$3.00</td>
        </tr>
        <tr>
            <td>Latte</td>
            <td>Espresso with a generous amount of steamed milk</td>
            <td>$3.50</td>
        </tr>
        <tr>
            <td>Mocha</td>
            <td>Espresso with chocolate syrup and steamed milk</td>
            <td>$4.00</td>
        </tr>
        <tr>
            <td>Chai Latte</td>
            <td>Spiced tea concentrate with steamed milk</td>
            <td>$3.50</td>
        </tr>
        <tr>
            <td>Iced Coffee</td>
            <td>Chilled coffee served over ice</td>
            <td>$2.50</td>
        </tr>
        <tr>
            <td>Hot Chocolate</td>
            <td>Rich and creamy chocolatey delight</td>
            <td>$3.00</td>
        </tr>
    </table>
    </div>
    `;
    console.log("loading menu done");
};

export { loadMenu };