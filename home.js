
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

