function Home() {

    const page = document.createElement('div');

    const restaurantName = document.createElement('h1');
    restaurantName.textContent = "MISHA'S TAVERN";

    const image = document.createElement('div');
    image.classList.add('homeimage');

    const about = document.createElement('div');
    const aboutHeader = document.createElement('h2');
    const aboutText = document.createElement('p');
    about.classList.add('about');
    aboutHeader.textContent = "SERVED EVERY DAY SINCE 348"
    aboutText.textContent = "Misha's opened on the winter of 348th nearing the end of the Arcane War. A young villager, Misha began by baking bread to feed soldiers stranded during the war for free. Today 45 years later, this restaurant have become a popular stopping spot for adventurers.";
    about.appendChild(aboutHeader);
    about.appendChild(aboutText);

    const time = document.createElement('div');
    const timeHeader = document.createElement('h2');
    timeHeader.textContent = "OPENING HOURS";

    const ul = document.createElement('ul');
    const hours = [
        'Sunday: 9AM - 11PM',
        'Monday: 9AM - 10PM',
        'Tuesday: 9AM - 10PM',
        'Wednesday: 9AM - 10PM',
        'Thursday: 9AM - 10PM',
        'Friday: 9AM - 10PM',
        'Saturday: 2PM - 10PM'
    ]

    hours.forEach(function(days){
        const li = document.createElement('li');
        li.textContent = days;
        ul.appendChild(li);
    })

    time.appendChild(timeHeader);
    time.appendChild(ul);

    const location = document.createElement('div');
    const locationHeader = document.createElement('h2');
    locationHeader.textContent = "LOCATION";
    const address = document.createElement('p');
    address.textContent = "12 Dandelion Road, Village of Mel, South Semuria";

    location.appendChild(locationHeader);
    location.appendChild(address);

    page.appendChild(restaurantName);
    page.appendChild(image);
    page.appendChild(document.createElement('hr'));
    page.appendChild(about);
    page.appendChild(document.createElement('hr'));
    page.appendChild(time);
    page.appendChild(document.createElement('hr'));
    page.appendChild(location);

    const getPage = () => page;

    return {getPage};
}

export default Home().getPage();