document.addEventListener('DOMContentLoaded', () => {
    // Preloader animation
    const loader = document.querySelector('.loader');
    const mainContent = document.querySelector('.main-content');
    const audioWave = document.querySelector('.audio-wave');
    
    // Create audio wave elements
    for (let i = 0; i < 10; i++) {
        const bar = document.createElement('span');
        bar.style.animationDelay = `${i * 0.1}s`;
        audioWave.appendChild(bar);
    }
    
    // Simulate loading
    setTimeout(() => {
        gsap.to(loader, {
            opacity: 0,
            duration: 1,
            onComplete: () => {
                loader.style.display = 'none';
                mainContent.style.display = 'block';
                initAnimations();
                initParticles();
            }
        });
    }, 3000);
    
    // Initialize animations
    function initAnimations() {
        // Logo animation
        const logo = document.getElementById('main-logo');
        logo.addEventListener('mouseover', () => {
            gsap.to(logo, {
                textShadow: '0 0 20px var(--secondary)',
                duration: 0.3,
                yoyo: true,
                repeat: 1
            });
        });
        
        // Play button animation
        const playBtn = document.getElementById('play-btn');
        const demoAudio = document.getElementById('demo-track');
        let isPlaying = false;
        
        playBtn.addEventListener('click', () => {
            if (isPlaying) {
                demoAudio.pause();
                demoAudio.currentTime = 0;
                playBtn.textContent = '▶ PLAY DEMO';
            } else {
                demoAudio.play();
                playBtn.textContent = '❚❚ PAUSE';
            }
            isPlaying = !isPlaying;
        });
        
        // Nav link animations
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('mouseover', () => {
                gsap.to(link, {
                    scale: 1.1,
                    duration: 0.3
                });
            });
            
            link.addEventListener('mouseout', () => {
                gsap.to(link, {
                    scale: 1,
                    duration: 0.3
                });
            });
        });
        
        // Section entrance animations
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            gsap.from(section, {
                opacity: 0,
                y: 50,
                duration: 1,
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            });
        });
        
        // Back to top button animation
        const backToTop = document.querySelector('.back-to-top');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                gsap.to(backToTop, {
                    opacity: 1,
                    duration: 0.3
                });
            } else {
                gsap.to(backToTop, {
                    opacity: 0,
                    duration: 0.3
                });
            }
        });
        
        // Form input animations
        const formInputs = document.querySelectorAll('.form-input');
        formInputs.forEach(input => {
            input.addEventListener('focus', () => {
                gsap.to(input, {
                    boxShadow: '0 0 10px rgba(0, 240, 255, 0.7)',
                    duration: 0.3
                });
            });
            
            input.addEventListener('blur', () => {
                gsap.to(input, {
                    boxShadow: 'none',
                    duration: 0.3
                });
            });
        });
        
        // Contact form submission
        const contactForm = document.getElementById('contact-form');
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('.submit-btn');
            
            gsap.to(submitBtn, {
                backgroundColor: 'var(--secondary)',
                color: 'var(--dark)',
                duration: 0.3
            });
            
            setTimeout(() => {
                alert('Message sent! Danyk(ass) will get back to you soon.');
                contactForm.reset();
                gsap.to(submitBtn, {
                    backgroundColor: 'var(--primary)',
                    color: 'var(--light)',
                    duration: 0.3
                });
            }, 1000);
        });
    }
    
    // Initialize particle.js background
    function initParticles() {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#6e00ff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#6e00ff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }
    
    // Dynamic content loading (example - you would replace with actual data)
    function loadDynamicContent() {
        // Example album data
        const albums = [
            { title: "SICK BEATS", date: "2023", cover: "https://via.placeholder.com/300x300" },
            { title: "DARK WAVES", date: "2022", cover: "https://via.placeholder.com/300x300" },
            { title: "NEON DREAMS", date: "2021", cover: "https://via.placeholder.com/300x300" },
            { title: "GLITCH HOP", date: "2020", cover: "https://via.placeholder.com/300x300" }
        ];
        
        const albumGrid = document.querySelector('.album-grid');
        albums.forEach(album => {
            const albumItem = document.createElement('div');
            albumItem.className = 'album-item';
            albumItem.innerHTML = `
                <img src="${album.cover}" alt="${album.title}" class="album-cover">
                <div class="album-info">
                    <h3 class="album-title">${album.title}</h3>
                    <p class="album-date">${album.date}</p>
                </div>
            `;
            albumGrid.appendChild(albumItem);
            
            // Add hover animation
            albumItem.addEventListener('mouseover', () => {
                gsap.to(albumItem.querySelector('.album-cover'), {
                    scale: 1.05,
                    duration: 0.5
                });
            });
            
            albumItem.addEventListener('mouseout', () => {
                gsap.to(albumItem.querySelector('.album-cover'), {
                    scale: 1,
                    duration: 0.5
                });
            });
        });
        
        // Example video data
        const videos = [
            { title: "LIVE SET 2023", thumb: "https://via.placeholder.com/300x200" },
            { title: "BEHIND THE SCENES", thumb: "https://via.placeholder.com/300x200" },
            { title: "STUDIO SESSION", thumb: "https://via.placeholder.com/300x200" },
            { title: "INTERVIEW", thumb: "https://via.placeholder.com/300x200" }
        ];
        
        const videoGrid = document.querySelector('.video-grid');
        videos.forEach(video => {
            const videoItem = document.createElement('div');
            videoItem.className = 'video-item';
            videoItem.innerHTML = `
                <img src="${video.thumb}" alt="${video.title}" class="video-thumbnail">
                <div class="video-play-icon">▶</div>
            `;
            videoGrid.appendChild(videoItem);
            
            // Add hover animation
            videoItem.addEventListener('mouseover', () => {
                gsap.to(videoItem.querySelector('.video-play-icon'), {
                    scale: 1.2,
                    duration: 0.3
                });
            });
            
            videoItem.addEventListener('mouseout', () => {
                gsap.to(videoItem.querySelector('.video-play-icon'), {
                    scale: 1,
                    duration: 0.3
                });
            });
        });
    }
    
    // Load dynamic content after page is ready
    setTimeout(loadDynamicContent, 1000);
});
document.getElementById('contact-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const msgBox = document.getElementById('form-message');
    msgBox.textContent = 'Sending...';
    
    try {
        const response = await fetch('send_mail.php', {
            method: 'POST',
            body: formData,
        });
        const result = await response.json();
        msgBox.textContent = result.message;
        if (result.success) {
            form.reset();
        }
    } catch (err) {
        msgBox.textContent = 'An error occurred. Please try again later.';
    }
});
