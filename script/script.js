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
window.addEventListener('scroll', check)

let checking = document.querySelector('#projectCounter')
let newe = checking.scrollTop()
console.log(newe)

function check (){
  if (window.pageYOffset >=2000){
    countUpProjects();
    window.removeEventListener('scroll', check)
  }
}

function countUpProjects () {
let customers = document.querySelector('#projectsCounter')
let current = 0;
let end = 2000;
let range = 2000/500;

  let animating = setInterval(function(){
    current++;
    customers.innerHTML = current;
    if(current === end){
      clearInterval(animating);
    }
  }, range)
}

function countUpSatisfied(){
  let customers = document.querySelector('#projectsCounter')
  let satisfied = document.querySelector('#satisfiedCounter')

  let newArray = [customers, satisfied]
  let done = newArray.forEach(elem=>{
    let current = 0;
    let end = elem.innerHTML;
    let range = elem.innerHTML/1000;

    let animating = setInterval(function(){
      current++;
      elem.innerHTML = current;
      if(current === 1000){
        clearInterval(animating);
      }
    }, range)
  })
}
