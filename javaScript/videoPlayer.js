var player = videojs("video-player", {
  autoplay: true,
  controls: true,
  poster: "images/video8.png",
  loop: true,
  fluid: true,
  playbackRates: [0.25, 0.5, 1, 1.5, 2, 2.5, 3],
});

player.ready(function () {
  this.hotkeys({
    volumeStep: 0.1,
    seekStep: 5,
    enableModifiersForNumbers: false,
  });
});

let comments = [
  [
    "https://yt3.ggpht.com/ytc/AKedOLT1lmIt8A6ow3R--s7RkFTfdxEBp8k_LLlpoy_X=s88-c-k-c0x00ffffff-no-rj",
    "DJ Joshwa",
    '"A ww2 m1 abrams tank" That phrase gave me brain hemorrhaging',
  ],
  [
    "https://yt3.ggpht.com/ytc/AKedOLQuUgKbYw6tsZ7mK87gEHfAI_vET5IQy-icxgrJ=s88-c-k-c0x00ffffff-no-rj",
    "Perma Bulk",
    "I remember watching this match. The tank was surprisingly agile"
  ],
  [
    "https://yt3.ggpht.com/ytc/AKedOLRr67ryOV1GvEqcRAxYA0c1n196EEnzRBdY28Vf7-YI_VZEI-oqiOwR55jUTMYb=s88-c-k-c0x00ffffff-no-rj",
    "Truth Hurts",
    `Oh look at that ; terrible sportsmanship'
    "That's Just not Cricket"
    "No, it's Tennis"`
  ]
];

let abc = document.querySelector(".details-comment-section");
let commentNumbers = document.querySelector(".comments-text");
commentNumbers.innerHTML += `(${comments.length})`;

for (comment of comments) {
    abc.innerHTML += `<div class="media">
    <img class="mr-3 commenter-dp" src=${comment[0]} alt="Generic placeholder image">
    <div class="media-body">
      <h5 class="mt-0">${comment[1]}</h5>
      ${comment[2]}
    </div>
    </div>`;
}