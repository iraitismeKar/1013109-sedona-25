var open=document.querySelector(".search-hotel-button"),form=document.querySelector(".search-hotel-form");form.classList.add("hotel-form-hide"),open.addEventListener("click",function(e){e.preventDefault(),form.classList.toggle("hotel-form-hide"),form.classList.toggle("hotel-form-show")});
