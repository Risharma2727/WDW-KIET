// Placeholder for interactivity
// Highlight navigation based on scroll position
document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
  
    sections.forEach((section, index) => {
      const top = section.getBoundingClientRect().top;
      if (top >= 0 && top < 300) {
        navLinks.forEach(link => link.classList.remove('active'));
        navLinks[index].classList.add('active');
      }
    });
  });
  <p>
  <a href="https://www.bing.com/ck/a?!&&p=c537fe889505453140c870cfcd7bd012892370f0a4ef0f38952dce3ce0a22694JmltdHM9MTczMjIzMzYwMA&ptn=3&ver=2&hsh=4&fclid=1b7a2ced-7bef-68aa-3365-39f47a1d6939&u=a1aHR0cHM6Ly93d3cuYmluZy5jb20vYWxpbmsvbGluaz91cmw9aHR0cHMlM2ElMmYlMmZudGEuYWMuaW4lMmYmc291cmNlPXNlcnAtbG9jYWwmaD1qSE9KbHBWa0VPcUJoQ3NOZ2lwMiUyZjdHNyUyZkhQVzhNZSUyYmwzZiUyZll5dWU4MTAlM2QmcD1sd190cCZpZz0xOUQ1NTFFQUE2RkM0OTQ5QTc2NTMxM0RFQkM4NDQ3NiZ5cGlkPVlONDA3MHg1MjIxNjU4ODMwOTQ0NTIwOTg2&ntb=1e" target="_blank">View on Google Maps</a>
</p>