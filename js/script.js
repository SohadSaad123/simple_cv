const navs=document.querySelectorAll('.nav-link');

let coll=document.getElementById('mainnav');

navs.forEach(na => {

    na.addEventListener('click',function(){
    let actives=document.querySelectorAll('.active');
     if(actives.length>0)
        actives.forEach(a => {a.classList.remove('active');
                             })
        na.classList.add('active');
        coll.classList.remove('show');

    })
}
);


let sti=document.getElementById('forsticky');

let btn=document.getElementById('gotop')

window.addEventListener('scroll',function(){
    if(window.scrollY>70){
        sti.classList.add('sticky');
       
        btn.style.display="block";

    }
    else 
       {sti.classList.remove('sticky');
       
        btn.style.display="none";
       }
})

btn.addEventListener('click',function(){
    scrollTo(0,0);
})




const sections = document.querySelectorAll('.sec');

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
  // Get current scroll position
  let scrollY = window.pageYOffset;
  
  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop -200;
    sectionId = current.getAttribute("id");
    
    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector(".navigation a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".navigation a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}