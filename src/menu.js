function Menu() {
    const page = document.createElement('div');
    page.textContent = "THIS IS MENU PAGE";

    const getPage = () => page;

    return {getPage};
}

export default Menu().getPage();