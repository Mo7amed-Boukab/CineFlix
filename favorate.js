 //---------------------------------------------------- Favorate page ----------------------------------------------- 

 // remove a film from favorate list

 function removeFilm(){

    var listFilm=document.querySelector(".maListe");   
        listFilm.removeChild(listFilm.firstElementChild);
    }

// add a film to my favorate liste
    
    function addToList(){
        var placeToAdd = document.querySelector(".maListe");
        var div = document.createElement("div");
        var img = document.createElement("img");
            img.src = "/images/film13.jpg";
        var a = document.createElement("a");
        var title = document.createElement("h4");
            a.appendChild()
            placeToAdd.appendChild()=`

                <div class="card">
                        <img src="/images/film13.jpg" alt="">
                        <a href="dts-film.html"><h4>Titre du film<br><span>2021</span></h4></a>
                </div>

            `;
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
 
 
      
