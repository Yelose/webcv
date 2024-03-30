function showSection(section, element) {
    clearSections()
    document.querySelectorAll('.active').forEach(item =>{
        item.classList.remove('active')
    })
    element.classList.add("active")
    
    const sectionHtml = document.getElementById(section)
    sectionHtml.classList.add("show-section")
    fetch(`./pages/${section}.html`).then(res => res.text()).then(html => sectionHtml.innerHTML = html)
}

function clearSections() {
    const sections = document.querySelectorAll('.show-section')
    sections.forEach(section => {
        section.classList.remove('show-section')
    });
}
showSection('presentation')