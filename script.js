document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');

    function changeActiveLink() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');
    }

    changeActiveLink();
    window.addEventListener('scroll', changeActiveLink);
});
