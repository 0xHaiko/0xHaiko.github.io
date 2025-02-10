document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.custom-cursor');
    const coordinates = document.querySelector('.cursor-coordinates');

    if (cursor && coordinates) {
        document.addEventListener('mousemove', (e) => {
            requestAnimationFrame(() => {
                cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
                
                coordinates.textContent = `y/${e.clientY}\nx/${e.clientX}`;
            });
        });

        document.addEventListener('mouseout', () => {
            cursor.style.opacity = '0';
        });

        document.addEventListener('mouseover', () => {
            cursor.style.opacity = '1';
        });

        document.querySelectorAll('a, button').forEach(element => {
            element.addEventListener('mouseover', () => {
                cursor.classList.add('cursor-hover');
            });
            
            element.addEventListener('mouseout', () => {
                cursor.classList.remove('cursor-hover');
            });
        });
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

const projects = [
    {
        title: "Artix Bots",
        description: "Bot Discord",
        image: "https://media.discordapp.net/attachments/1198673778247479338/1226266181296590979/logo_anime_red.gif?ex=67a86620&is=67a714a0&hm=9cc71eac325dc864be7753424b67d4a1393d2b3dbb505185e4eff0585b412a2b&=",
        tags: ["JavaScript", "SQL"],
        link: "https://discord.gg/DByDqbU8gK"
    },
    {
        title: "Skull",
        description: "Multi-Tools",
        image: "https://via.placeholder.com/300x200",
        tags: ["Python"],
        link: "#"
    },
    {
        title: "Porfolio",
        description: "Réalisation d'un portfolio",
        image: "https://via.placeholder.com/300x200",
        tags: ["Vue.js", "Firebase"],
        link: "#"
    }
];

const projectsGrid = document.querySelector('.projects-grid');

projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    
    projectCard.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-tags">
            ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join(' / ')}
        </div>
        <a href="${project.link}" class="project-link" target="_blank">Voir le projet</a>
    `;
    
    projectsGrid.appendChild(projectCard);
});

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    nav.querySelectorAll('li').forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });

    burger.classList.toggle('toggle');
});

function generateASCIIBackground() {
    const ascii = document.querySelector('.background-ascii');
    if (!ascii) return;

    let background = '';
    const chars = '01';
    const width = Math.floor(window.innerWidth / 12);
    const height = Math.floor(window.innerHeight / 12);

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            background += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        background += '\n';
    }

    ascii.textContent = background;
}

generateASCIIBackground();
window.addEventListener('resize', generateASCIIBackground);