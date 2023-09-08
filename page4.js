const moviesPage1 = [
    { title: 'The Dark Knight', poster: 'The Dark Knight.jpg', video: 'https://dpsbokaro-my.sharepoint.com/:v:/g/personal/mahinigam11b_dpsbokaro_onmicrosoft_com/EUMjCg8xMPBNk3lYG2TMCHUBo8q3tGs2Wofurh0-LBEq_Q' },

    { title: 'Top Gun Maverick', poster: 'Top Gun Maverick.jpg', video: 'https://dpsbokaro-my.sharepoint.com/:v:/g/personal/mahinigam11b_dpsbokaro_onmicrosoft_com/Ef98YfPTYrtLm2I5znJfVLUBNFuZ0nm7VIrAx2WaGJweQQ' },
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
