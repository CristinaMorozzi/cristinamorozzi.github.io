function preventScroll(e) {
  e.preventDefault();
  e.stopPropagation();

  return false;
}


toggle_modal = (trigger, target) => {
  trigger.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      target.classList.remove("hidden_element");
      if (target.classList.contains("show_element")) {
        target.classList.add("hide_element");
      } else {
        target.classList.remove("hide_element");
      }

      target.classList.toggle("show_element");
      document.querySelector("body").classList.toggle("stop_scroll");
    });
  });
};

let open_close_curriculum = document.querySelectorAll(".open_close_curriculum");
let curriculum = document.querySelector("#curriculum_cont");
toggle_modal(open_close_curriculum, curriculum);

let open_close_tariffe = document.querySelectorAll(".open_close_tariffe");
let tariffe = document.querySelector("#tariffe_cont");
toggle_modal(open_close_tariffe, tariffe);



// Change nav backround on page scroll

let scrollpos = window.scrollY;

const nav = document.querySelector("nav");
const logo_title = document.querySelector(".logo_title");
const nav_links = document.querySelector(".nav_links");

const nav_height = nav.offsetHeight;

const add_class_on_scroll = () => {
  logo_title.classList.add("change_title_background");
  nav_links.classList.add("change_navlinks_background");
  nav.classList.add("over");
};
const remove_class_on_scroll = () => {
  logo_title.classList.remove("change_title_background");
  nav_links.classList.remove("change_navlinks_background");
  nav.classList.remove("over");
};

window.addEventListener("scroll", function () {
  scrollpos = window.scrollY;

  if (scrollpos >= nav_height) {
    add_class_on_scroll();
  } else {
    remove_class_on_scroll();
  }
});

// Style nav link on click

let all_navlinks = document.querySelectorAll(".navlink");

all_navlinks.forEach((all_navlinks) => {
  all_navlinks.addEventListener("click", () => {
    let this_navlink = all_navlinks.id;

    let all_other_navlinks = document.querySelectorAll(".navlink");

    all_other_navlinks.forEach((all_other_navlinks) => {
      if (all_other_navlinks.id == this_navlink) {
        all_other_navlinks.classList.add("was_clicked");
      } else {
        all_other_navlinks.classList.remove("was_clicked");
      }
    });
  });
});


// Nav Menu Dropdown

let nav_menu_btn = document.querySelectorAll('.nav_menu');
let nav_dropdown = document.querySelector('#nav_dropdown');
let style = window.getComputedStyle(nav_dropdown);



nav_menu_btn.forEach((nav_menu_btn) => {
    
        nav_menu_btn.addEventListener("click", ()=>{

            let screen_size = style.getPropertyValue('--size');
            
            if(screen_size == 1){
            nav_dropdown.classList.remove("initial");
            
            if (nav_dropdown.classList.contains("dropdown_down")) {
                nav_dropdown.classList.add("dropdown_up");
                setTimeout(() => {  
                    nav_dropdown.classList.add("initial");
                    nav_dropdown.classList.remove("dropdown_up"); 
                }, 500);
                
              } else {
                nav_dropdown.classList.remove("dropdown_up");
              }
            nav_dropdown.classList.toggle("dropdown_down");
            }
            else{
                nav_dropdown.classList.remove("dropdown_up");
                nav_dropdown.classList.add("initial");
            }
        })
    
    
})

// Close menu by clicking everywhere on the page 
document.addEventListener('click', (e)=>{
    if(nav_dropdown.classList.contains("dropdown_down")){
        if(e.target != document.querySelector('#nav_menu_btn')){
            nav_dropdown.classList.add("dropdown_up");
            nav_dropdown.classList.remove("dropdown_down");
        }
    }
})


