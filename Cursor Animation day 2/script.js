
const customCursor = document.querySelector(".cursor");
const navlinks = document.querySelectorAll(".nav-links li");

document.addEventListener("mousemove",moveCursor);
                function moveCursor(e){
                    updateCursorposition(e);
                }
function updateCursorposition(e){
    customCursor.style.top = e.pageY + "px";
    customCursor.style.left = e.pageX + "px";
}

navlinks.forEach((link)=>{
    link.addEventListener("mouseover", ()=> {
        animateCursor();
        hightlightLink(link);

});

link.addEventListener('mouseleave',()=>{
    removeCursorAnimation();
    unhighlightLink(link);
    });

});

function animateCursor(){
    customCursor.classList.add("link-animate");

}
function removeCursorAnimation(){
    customCursor.classList.remove("link-animate");

}

function hightlightLink(link){
    link.classList.add("link-hovering");

}
function unhighlightLink(link){
    link.classList.remove("link-hovering");
}