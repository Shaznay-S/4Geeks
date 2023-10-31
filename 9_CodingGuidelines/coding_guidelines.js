// JavaScript to handle lightbox opening and closing
document.addEventListener('DOMContentLoaded', (event) => {
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.className = 'lightbox';
    document.body.appendChild(lightbox);

    const images = document.querySelectorAll('.image-section img');
    images.forEach(image => {
        image.addEventListener('click', () => {
            lightbox.classList.add('active');
            const img = document.createElement('img');
            img.src = image.src;
            while (lightbox.firstChild) {
                lightbox.removeChild(lightbox.firstChild);
            }
            lightbox.appendChild(img);
        });
    });

    lightbox.addEventListener('click', e => {
        if (e.target !== e.currentTarget) return;
        lightbox.classList.remove('active');
    });

    // Like button interaction
    const likeBtn = document.querySelector('.like-btn');
    const heartIcon = likeBtn.querySelector('.heart-icon');
    likeBtn.addEventListener('click', () => {
        const isLiked = heartIcon.src.includes('heart-filled');
        heartIcon.src = isLiked ? '/Images/heart.svg' : '/Images/heart-filled.svg'; // Toggle the source
    });

    // Comment button interaction
    const commentBtn = document.querySelector('.comment-btn');
    const commentSection = document.querySelector('.comment-section');
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    commentBtn.addEventListener('click', () => {
        commentSection.classList.toggle('show');
        overlay.classList.toggle('show');
    });

    overlay.addEventListener('click', () => {
        commentSection.classList.remove('show');
        overlay.classList.remove('show');
    });

    // Bookmark button interaction
    const bookmarkBtn = document.querySelector('.bookmark-btn');
    const bookmarkIcon = bookmarkBtn.querySelector('.bookmark-icon');
    bookmarkBtn.addEventListener('click', () => {
        const isBookmarked = bookmarkIcon.src.includes('bookmark-filled');
        bookmarkIcon.src = isBookmarked ? '/Images/bookmark.svg' : '/Images/bookmark-filled.svg'; // Toggle the source
    });

});
