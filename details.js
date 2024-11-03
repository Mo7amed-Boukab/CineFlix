
// ------------------------------------------------- Details page ----------------------------------------------

   // count j'aime in page details

   var i=0;
   function addAime(){
   var count=document.querySelector('.count');
   i++;
   count.innerHTML=i;
   }


//   add comments


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


// add a film to my favorate liste

function addToList(){
  
}

//--------------------------------------------------- dark Mode ----------------------------------------------

 const savedTheme = localStorage.getItem("theme");
 var darkMode = document.querySelector(".dark");
          if (savedTheme === "dark") {
              console.log(" dark theme exist");
              darkMode.classList.add("darkColors");
          } 
  function changeMode(){
   
          darkMode.classList.toggle("darkColors");

          if (darkMode.classList.contains("darkColors")) {
              localStorage.setItem("theme", "dark");
              console.log("dark mode active");
          }
          else {
              localStorage.setItem("theme", "light");
              console.log("dark mode not active");
          }
    }


// pull cartFilm info from localStorage

 const filmSelected = JSON.parse(localStorage.getItem('filmSelected'));
    document.getElementById('film-image').src = filmSelected.Image;
    document.getElementById('film-title').textContent = filmSelected.title;

