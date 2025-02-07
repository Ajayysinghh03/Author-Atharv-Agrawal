// Smooth Scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Image Modal Feature for Portfolio
const galleryItems = document.querySelectorAll('.gallery-item img');
const modal = document.createElement('div');
const modalImage = document.createElement('img');
const closeModal = document.createElement('span');

// Styling the modal (You can also add this directly to your CSS)
modal.style.position = 'fixed';
modal.style.top = '0';
modal.style.left = '0';
modal.style.width = '100%';
modal.style.height = '100%';
modal.style.background = 'rgba(0, 0, 0, 0.8)';
modal.style.display = 'flex';
modal.style.justifyContent = 'center';
modal.style.alignItems = 'center';
modal.style.zIndex = '1000';
modal.style.visibility = 'hidden';

// Styling the modal image
modalImage.style.maxWidth = '80%';
modalImage.style.maxHeight = '80%';

// Close button styling
closeModal.textContent = '×';
closeModal.style.position = 'absolute';
closeModal.style.top = '20px';
closeModal.style.right = '30px';
closeModal.style.fontSize = '3rem';
closeModal.style.color = 'white';
closeModal.style.cursor = 'pointer';

// Append the modal elements to the body
modal.appendChild(modalImage);
modal.appendChild(closeModal);
document.body.appendChild(modal);

// Open the modal when clicking on gallery images
galleryItems.forEach(image => {
    image.addEventListener('click', (e) => {
        modalImage.src = e.target.src;
        modal.style.visibility = 'visible';
    });
});

// Close the modal when clicking the close button or outside the image
closeModal.addEventListener('click', () => {
    modal.style.visibility = 'hidden';
});

modal.addEventListener('click', (e) => {
    if (e.target !== modalImage) {
        modal.style.visibility = 'hidden';
    }
});
