const movies = [
    { title: 'Batman Begins', poster: 'Batman Begins.jpg', video: 'https://dpsbokaro-my.sharepoint.com/:v:/g/personal/mahinigam11b_dpsbokaro_onmicrosoft_com/ES_QytFFv_BLiPQHh9mG5TQBQbXHVDZPRVT6PcERY45uqA' },

    { title: 'Dune', poster: 'Dune.jpg', video: 'https://dpsbokaro-my.sharepoint.com/:v:/g/personal/mahinigam11b_dpsbokaro_onmicrosoft_com/ERARDJ6mqRNOhCMrcPnsIzwBHXO24wW978nC14qihUajkg' },

    { title: 'Knives Out', poster: 'Knives Out.jpg', video: 'https://dpsbokaro-my.sharepoint.com/:v:/g/personal/mahinigam11b_dpsbokaro_onmicrosoft_com/EcyKR30koaVNinSpJV83NO8BAG5F7iDTJ2UlDkwdMQXzuw' },

    { title: 'Man Of Steel', poster: 'Man Of Steel.jpg', video: 'https://dpsbokaro-my.sharepoint.com/:v:/g/personal/mahinigam11b_dpsbokaro_onmicrosoft_com/EcHHsQj8BOBKhV8Ii6tfMGcBzJx1kpH13RLWnkTf9IiCDw' },

    { title: 'Mission Impossible Fallout', poster: 'Mission Impossible Fallout.jpg', video: 'https://dpsbokaro-my.sharepoint.com/:v:/g/personal/mahinigam11b_dpsbokaro_onmicrosoft_com/ET70-yYBnrZGjSCk2OvR2IMBUz64NZn3nk0JWUbri6duwg' },

    { title: 'Mission Impossible Ghost Protocol', poster: 'Mission Impossible Ghost Protocol.jpg', video: 'https://dpsbokaro-my.sharepoint.com/:v:/g/personal/mahinigam11b_dpsbokaro_onmicrosoft_com/EXArZ-nslbVKgDFDspINP7AB0ZU2_p-12iO-7HgTVF5gqw' },

    { title: 'Mission Impossible Rogue Nation', poster: 'Mission Impossible Rogue Nation.jpg', video: 'https://dpsbokaro-my.sharepoint.com/:v:/g/personal/mahinigam11b_dpsbokaro_onmicrosoft_com/Ecx4-EZmwDhLs1bPl3_hKjkBhmFKfpQblpuqIABOJkdobg' },

    { title: 'Spiderman 2', poster: 'Spiderman 2.jpg', video: 'https://dpsbokaro-my.sharepoint.com/:v:/g/personal/mahinigam11b_dpsbokaro_onmicrosoft_com/EZvhNjaY48dGil7hgdM5hTEBYmabmqVNxmdk2X_a0qFKNg' },

    { title: 'Spiderman 3', poster: 'Spiderman 3.jpg', video: 'https://dpsbokaro-my.sharepoint.com/:v:/g/personal/mahinigam11b_dpsbokaro_onmicrosoft_com/Ech7hrEvXi5Bp_cCBMSSJ8EBbqU79mCfLgGkpFy4XS7gFA' },

    { title: 'Spiderman', poster: 'Spiderman.jpg', video: 'https://dpsbokaro-my.sharepoint.com/:v:/g/personal/mahinigam11b_dpsbokaro_onmicrosoft_com/Ed08njr6TS1Kg0YF_lI-u_EBgKEwD8E7ndY4p1y8ur1rXw' },

    { title: 'The Batman', poster: 'The Batman.jpg', video: 'https://dpsbokaro-my.sharepoint.com/:v:/g/personal/mahinigam11b_dpsbokaro_onmicrosoft_com/EeMtJZCy9P5AtjtNCu49YpMBMKDePE02gWWyC2mJ7ywsgw' },

    { title: 'The Dark Knight Rises', poster: 'The Dark Knight Rises.jpg', video: 'https://dpsbokaro-my.sharepoint.com/:v:/g/personal/mahinigam11b_dpsbokaro_onmicrosoft_com/EfaWoMnFbcRCvAC04fS79KAB1YTeJOx9wfs-UyZFKqY6rA' },

    { title: 'The Dark Knight', poster: 'The Dark Knight.jpg', video: 'https://dpsbokaro-my.sharepoint.com/:v:/g/personal/mahinigam11b_dpsbokaro_onmicrosoft_com/EUMjCg8xMPBNk3lYG2TMCHUBo8q3tGs2Wofurh0-LBEq_Q' },

    { title: 'Top Gun Maverick', poster: 'Top Gun Maverick.jpg', video: 'https://dpsbokaro-my.sharepoint.com/:v:/g/personal/mahinigam11b_dpsbokaro_onmicrosoft_com/Ef98YfPTYrtLm2I5znJfVLUBNFuZ0nm7VIrAx2WaGJweQQ' },

    { title: 'Zack Snyder\'s Justice League', poster: 'Zack Snyder\'s Justice League.jpg', video: 'https://dpsbokaro-my.sharepoint.com/:v:/g/personal/mahinigam11b_dpsbokaro_onmicrosoft_com/Ea-o4Ul5WNJGniyNwk5wQtQBj5-2h-o3DpMEjarQfBaKIA' },
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
