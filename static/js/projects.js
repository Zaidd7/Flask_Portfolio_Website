document.addEventListener('DOMContentLoaded', () => {
    const cube = document.querySelector('.cube');
    const rotateLeft = document.getElementById('rotate-left');
    const rotateRight = document.getElementById('rotate-right');
    let currentRotation = 0;

    if (cube && rotateLeft && rotateRight) {
        rotateLeft.addEventListener('click', () => {
            currentRotation -= 90;
            cube.style.transform = `translateZ(-150px) rotateY(${currentRotation}deg)`;
        });

        rotateRight.addEventListener('click', () => {
            currentRotation += 90;
            cube.style.transform = `translateZ(-150px) rotateY(${currentRotation}deg)`;
        });

        // Enable drag rotation
        let isDragging = false;
        let startX;
        let startY;
        let startRotationX = 0;
        let startRotationY = 0;

        cube.addEventListener('mousedown', startDrag);
        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', stopDrag);

        function startDrag(e) {
            isDragging = true;
            startX = e.clientX;
            startY = e.clientY;
            startRotationY = currentRotation;
            startRotationX = cube.style.transform.includes('rotateX') 
                ? parseInt(cube.style.transform.split('rotateX(')[1]) 
                : 0;
        }

        function drag(e) {
            if (!isDragging) return;
            const deltaX = e.clientX - startX;
            const deltaY = e.clientY - startY;
            currentRotation = startRotationY + deltaX * 0.5;
            const rotationX = startRotationX - deltaY * 0.5;
            cube.style.transform = `translateZ(-150px) rotateY(${currentRotation}deg) rotateX(${rotationX}deg)`;
        }

        function stopDrag() {
            isDragging = false;
        }
    } else {
        console.error('One or more elements not found');
    }

    // Modal functionality
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalLink = document.getElementById('modal-link');
    const closeBtn = document.getElementsByClassName('close')[0];

    // Project data (you can expand this with more details)
    const projects = {
        'Ecom Website': {
            description: 'A fully functional e-commerce website with product listings, shopping cart, and checkout process.',
            link: '#'
        },
        'Weather Dashboard': {
            description: 'A weather application that provides current weather and forecasts for cities worldwide.',
            link: '#'
        },
        'Quote Generator': {
            description: 'An application that generates random quotes and allows users to share them on social media.',
            link: '#'
        },
        'Project 4': {
            description: 'Description of Project 4.',
            link: '#'
        },
        'Project 5': {
            description: 'Description of Project 5.',
            link: '#'
        },
        'Project 6': {
            description: 'Description of Project 6.',
            link: '#'
        }
    };

    // Add click event listeners to all "Learn More" buttons
    document.querySelectorAll('.cube-face .btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const projectTitle = this.closest('.cube-face').querySelector('h2').textContent;
            const project = projects[projectTitle];
            
            modalTitle.textContent = projectTitle;
            modalDescription.textContent = project.description;
            modalLink.href = project.link;
            
            modal.style.display = 'block';
        });
    });

    // Close the modal when clicking the close button
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }

    // Close the modal when clicking outside of it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});
