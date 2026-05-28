const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
},{threshold:0.1});

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const toggle = document.getElementById('themeToggle');
const logo = document.getElementById('logo');
const card_logo = document.getElementById('aboutLogo');
const footerLogo = document.getElementById('footerLogo');

// LOAD SAVED THEME
const savedTheme = localStorage.getItem('theme');

if(savedTheme === 'dark'){

  document.body.classList.add('dark');

  toggle.textContent = '☀';

  logo.src = "assets/nighttimelogo.png";
  card_logo.src = "assets/nighttimelogo.png";
  footerLogo.src = "assets/nighttimelogo.png";

}
else{

  document.body.classList.remove('dark');

  toggle.textContent = '☾';

  logo.src = "assets/daytimelogo.png";
  card_logo.src = "assets/daytimelogo.png";
  footerLogo.src = "assets/daytimelogo.png";
}

// TOGGLE THEME
toggle.addEventListener('click', () => {

  document.body.classList.toggle('dark');

  const dark = document.body.classList.contains('dark');

  toggle.textContent = dark ? '☀' : '☾';

  logo.src = dark
    ? "assets/nighttimelogo.png"
    : "assets/daytimelogo.png";
	
  card_logo.src = dark
    ? "assets/nighttimelogo.png"
    : "assets/daytimelogo.png";
	
  footerLogo.src = dark
    ? "assets/nighttimelogo.png"
    : "assets/daytimelogo.png";

  localStorage.setItem('theme', dark ? 'dark' : 'light');

});