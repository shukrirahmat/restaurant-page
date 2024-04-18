function Contact() {
    const page = document.createElement('div');
    page.textContent = "THIS IS CONTACT PAGE";

    const getPage = () => page;

    return {getPage};
}

export default Contact().getPage();