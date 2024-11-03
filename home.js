
// --------------------------------------------------- home page --------------------------------------------------

let left = document.getElementById('left');
let rignt = document.getElementById('right');
let cartBox = document.querySelector('.card-box');
    left.addEventListener('click', (e)=> {
        cartBox.scrollBy({
            top: 0,
            left: -240,
            behavior: "smooth",
        });
    });

    right.addEventListener('click', (e)=> {
        cartBox.scrollBy({
            top: 0,
            left: 240,
            behavior: "smooth",
        });
    });

   
var autoScrollLeft = document.getElementById('silderCat1');
var autoScrollRight = document.getElementById('silderCat2');
const animation1 = [{transform: "translateX(0px)"} , {transform: "translateX(-800px)"}];
const animation2 = [{transform: "translateX(-800px)"} , {transform: "translateX(0px)"}];
const duration = { duration: 10000 , iterations: Infinity}
    autoScrollLeft.animate( animation1, duration);
    autoScrollRight.animate( animation2, duration);


// input search filter
   
var input = document.getElementById('searchInput');

input.addEventListener('keydown', (e) => {
var inputValue = e.target.value.toLowerCase();  
var films = document.querySelectorAll('.film');

films.forEach((item) => {
    var title = item.querySelector('.title').textContent.toLowerCase();  
    if (title.includes(inputValue)) { 
        item.style.display = "";  
    } else {
        item.style.display = "none"; 
    }
   });
});


 //--------------------------------------------------- dark Mode ----------------------------------------------

 var savedTheme = localStorage.getItem("theme");
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


//   ---------------------------- add to favorate 

    var dataFilm = [
        { Image : "/images/film2.jpg" , title : "Mer de Feu (2022)" },
        { Image : "/images/film1.jpg" , title : "Évasion (2023)" },
        { Image : "/images/film2.jpg" , title : "Mer de Feu (2022)" },
        { Image : "/images/film1.jpg" , title : "Évasion (2023)" },
        { Image : "/images/film5.jpg" , title : "Impact Fatal (2024)" },
        { Image : "/images/film7.jpg" , title : "Zone Rouge (2024)" },
        { Image : "/images/film8.jpg" , title : "Chasseur Noir (2022)" },
        { Image : "images/film4jpg.jpg" , title : "Survivant (2024)" },
        { Image : "images/film13.jpg" , title : "Revanche (2021)" },
        { Image : "/images/film3.jpg" , title : "Traque (2023)" }
    ];

    var cards = document.querySelectorAll('.card');

    cards.forEach((card, index) => {

        var title = card.querySelector('a h4');

        title.addEventListener('click', () => {
            var film = dataFilm[index];
  
            localStorage.setItem('filmSelected', JSON.stringify(film));
            window.location.href = 'details.html';
        });
    });
