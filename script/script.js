//scrolling from navbar

let navbar = document.querySelector(".navbar")
let href = navbar.querySelectorAll("a[href]").forEach(elem=> {
  elem.addEventListener('click', moveTo)

  function moveTo(e){
    e.preventDefault();
    document.querySelector(elem.getAttribute('href')).scrollIntoView({behavior: 'smooth', block: 'start'});
  }
})


//animated number

let projectsAmount = document.querySelector('#projectsCounter')
const scrolling = function(e) {
    let elementPos = projectsAmount.getBoundingClientRect().y - window.innerHeight + projectsAmount.getBoundingClientRect().height;
    if (elementPos >= -600 && elementPos <= 20) {
        countUpProjects();
        countUpSatisfied();
        window.removeEventListener('scroll', scrolling)
    }
}

window.addEventListener("scroll", scrolling);

function countUpProjects () {
let customers = document.querySelector('#projectsCounter')
let current = 0;
let end = 200;

  let animating = setInterval(function(){
    current++;
    customers.innerHTML = current;
    if(current === end){
      clearInterval(animating);
    }
  }, 10)
}

function countUpSatisfied(){
  let satisfied = document.querySelector('#satisfiedCounter')
    let current = 0;
    let end = 1000;

    let animating = setInterval(function(){
      current++;
      satisfied.innerHTML = current;
      if(current === end){
        clearInterval(animating);
      }
    }, 1)
}

window.onbeforeunload = ()=> {
  window.scrollTo(0, 0);
}
