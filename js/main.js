function scrollToSection(event, elementId) {
    const element = document.getElementById(elementId);
    const top = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
        top: top,
        behavior: 'smooth'
    });
    event.preventDefault();
}