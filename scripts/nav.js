// this opens and closes the mobile nav menu while preventing body scrolling
function openMenu() {
    document.getElementById("overlay").style.height = "100%";
    document.getElementById("close-btn").style.display = "flex";
    document.getElementById("html").style.overflow = "hidden";
}

function closeMenu() {
    document.getElementById("overlay").style.height = "0";
    document.getElementById("close-btn").style.display = "none";
    document.getElementById("html").style.overflow = "visible"; 
}

// this opens and closes the project nav menu while preventing body scrolling
function openProject() {
    document.getElementById("project").style.height = "100%";
    document.getElementById("close-pro-btn").style.display = "flex";
    document.getElementById("html").style.overflow = "hidden";
}

function closeProject() {
    document.getElementById("project").style.height = "0";
    document.getElementById("close-pro-btn").style.display = "none";
    document.getElementById("html").style.overflow = "visible"; 
}