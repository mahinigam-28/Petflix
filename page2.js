const moviesPage1 = [
  {
    title: "Mission Impossible Fallout",
    poster: "Posters/Mission Impossible Fallout.jpg",
    video:
      "https://dpsbokaro-my.sharepoint.com/:v:/g/personal/mahinigam11b_dpsbokaro_onmicrosoft_com/ET70-yYBnrZGjSCk2OvR2IMBUz64NZn3nk0JWUbri6duwg",
  },

  {
    title: "Mission Impossible Ghost Protocol",
    poster: "Posters/Mission Impossible Ghost Protocol.jpg",
    video:
      "https://dpsbokaro-my.sharepoint.com/:v:/g/personal/mahinigam11b_dpsbokaro_onmicrosoft_com/EXArZ-nslbVKgDFDspINP7AB0ZU2_p-12iO-7HgTVF5gqw",
  },

  {
    title: "Mission Impossible Rogue Nation",
    poster: "Posters/Mission Impossible Rogue Nation.jpg",
    video:
      "https://dpsbokaro-my.sharepoint.com/:v:/g/personal/mahinigam11b_dpsbokaro_onmicrosoft_com/Ecx4-EZmwDhLs1bPl3_hKjkBhmFKfpQblpuqIABOJkdobg",
  },

  {
    title: "Spiderman 2",
    poster: "Posters/Spiderman 2.jpg",
    video:
      "https://dpsbokaro-my.sharepoint.com/:v:/g/personal/mahinigam11b_dpsbokaro_onmicrosoft_com/EZvhNjaY48dGil7hgdM5hTEBYmabmqVNxmdk2X_a0qFKNg",
  },
];

function openVideoPageInNewWindow(videoUrl) {
  const videoWindow = window.open(videoUrl, "_blank");
  if (videoWindow) {
    videoWindow.focus();
  } else {
    alert("Popup blocked. Please allow popups for this website and try again.");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const playButtons = document.querySelectorAll(".play-button");

  playButtons.forEach((button) => {
    button.addEventListener("click", () => {
      console.log("Button clicked!");
      const videoUrl = button.getAttribute("data-video-url");
      openVideoPageInNewWindow(videoUrl);
    });
  });
});
