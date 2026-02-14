document.addEventListener("DOMContentLoaded", function () {
  var audio = document.getElementById("jeffAudio");

  if (audio) {
    audio.volume = 0.3;

    var playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise
        .then((_) => {
          console.log("Audio reproduciéndose correctamente.");
        })
        .catch((error) => {
          console.log(
            "El navegador bloqueó el autoplay. El usuario debe interactuar primero.",
          );
        });
    }
  }

  const imgFrame = document.querySelector(".jeff-img-frame");

  if (imgFrame) {
    setInterval(() => {
      if (Math.random() > 0.9) {
        imgFrame.style.transform = `rotate(${Math.random() * 4 - 2}deg) scale(1.02)`;
        setTimeout(() => {
          imgFrame.style.transform = "rotate(-2deg)";
        }, 100);
      }
    }, 2000);
  }
});
