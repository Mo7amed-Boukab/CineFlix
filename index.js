
// count j'aime in page details
var i=0;
function addAime(){
    var count=document.querySelector('.count');
    i++;
    count.innerHTML=i;
}

// add comment in page details
// function addComment() {
//     var container = document.querySelector(".comment-box");
//     var box_comment = document.createElement("div");
//     box_comment.className = "comment-n";
    
//     var addParagraph = document.createElement("p");  
//     addParagraph.textContent = '"hello"'; // add user comment   
//     addParagraph.className = "comment";
//     box_comment.appendChild(addParagraph);

//     var author = document.createElement("p");
//     author.className = "author";

//     var icon = document.createElement("img");
//     icon.src = "user.png"; 
//     icon.className = "user-icon";
//     author.appendChild(icon);

//     var authorName = document.createTextNode(" Vous");
//     author.appendChild(authorName);

//     box_comment.appendChild(author);
//     container.appendChild(box_comment);
// }

function addComment() {
    var commentText = document.getElementById("userComment").value;

    var container = document.querySelector(".comment-box");
    var box_comment = document.createElement("div");
    box_comment.className = "comment-n";
    
    var addParagraph = document.createElement("p");  
    addParagraph.textContent = `"${commentText}"`; 
    addParagraph.className = "comment";
    box_comment.appendChild(addParagraph);

    var author = document.createElement("p");
    author.className = "author";

    var icon = document.createElement("img");
    icon.src = "/images/user.png"; 
    icon.className = "user-icon";
    author.appendChild(icon);

    var authorName = document.createTextNode(" Vous");
    author.appendChild(authorName);

    box_comment.appendChild(author);
    container.appendChild(box_comment);

    document.getElementById("userComment").value = "";
}


// dark mode sans stockage dans le mémoire

function changeMode(){
    var darkMode = document.querySelector(".dark");
    darkMode.classList.toggle("darkColors");
}
