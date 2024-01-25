const modal = document.getElementById("discountModal");
const span = document.getElementsByClassName("close")[0];

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

span.onclick = function () {
  closeModal();
};

window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};
openModal();

const audioTriggerFirstPara = document.getElementById(
  "audioTrigger-first-para"
);
const firstAudio = document.getElementById("firstAudio");

audioTriggerFirstPara.addEventListener("click", function () {
  if (firstAudio.paused) {
    firstAudio.play();
  } else {
    firstAudio.pause();
  }
});
const audioTriggerSecondPara = document.getElementById(
  "audioTrigger-second-para-duplicate"
);
const secondAudio = document.getElementById("secondAudio");

audioTriggerSecondPara.addEventListener("click", function () {
  if (secondAudio.paused) {
    secondAudio.play();
  } else {
    secondAudio.pause();
  }
});
