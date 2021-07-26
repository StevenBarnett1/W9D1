export function changeTitle() {
    // Change the title of the page to "(Your name)'s Portfolio"
    document.title = "Joes Portfolio"
    // Your code here
}

export function changeHeader() {
    // Change the name in the h1 of the page to your name
    document.body.children[0].children[0].innerText = "I am Joe"
    // Your code here
}

export function changeAboutMe() {
    /* Update the first paragraph in the About Me section with a small
     passage about yourself */
    document.body.children[1].children[1].innerText = "Something about Joe"
    // Your code here
}
