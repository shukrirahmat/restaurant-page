function Contact() {
    const page = document.createElement('div');
    
    const top = document.createElement('div');
    const contactheader = document.createElement('h2');
    const contacttext = document.createElement('p');

    contactheader.textContent = "CONTACT US";
    contacttext.textContent = "You can contact us for inquiries through Spirit Mirrors (sold at Arcane Shops), or send us letters using Fleet Falcons.";
    
    top.appendChild(contactheader);
    top.appendChild(contacttext);

    const bottom = document.createElement('div');
    const staff1 = createStaff(
        'Arlene (Customer Service)',
        'Contact Arlene if you wanted to ask general question about our restaurant, or file a complaint about our services',
        '<mur-rah-ni-kah-zan>',
        'Sumeria-4346'
    ).getStaff();
    const staff2 = createStaff(
        'Braun (Delivery)',
        'You can order through Braun if you want our food to be delivered to you. We will carry our food through swamps and caves to get to wherever you will be',
        '<kah-var-vil-lu-rah>',
        'Sumeria-1778'
    ).getStaff();
    const staff3 = createStaff(
        'Cecil (Quest Board)',
        'Contact Cecil if you want to place jobs on our Quest Board for a small and negotiable fee.',
        '<ein-zan-rah-vu-mur>',
        'Sumeria-2131'
    ).getStaff();
    bottom.appendChild(staff1);
    bottom.appendChild(staff2);
    bottom.appendChild(staff3);

    page.appendChild(top);
    page.appendChild(document.createElement('hr'));
    page.appendChild(bottom);

    const getPage = () => page;

    return {getPage};
}

function createStaff(name, description, phone1, phone2) {

    const staff = document.createElement('div');
    const staffName = document.createElement('h3');
    const staffDescription = document.createElement('p');
    const staffPhone1 = document.createElement('p');
    const staffPhone2 = document.createElement('p');

    staffName.textContent = name;
    staffDescription.textContent = description;
    staffPhone1.textContent = "Mirror SPELL : " + phone1;
    staffPhone2.textContent = "Falcon Tag : " + phone2;

    staff.appendChild(staffName);
    staff.appendChild(staffDescription);
    staff.appendChild(staffPhone1);
    staff.appendChild(staffPhone2);
    staff.classList.add("staff");

    const getStaff = () => staff;

    return {getStaff};
}

export default Contact().getPage();