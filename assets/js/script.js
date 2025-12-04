// <!-- Pop up learn more button -->

    document.querySelectorAll('.learn-more-btn').forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();

            const title = this.getAttribute('data-title');
            const mediaUrl = this.getAttribute('data-image');
            const description = this.getAttribute('data-description');

            // Detect if media is a video
            const isVideo =
                mediaUrl.endsWith('.mp4') ||
                mediaUrl.endsWith('.webm') ||
                mediaUrl.endsWith('.ogg');

            // Auto-select correct media type
            const mediaHtml = isVideo
                ? `
                    <video autoplay muted loop controls controlsList="nodownload"
                        oncontextmenu="return false;"
                        style="width: 100%; border-radius: 8px; margin-bottom: 15px;">
                        <source src="${mediaUrl}" type="video/mp4">
                    </video>
                `
                : `
                    <img src="${mediaUrl}" 
                        alt="${title}"
                        oncontextmenu="return false;" 
                        draggable="false"
                        style="max-width: 100%; border-radius: 8px; margin-bottom: 15px; pointer-events: none;">
                `;

            Swal.fire({
                title: title,
                html: `
                    ${mediaHtml}
                    <p style="color: #ffffff; font-size: 14px; line-height: 1.5;">
                        ${description}
                    </p>
                `,
                background: '#1a1a1a',
                color: '#ffffff',
                showCloseButton: true,
                showConfirmButton: false,
                customClass: {
                    popup: 'slide-animation',
                },

                // Stop video when closing
                didClose: () => {
                    const vid = document.querySelector('video');
                    if (vid) vid.pause();
                }
            });
        });
    });
// <!-- Pop up learn more button -->


// <!-- Pop up info link -->

    document.querySelectorAll('.infoLink').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); 
    
            const title = this.getAttribute('data-title');
            const mediaUrl = this.getAttribute('data-image');
            const description = this.getAttribute('data-description');
    
            // Detect if file is a video
            const isVideo =
                mediaUrl.endsWith('.mp4') ||
                mediaUrl.endsWith('.webm') ||
                mediaUrl.endsWith('.ogg');
    
            // Prepare media HTML (video or image)
            const mediaHtml = isVideo
                ? `
                    <video autoplay muted loop controls controlsList="nodownload"
                        oncontextmenu="return false;"
                        style="width: 100%; border-radius: 8px; margin-bottom: 15px;">
                        <source src="${mediaUrl}" type="video/mp4">
                    </video>
                `
                : `
                    <img src="${mediaUrl}" 
                        alt="${title}" 
                        oncontextmenu="return false;"
                        draggable="false"
                        style="max-width: 100%; border-radius: 8px; margin-bottom: 15px; pointer-events: none;">
                `;
    
            // Show SweetAlert2 popup
            Swal.fire({
                title: title,
                html: `
                    ${mediaHtml}
                    <p style="color: #ffffff; font-size: 14px; line-height: 1.5;">${description}</p>
                `,
                confirmButtonText: 'Close',
                background: '#1a1a1a',
                color: '#ffffff',
                customClass: {
                    popup: 'custom-popup',
                    confirmButton: 'custom-button'
                },
    
                // Pause video when closing
                didClose: () => {
                    const vid = document.querySelector('video');
                    if (vid) vid.pause();
                }
            });
        });
    });

// <!-- Pop up info link -->



// <!-- Javascript Typing animation -->

    const typingElement = document.querySelector('.typing');
    const words = ['Developer ', 'Designer ', 'Freelancer ', 'Programmer '];
    let wordIndex = 0;
    let charIndex = 0;
    let currentWord = '';
    let isDeleting = false;

    function type() {
        currentWord = words[wordIndex];
        
        if (isDeleting) {
        typingElement.textContent = currentWord.substring(0, charIndex--);
        } else {
        typingElement.textContent = currentWord.substring(0, charIndex++);
        }

        let typingSpeed = isDeleting ? 100 : 150;

        if (!isDeleting && charIndex === currentWord.length) {
        typingSpeed = 1000; // pause at full word
        isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typingSpeed = 300;
        }

        setTimeout(type, typingSpeed);
    }

    document.addEventListener('DOMContentLoaded', type);

// <!-- Javascript Typing animation -->
