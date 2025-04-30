// Theme toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const themeSwitch = document.getElementById('theme-switch');
  const body = document.body;
  
  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeSwitch.checked = true;
  }
  
  // Toggle theme
  themeSwitch.addEventListener('change', function() {
    if (this.checked) {
      body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  });
  
  // Animate skill bars on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.getAttribute('style').split(':')[1];
      }
    });
  }, { threshold: 0.5 });
  
  // Observe all progress bars
  document.querySelectorAll('.progress').forEach(progress => {
    // Initially set width to 0
    const targetWidth = progress.style.width;
    progress.style.width = '0%';
    
    // After a small delay to allow for initial animation, set the observer
    setTimeout(() => {
      observer.observe(progress);
    }, 200);
  });
  
  // Hover effects for timeline items
  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.querySelector('.timeline-marker').style.transform = 'scale(1.2)';
    });
    
    item.addEventListener('mouseleave', function() {
      this.querySelector('.timeline-marker').style.transform = 'scale(1)';
    });
  });
  
  // Add hover effects for badges
  const badges = document.querySelectorAll('.badge');
  badges.forEach(badge => {
    badge.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px)';
      this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    });
    
    badge.addEventListener('mouseleave', function() {
      this.style.transform = '';
      this.style.boxShadow = '';
    });
  });
});