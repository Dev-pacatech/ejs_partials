document.addEventListener('DOMContentLoaded', function () {
    const toggler = document.querySelector('.navbar-toggler');
    const menu = document.getElementById('navbarSupportedContent');
  
    toggler.addEventListener('click', function () {
      // Toggle the 'show' class on the menu
      menu.classList.toggle('show');
      
      // Toggle the aria-expanded attribute
      const expanded = toggler.getAttribute('aria-expanded') === 'true' || false;
      toggler.setAttribute('aria-expanded', !expanded);
    });
  });


