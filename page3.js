const moviesPage1 = [
    { title: 'Spiderman 3', poster: 'Spiderman 3.jpg', video: 'https://dpsbokaro-my.sharepoint.com/:v:/g/personal/mahinigam11b_dpsbokaro_onmicrosoft_com/Ech7hrEvXi5Bp_cCBMSSJ8EBbqU79mCfLgGkpFy4XS7gFA' },

    { title: 'Spiderman', poster: 'Spiderman.jpg', video: 'https://dpsbokaro-my.sharepoint.com/:v:/g/personal/mahinigam11b_dpsbokaro_onmicrosoft_com/Ed08njr6TS1Kg0YF_lI-u_EBgKEwD8E7ndY4p1y8ur1rXw' },

    { title: 'The Batman', poster: 'The Batman.jpg', video: 'https://dpsbokaro-my.sharepoint.com/:v:/g/personal/mahinigam11b_dpsbokaro_onmicrosoft_com/EeMtJZCy9P5AtjtNCu49YpMBMKDePE02gWWyC2mJ7ywsgw' },

    { title: 'The Dark Knight Rises', poster: 'The Dark Knight Rises.jpg', video: 'https://dpsbokaro-my.sharepoint.com/:v:/g/personal/mahinigam11b_dpsbokaro_onmicrosoft_com/EfaWoMnFbcRCvAC04fS79KAB1YTeJOx9wfs-UyZFKqY6rA' },
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
