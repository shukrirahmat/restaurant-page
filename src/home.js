function Home() {

    const page = document.createElement('div');

    const restaurantName = document.createElement('h1');
    restaurantName.textContent = 'RESTAURANT NAME';

    const image = document.createElement('div');
    image.textContent = 'PLACEHOLDER IMAGE';

    const about = document.createElement('p');
    about.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nostrum excepturi expedita alias. Numquam accusamus voluptates ratione nobis possimus consequuntur, molestiae excepturi itaque hic necessitatibus eum natus adipisci commodi. Nulla.';

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
    address.textContent = "Derry, Maine";

    location.appendChild(locationHeader);
    location.appendChild(address);

    page.appendChild(restaurantName);
    page.appendChild(image);
    page.appendChild(about);
    page.appendChild(time);
    page.appendChild(location);

    const getPage = () => page;

    return {getPage};
}

export default Home().getPage();