function showSection(section) {
    clearSections()
    document.getElementById(section).classList.add("show-section")
}

function clearSections() {
    console.log("clearSection")
    removeSection("presentation")
    removeSection("experience")
    removeSection("courses")
}

function removeSection(section) {
    console.log("removeSection")
    const sectionHtml = document.getElementById(section)
    sectionHtml.classList.remove("show-section")
}
