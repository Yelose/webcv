function getSectionHtml(section) {
    const sectionHtml = document.getElementById(section)
    sectionHtml.classList.add("show-section")
    fetch(`./pages/${section}.html`).then(res => res.text()).then(html => sectionHtml.innerHTML = html)
}

function clearSections() {
    const sections = document.querySelectorAll('.show-section')
    if (sections) {
        sections.forEach(section => {
            section.classList.remove('show-section')
        });
    }
}

function activeCurrentMenuOption(element){
    document.querySelectorAll('.active').forEach(item => {
        item.classList.remove('active')
    })
    element.classList.add("active")
}

function showSection(section, element) {
    clearSections()
    if (element) {
        activeCurrentMenuOption(element)
    }
    getSectionHtml(section)
}

showSection('presentation')