// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Project data
const projects = {
    project1: {
        title: "Creative Dashboard",
        details: `
            <h2 style="color: #0f172a; margin-bottom: 2rem;">Creative Dashboard</h2>
            <div style="margin: 2rem 0; line-height: 1.7;">
                <h3 style="color: #6366f1; margin: 2rem 0 1rem; font-weight: 600;">Project Overview</h3>
                <p style="color: #64748b; margin-bottom: 2rem;">A comprehensive analytics platform that transforms raw data into meaningful insights through thoughtful design and intuitive user experience. The dashboard empowers users to make data-driven decisions with confidence.</p>
                
                <h3 style="color: #6366f1; margin: 2rem 0 1rem; font-weight: 600;">Design Philosophy</h3>
                <ul style="margin-left: 1.5rem; color: #64748b; line-height: 1.8;">
                    <li>Clean, minimalist interface that reduces cognitive load</li>
                    <li>Progressive disclosure of information based on user needs</li>
                    <li>Consistent visual hierarchy and typography system</li>
                    <li>Accessible design following WCAG 2.1 guidelines</li>
                    <li>Mobile-first responsive design approach</li>
                </ul>
                
                <h3 style="color: #6366f1; margin: 2rem 0 1rem; font-weight: 600;">Technical Implementation</h3>
                <p style="color: #64748b; margin-bottom: 1rem;">Built with modern web technologies: React.js, TypeScript, D3.js for visualizations, Tailwind CSS for styling, and Node.js backend with real-time WebSocket connections.</p>
                
                <h3 style="color: #6366f1; margin: 2rem 0 1rem; font-weight: 600;">Impact & Results</h3>
                <p style="color: #64748b;">Increased user engagement by 65% and reduced time-to-insight by 40%. Users reported 85% satisfaction with the new interface design.</p>
            </div>
        `
    },
    project2: {
        title: "Mobile Commerce",
        details: `
            <h2 style="color: #0f172a; margin-bottom: 2rem;">Mobile Commerce Experience</h2>
            <div style="margin: 2rem 0; line-height: 1.7;">
                <h3 style="color: #6366f1; margin: 2rem 0 1rem; font-weight: 600;">Project Overview</h3>
                <p style="color: #64748b; margin-bottom: 2rem;">A complete reimagining of the mobile shopping experience, focusing on user journey optimization, accessibility, and conversion enhancement through thoughtful UX design.</p>
                
                <h3 style="color: #6366f1; margin: 2rem 0 1rem; font-weight: 600;">User Experience Focus</h3>
                <ul style="margin-left: 1.5rem; color: #64748b; line-height: 1.8;">
                    <li>Streamlined checkout process with guest options</li>
                    <li>Personalized product recommendations using ML</li>
                    <li>Advanced search with visual filters and suggestions</li>
                    <li>Seamless social authentication and payments</li>
                    <li>Offline-first PWA capabilities</li>
                </ul>
                
                <h3 style="color: #6366f1; margin: 2rem 0 1rem; font-weight: 600;">Design System</h3>
                <p style="color: #64748b; margin-bottom: 1rem;">Created a comprehensive design system with reusable components, consistent spacing, and a flexible color palette that scales across all touchpoints.</p>
                
                <h3 style="color: #6366f1; margin: 2rem 0 1rem; font-weight: 600;">Business Impact</h3>
                <p style="color: #64748b;">Achieved 45% increase in mobile conversion rates and 60% reduction in cart abandonment. Customer satisfaction scores improved by 30%.</p>
            </div>
        `
    },
    project3: {
        title: "Smart Interface",
        details: `
            <h2 style="color: #0f172a; margin-bottom: 2rem;">Smart Interface System</h2>
            <div style="margin: 2rem 0; line-height: 1.7;">
                <h3 style="color: #6366f1; margin: 2rem 0 1rem; font-weight: 600;">Project Overview</h3>
                <p style="color: #64748b; margin-bottom: 2rem;">An adaptive interface that learns from user behavior to provide personalized experiences while maintaining simplicity and elegance in design.</p>
                
                <h3 style="color: #6366f1; margin: 2rem 0 1rem; font-weight: 600;">Adaptive Features</h3>
                <ul style="margin-left: 1.5rem; color: #64748b; line-height: 1.8;">
                    <li>Dynamic content prioritization based on usage patterns</li>
                    <li>Contextual help and onboarding experiences</li>
                    <li>Intelligent notification management</li>
                    <li>Personalized dashboard layouts</li>
                    <li>Predictive user flow optimization</li>
                </ul>
                
                <h3 style="color: #6366f1; margin: 2rem 0 1rem; font-weight: 600;">Technology Stack</h3>
                <p style="color: #64748b; margin-bottom: 1rem;">Vue.js with Composition API, Machine Learning models for behavior analysis, GraphQL for data management, and cloud-based analytics infrastructure.</p>
                
                <h3 style="color: #6366f1; margin: 2rem 0 1rem; font-weight: 600;">User Outcomes</h3>
                <p style="color: #64748b;">Users completed tasks 50% faster and reported 80% higher satisfaction with the personalized experience. Reduced support tickets by 35%.</p>
            </div>
        `
    },
    project4: {
        title: "Digital Experience",
        details: `
            <h2 style="color: #0f172a; margin-bottom: 2rem;">Immersive Digital Experience</h2>
            <div style="margin: 2rem 0; line-height: 1.7;">
                <h3 style="color: #6366f1; margin: 2rem 0 1rem; font-weight: 600;">Project Overview</h3>
                <p style="color: #64748b; margin-bottom: 2rem;">A groundbreaking project that bridges digital and physical worlds through immersive storytelling, creating emotional connections between brands and users.</p>
                
                <h3 style="color: #6366f1; margin: 2rem 0 1rem; font-weight: 600;">Creative Approach</h3>
                <ul style="margin-left: 1.5rem; color: #64748b; line-height: 1.8;">
                    <li>Interactive storytelling with branching narratives</li>
                    <li>3D visualizations and spatial design elements</li>
                    <li>Multi-sensory feedback and haptic interactions</li>
                    <li>Augmented reality integration for enhanced engagement</li>
                    <li>Cross-platform consistency and accessibility</li>
                </ul>
                
                <h3 style="color: #6366f1; margin: 2rem 0 1rem; font-weight: 600;">Technical Innovation</h3>
                <p style="color: #64748b; margin-bottom: 1rem;">Leveraging WebGL, Three.js, WebXR APIs, and progressive enhancement to deliver cutting-edge experiences that work across all devices and capabilities.</p>
                
                <h3 style="color: #6366f1; margin: 2rem 0 1rem; font-weight: 600;">Cultural Impact</h3>
                <p style="color: #64748b;">Featured in major design publications and increased brand awareness by 200%. Won multiple industry awards for innovation and user experience excellence.</p>
            </div>
        `
    }
};

// Modal functions
function openModal(projectId) {
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    
    if (projects[projectId]) {
        modalBody.innerHTML = projects[projectId].details;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal on outside click
window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Email form
function sendEmail(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`Hi!\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\nBest regards,\n${name}`);
    const mailtoLink = `mailto:your.email@example.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    event.target.reset();
    
    // Success feedback
    const button = event.target.querySelector('.submit-btn');
    const originalText = button.textContent;
    button.textContent = 'Message Sent!';
    button.style.background = 'linear-gradient(135deg, #10b981, #059669)';
    
    setTimeout(() => {
        button.textContent = originalText;
        button.style.background = 'linear-gradient(135deg, #1e293b, #0f172a)';
    }, 2000);
}

// Navbar scroll effect
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.nav');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
        nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.9)';
        nav.style.boxShadow = 'none';
    }
    
    lastScrollTop = scrollTop;
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe project cards for animation
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});
