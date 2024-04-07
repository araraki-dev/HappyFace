document.getElementById('openFormLink').addEventListener('click', function() {
    document.getElementById('registrationForm').style.display = 'block';
  });
  
  document.getElementsByClassName('close')[0].addEventListener('click', function() {
    document.getElementById('registrationForm').style.display = 'none';
  });
  
  window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('registrationForm')) {
      document.getElementById('registrationForm').style.display = 'none';
    }
  });

  
function SubForm (){
  $.ajax({
    url:"https://api.apispreadsheets.com/data/NMA1EtG9r4Puygf1/",
    type:"post",
    data:$("#myForm").serializeArray(),
    success: function(){
      alert("There was an error :(")
    },
    error: function(){
      alert("Form Data Submitted :)")
    }
  });
}


function SubForm2 (){
    $.ajax({
      url:"https://api.apispreadsheets.com/data/DHbesV9fTNKpRRj9/",
      type:"post",
      data:$("#myForM").serializeArray(),
      success: function(){
        alert("Form Data Submitted :)")
      },
      error: function(){
        alert("There was an error :(")
      }
    });
  }

const openModalBtn = document.getElementById("openModalBtn");
const modal = document.getElementById("myModal");
const closeBtn = document.querySelector(".closi");
const registrationForm = document.getElementById("registrationForm");

openModalBtn.addEventListener("click", function() {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});


const searchInput = document.getElementById("searchInput");
const mastersContainer = document.querySelector(".masters-container");
const masters = document.querySelector(".masters");


searchInput.addEventListener("input", function() {
  const searchValue = searchInput.value.toLowerCase();
  const masterBlocks = masters.querySelectorAll(".master");
  
  masterBlocks.forEach(function(masterBlock) {
    const masterName = masterBlock.querySelector("h3").innerText.toLowerCase();
    if (masterName.includes(searchValue)) {
      masterBlock.style.display = "block";
    } else {
      masterBlock.style.display = "none";
    }
  });
});

const searchInputSalons = document.getElementById("searchInputSalons");
const salonsContainer = document.querySelector(".salons-container");
const salons = document.querySelector(".salons");

searchInputSalons.addEventListener("input", function() {
  const searchValue = searchInputSalons.value.toLowerCase();
  const salonBlocks = salons.querySelectorAll(".salon");
  
  salonBlocks.forEach(function(salonBlock) {
    const salonName = salonBlock.querySelector("h3").innerText.toLowerCase();
    if (salonName.includes(searchValue)) {
      salonBlock.style.display = "block";
    } else {
      salonBlock.style.display = "none";
    }
  });
});


document.addEventListener('DOMContentLoaded', function() {
    const menuLabel = document.querySelector('.menu-label');
    const navLinks = document.querySelector('.nav-links');

    menuLabel.addEventListener('click', function() {
        navLinks.classList.toggle('active'); 
       });
});
