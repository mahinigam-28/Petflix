const moviesPage1 = [
    { title: 'Mission Impossible Fallout', poster: 'Mission Impossible Fallout.jpg', video: 'https://dpsbokaro-my.sharepoint.com/:v:/g/personal/mahinigam11b_dpsbokaro_onmicrosoft_com/ET70-yYBnrZGjSCk2OvR2IMBUz64NZn3nk0JWUbri6duwg' },

    { title: 'Mission Impossible Ghost Protocol', poster: 'Mission Impossible Ghost Protocol.jpg', video: 'https://dpsbokaro-my.sharepoint.com/:v:/g/personal/mahinigam11b_dpsbokaro_onmicrosoft_com/EXArZ-nslbVKgDFDspINP7AB0ZU2_p-12iO-7HgTVF5gqw' },

    { title: 'Mission Impossible Rogue Nation', poster: 'Mission Impossible Rogue Nation.jpg', video: 'https://dpsbokaro-my.sharepoint.com/:v:/g/personal/mahinigam11b_dpsbokaro_onmicrosoft_com/Ecx4-EZmwDhLs1bPl3_hKjkBhmFKfpQblpuqIABOJkdobg' },

    { title: 'Spiderman 2', poster: 'Spiderman 2.jpg', video: 'https://dpsbokaro-my.sharepoint.com/:v:/g/personal/mahinigam11b_dpsbokaro_onmicrosoft_com/EZvhNjaY48dGil7hgdM5hTEBYmabmqVNxmdk2X_a0qFKNg' },
];

function openVideoPageInNewWindow(videoUrl) {
    const videoWindow = window.open(videoUrl, '_blank');
    if (videoWindow) {
        videoWindow.focus();
    } else {
        alert('Popup blocked. Please allow popups for this website and try again.');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const playButtons = document.querySelectorAll('.play-button');

    playButtons.forEach(button => {
        button.addEventListener('click', () => {
            console.log('Button clicked!');
            const videoUrl = button.getAttribute('data-video-url');
            openVideoPageInNewWindow(videoUrl);
        });
    });
});


const movieList = document.querySelector('.movie-list');
moviesPage1.forEach(movie => {
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card');

    const img = document.createElement('img');
    img.src = movie.poster;
    img.alt = movie.title;

    const h2 = document.createElement('h2');
    h2.textContent = movie.title;

    const button = document.createElement('button');
    button.classList.add('play-button');
    button.textContent = 'Play';
    button.setAttribute('data-video-url', movie.video);

    movieCard.appendChild(img);
    movieCard.appendChild(h2);
    movieCard.appendChild(button);
    movieList.appendChild(movieCard);
});
