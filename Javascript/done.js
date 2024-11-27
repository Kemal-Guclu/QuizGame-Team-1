document.addEventListener ("DOMContentLoaded", (event) => {
    const startpagebtn = document.getElementById ("startpagebtn")
    const retakebtn = document.getElementById ("retakebtn")

    console.log ("loaded")
    console.log (startpagebtn)
    console.log(retakebtn)

    startpagebtn.addEventListener ("click", startpageredirect);
    retakebtn.addEventListener ("click", retakeredirect);
})



function startpageredirect() {
    window.location.href = "../index.html"
    
};
function retakeredirect() {
    window.location.href = "./questions.html"
    
};