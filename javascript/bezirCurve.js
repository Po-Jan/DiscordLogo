function bezier() {
  const canvas = document.getElementById("platno");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  delayButton();

 const pathSegments = [
    { moveTo: [216.856339, 16.5966031] },
    { bezierTo: [200.285002, 8.84328665, 182.566144, 3.2084988, 164.041564, 0] },
    { bezierTo: [161.766523, 4.11318106, 159.108624, 9.64549908, 157.276099, 14.0464379] },
    { bezierTo: [137.583995, 11.0849896, 118.072967, 11.0849896, 98.7430163, 14.0464379] },
    { bezierTo: [96.9108417, 9.64549908, 94.1925838, 4.11318106, 91.8971895, 0] },
    { bezierTo: [73.3526068, 3.2084988, 55.6133949, 8.86399117, 39.0420583, 16.6376612] },
    { bezierTo: [5.61752293, 67.146514, -3.4433191, 116.400813, 1.08711069, 164.955721] },
    { bezierTo: [23.2560196, 181.510915, 44.7403634, 191.567697, 65.8621325, 198.148576] },
    { bezierTo: [71.0772151, 190.971126, 75.7283628, 183.341335, 79.7352139, 175.300261] },
    { bezierTo: [72.104019, 172.400575, 64.7949724, 168.822202, 57.8887866, 164.667963] },
    { bezierTo: [59.7209612, 163.310589, 61.5131304, 161.891452, 63.2445898, 160.431257] },
    { bezierTo: [105.36741, 180.133187, 151.134928, 180.133187, 192.754523, 160.431257] },
    { bezierTo: [194.506336, 161.891452, 196.298154, 163.310589, 198.110326, 164.667963] },
    { bezierTo: [191.183787, 168.842556, 183.854737, 172.420929, 176.223542, 175.320965] },
    { bezierTo: [180.230393, 183.341335, 184.861538, 190.991831, 190.096624, 198.16893] },
    { bezierTo: [211.238746, 191.588051, 232.743023, 181.531619, 254.911949, 164.955721] },
    { bezierTo: [260.227747, 108.668201, 245.831087, 59.8662432, 216.856339, 16.5966031] },
    { closePath: true },

    { moveTo: [85.4738752, 135.09489] },
    { bezierTo: [72.8290281, 135.09489, 62.4592217, 123.290155, 62.4592217, 108.914901] },
    { bezierTo: [62.4592217, 94.5396472, 72.607595, 82.7145587, 85.4738752, 82.7145587] },
    { bezierTo: [98.3405064, 82.7145587, 108.709962, 94.5189427, 108.488529, 108.914901] },
    { bezierTo: [108.508531, 123.290155, 98.3405064, 135.09489, 85.4738752, 135.09489] },
    { closePath: true },

    { moveTo: [170.525237, 135.09489] },
    { bezierTo: [157.88039, 135.09489, 147.510584, 123.290155, 147.510584, 108.914901] },
    { bezierTo: [147.510584, 94.5396472, 157.658606, 82.7145587, 170.525237, 82.7145587] },
    { bezierTo: [183.391518, 82.7145587, 193.761324, 94.5189427, 193.539891, 108.914901] },
    { bezierTo: [193.539891, 123.290155, 183.391518, 135.09489, 170.525237, 135.09489] },
    { closePath: true }
];

  
let step = 0; 
ctx.beginPath();

function renderSegment() { 
  const part = pathSegments[step]; 
  if (part.moveTo) {
    ctx.moveTo(...part.moveTo);
  }
  if (part.bezierTo) {
    ctx.bezierCurveTo(...part.bezierTo);
  }
  ctx.strokeStyle = "#5865F2";
  ctx.lineWidth = 2; 
  ctx.stroke();

  step++;
  if (step < pathSegments.length) {
    setTimeout(renderSegment, 50);
  } else {
    ctx.fillStyle = "#5865F2"; 
    ctx.fill();
  }
}
renderSegment();

function delayButton() {
  const button = document.querySelector("#animateButton");


  button.disabled = true;

 
  setTimeout(() => {
    button.disabled = false;
  }, 1700); 
}
}