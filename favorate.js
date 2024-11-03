 //---------------------------------------------------- Favorate page ----------------------------------------------- 

 // remove a film from favorate list

 function removeFilm(){

    var listFilm=document.querySelector(".maListe");   
        listFilm.removeChild(listFilm.firstElementChild);
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
 
 
      
