function Menu() {
    const page = document.createElement('div');

    const specials = document.createElement('div');
    specials.classList.add('specials');
    const specialsHeader = document.createElement('h2');
    specialsHeader.textContent = "OUR SPECIALTIES";
    const sp1 = specialsCreator(
        'Smoked Dragon Meat',
        'Enjoy the delicate texture and exquisite taste of the rarely found dragon meat slayed by some of the greatest warriors',
        '1500 dias'
    ).getSpecial();
    const sp2 = specialsCreator(
        "Soldier's Bread",
        'The original bread made by our founder, reminiscing of the old days, improved and perfected over the years',
        '200 dias'
    ).getSpecial();
    const sp3 = specialsCreator(
        "Kraken Soup",
        'The specially made broth took several weeks to prepare, becoming very popular among all ages. The favourite dish of Sir Simon Arthurius himself!',
        '800 dias'
    ).getSpecial();
    const sp4 = specialsCreator(
        "Blue Elixir",
        'Rejuvenate yourself with this refreshing drink, popular among adventurer as it also enhances your magical energy',
        '450 dias'
    ).getSpecial();
    specials.appendChild(specialsHeader);
    specials.appendChild(sp1);
    specials.appendChild(sp2);
    specials.appendChild(sp3);
    specials.appendChild(sp4);

    const otherDishes = menuCreator(
        'OTHER POPULAR DISHES',
        ['Fried Mandrake', 'Great Boar Stew', 'Dragon Omelette', "Hellfire Pepper Chicken", "Hydra Head Curry", "Dwarven Cake", "Slime Sandwich", "Traveler's Pie"],
        ['200', '860', '600', '480', '570', '150', '230', '80']
    ).getMenu();

    const drinks = menuCreator(
        'DRINKS',
        ['Mountain Brew', 'Fairy Light', 'Ambergrass Tea', 'Dwarven Beer', 'Rainbow Potion'],
        ['90', '70', '55', '120', '300']
    ).getMenu();

    page.appendChild(specials);
    page.appendChild(document.createElement('hr'));
    page.appendChild(otherDishes);
    page.appendChild(document.createElement('hr'));
    page.appendChild(drinks);


    const getPage = () => page;

    return { getPage };
}

function specialsCreator(name, description, price) {

    const sp = document.createElement('div');
    const nametext = document.createElement('h3');
    const desctext = document.createElement('p');
    const pricetext = document.createElement('p');
    nametext.textContent = name;
    desctext.textContent = description;
    pricetext.textContent = price;
    sp.appendChild(nametext);
    sp.appendChild(desctext);
    sp.appendChild(pricetext);
    sp.classList.add("spItem");
    pricetext.classList.add("spPrice");

    const getSpecial = () => sp;

    return { getSpecial };
}

function dishCreator(name, price) {
    const dish = document.createElement('div');
    const nametext = document.createElement('p');
    const pricetext = document.createElement('p');
    nametext.textContent = name;
    pricetext.textContent = price + " dias";
    dish.appendChild(nametext);
    dish.appendChild(pricetext);
    dish.classList.add("dish");

    const getDish = () => dish;

    return { getDish };
}

function menuCreator(header, menulist, pricelist) {

    const menu = document.createElement('div');
    menu.classList.add('menulist');
    const menuHeader = document.createElement('h2');
    menuHeader.textContent = header;
    menu.appendChild(menuHeader);

    const dishContainer = document.createElement('div');
    dishContainer.classList.add('dishcontainer');

    const dishList = menulist;
    const dishPrice = pricelist;
    dishList.forEach(
        function (dish, index) {
            const div = dishCreator(dish, dishPrice[index]).getDish();
            dishContainer.appendChild(div);
        }
    )
    menu.appendChild(dishContainer);

    const getMenu = () => menu;

    return {getMenu}
}

export default Menu().getPage();