const slideshowImage = document.querySelector('.discImage');

const slideshowImagesArray = [
    '../css/disc/1-1.png',
    '../css/disc/2-1.png',
    '../css/disc/3-1.png',
    '../css/disc/4-1.png',
    '../css/disc/5-1.png',
    '../css/disc/6-1.png',
    '../css/disc/7-1.png',
    '../css/disc/8-1.png',
    '../css/disc/9-1.png',
    '../css/disc/10-1.png',
    '../css/disc/11-1.png',
    '../css/disc/12-1.png',
    '../css/disc/13-1.png',
    '../css/disc/14-1.png',
    '../css/disc/15-1.png',
    '../css/disc/16-1.png',
        '../css/disc/1-1.png',
    '../css/disc/2-1.png',
    '../css/disc/3-1.png',
    '../css/disc/4-1.png',
    '../css/disc/5-1.png',
    '../css/disc/6-1.png',
    '../css/disc/7-1.png',
];
slideshowImage.style.width="150px";
slideshowImage.style.height="130px";
slideshowImage.setAttribute('x', '1610');
slideshowImage.setAttribute('y', '1002');
let slideshowCurrentIndex = 0;
let slideshowIntervalId;

function updateSlideshowImage() {
    slideshowCurrentIndex = (slideshowCurrentIndex + 1) % slideshowImagesArray.length;
    slideshowImage.setAttribute('href', slideshowImagesArray[slideshowCurrentIndex]); // <-- key change
}

function startImageSlideshow() {
    clearInterval(slideshowIntervalId);  // prevent overlapping
    slideshowIntervalId = setInterval(updateSlideshowImage, 2);

    setTimeout(() => {
        clearInterval(slideshowIntervalId);
    }, 5000);
}





//changed code
//Your JavaScript goes in here
function openNav() {
    document.getElementById("mySidepanel").style.width = "500px";
    document.getElementById("mySidepanel").style.height = "100%";
}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}

// Button 1 move
const moveButton = document.getElementById('moveButton');
    const objectToMove = document.getElementById('objectToMove');
    const targetObject = document.getElementById('targetObject');

    function moveObject() {
        // Get the position of the target object
        const targetRect = targetObject.getBoundingClientRect();
        // const targetX = targetRect.left;
        // const targetY = targetRect.top;

        // Move the object to the target position
        objectToMove.style.transition = 'transform 2s ease'; // Add a smooth transition effect
        objectToMove.style.transform = `translate(-439px, -272px)`;
    }

    moveButton.addEventListener('click', moveObject);

    // Button 2 move
    // const moveButton2 = document.getElementById('moveButton2');
    // const objectToMove2 = document.getElementById('objectToMove2');
    // const targetObject2 = document.getElementById('targetObject2');

    // function moveObject2() {
    //     // Get the position of the target object
    //     const targetRect = targetObject.getBoundingClientRect();
    //     // const targetX = targetRect.left;
    //     // const targetY = targetRect.top;

    //     // Move the object to the target position
    //     objectToMove2.style.transition = 'transform 2s ease'; // Add a smooth transition effect
    //     objectToMove2.style.transform = `translate(-265px, -340px)`;
    // }

    // moveButton2.addEventListener('click', moveObject2);

    // Button 3 move
    const moveButton3 = document.getElementById('moveButton3');
    const objectToMove3 = document.getElementById('objectToMove3');
    const targetObject3 = document.getElementById('targetObject3');

    function moveObject3() {
        // Get the position of the target object
        const targetRect = targetObject.getBoundingClientRect();
        // const targetX = targetRect.left;
        // const targetY = targetRect.top;

        // Move the object to the target position
        objectToMove3.style.transition = 'transform 2s ease'; // Add a smooth transition effect
        objectToMove3.style.transform = `translate(1605px, 430px)`;
    }

    moveButton3.addEventListener('click', moveObject3);

    // Button 4 ball opicity
const moveButton4 = document.getElementById('moveButton4');
function moveObject4() {
    objectToMove3.style.opacity=0;
}
moveButton4.addEventListener('click', moveObject4);


// Button 5 move
const moveButton5 = document.getElementById('moveButton5');
    const objectToMove5 = document.getElementById('objectToMove5');
    const targetObject5 = document.getElementById('targetObject5');

    function moveObject5() {
        // Get the position of the target object
        const targetRect = targetObject.getBoundingClientRect();
        // const targetX = targetRect.left;
        // const targetY = targetRect.top;

        // Move the object to the target position
        objectToMove5.style.transition = 'transform 2s ease'; // Add a smooth transition effect
        objectToMove5.style.transform = `translate(-405px, -17px)`;
}

    moveButton5.addEventListener('click', moveObject5);

    // Button 6 move
    var flag_material1=false;
    var flag_material2=false;

const moveButton6 = document.getElementById('moveButton6');
const objectToMove6 = document.getElementById('objectToMove6');
const targetObject6 = document.getElementById('targetObject6');

function moveObject6() {
    flag_material1=true
    // Get the position of the target object
    const targetRect = targetObject.getBoundingClientRect();
    // const targetX = targetRect.left;
    // const targetY = targetRect.top;

    // Move the object to the target position
    objectToMove6.style.transition = 'transform 2s ease'; // Add a smooth transition effect
    objectToMove6.style.transform = `translate(345px, -715px)`;
}

moveButton6.addEventListener('click', moveObject6);


// Button 9 move
const moveButton9 = document.getElementById('moveButton9');
const objectToMove9 = document.getElementById('objectToMove9');
const targetObject9 = document.getElementById('targetObject9');

function moveObject9() {
    flag_material2=true
    // Get the position of the target object
    const targetRect = targetObject.getBoundingClientRect();
    // const targetX = targetRect.left;
    
    // const targetY = targetRect.top;

    // Move the object to the target position
    objectToMove9.style.transition = 'transform 2s ease'; // Add a smooth transition effect
    objectToMove9.style.transform = `translate(640px, -705px)`;
}

moveButton9.addEventListener('click', moveObject9);


// material button disable

moveButton6.addEventListener('click', () => {
    moveButton9.disabled = true;
    moveButton6.disabled = false;
});

moveButton9.addEventListener('click', () => {
    moveButton6.disabled = true;
    moveButton9.disabled = false;
});

// button one by one open


document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('button');
    
    function revealNextButton(currentButtonIndex) {
        if (currentButtonIndex < buttons.length - 1) {
            // buttons[currentButtonIndex].disabled = true;
            buttons[currentButtonIndex + 1].classList.remove('hidden');
        }
    }

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            revealNextButton(i);
      });
  }
});



// popup all Element

const svgContainer = document.getElementById("svgContainer");
const elementName = document.getElementById("elementName");

svgContainer.addEventListener("mouseover", (e) => {
    if (e.target.dataset.name) {
        elementName.innerText = e.target.dataset.name;
        elementName.style.left = e.clientX + "-5px";
        elementName.style.top = e.clientY + "-4px";
        elementName.style.display = "block";
    }
});

svgContainer.addEventListener("mouseout", () => {
    elementName.style.display = "none";
});



// rotation base

 // JavaScript code for the rotation animation
 const svgImages = document.querySelectorAll('.svg-image');
 const moveButton7 = document.getElementById('moveButton7');
 let currentIndex = 0;
 let intervalId;


  // Function to display the next SVG image
  function showNextImage() {
    svgImages[currentIndex].style.display = 'none'; // Hide the current image
    currentIndex = (currentIndex + 1) % svgImages.length; // Move to the next image
    svgImages[currentIndex].style.display = 'block'; // Display the next image
}

// Function to start the animation
function startAnimation() {
    intervalId = setInterval(showNextImage, 0.1); // Change the interval as needed (in milliseconds)
}

// Function to stop the animation after 5 seconds
function stopAnimation() {
    clearInterval(intervalId);
}

// Add a click event listener to start the animation
moveButton7.addEventListener('click', () => {
    startAnimation();
    setTimeout(stopAnimation, 5000); // Stop after 5 seconds (5000 milliseconds)
});
moveButton7.addEventListener('click', startImageSlideshow);

// JavaScript logic
const material1Button = document.getElementById('moveButton');
const material2Button = document.getElementById('moveButton2');
const moveButton8 = document.getElementById('moveButton8');
const resultContainer = document.getElementById('resultContainer');
const material1Photo = document.getElementById('material1Photo');
const material2Photo = document.getElementById('material2Photo');


const slideshowImg = document.getElementById('slideshowImage');
const nextBtn = document.getElementById('nextButton');

const material1Slides = [
  '../css/output/co1-1.png',
  '../css/output/co1-2.png',
];

const material2Slides = [
  '../css/output/co2-1.png',
  '../css/output/co2-2.png',
];
//chnaged code
const material1Captions = [
  'Material 1 - Image 1 Description',
  'Material 1 - Image 2 Description',
];

const material2Captions = [
  'Material 2 - Image 1 Description',
  'Material 2 - Image 2 Description',
];

//changed code
let slideIndex = 0;
let currentSlides = [];

function showSlideshow() {
  resultContainer.style.display = 'block';

  if (flag_material1) {
    currentSlides = material1Slides;
  } else if (flag_material2) {
    currentSlides = material2Slides;
  } else {
    alert('Please select a material first.');
    return;
  }

  slideIndex = 0;
  slideshowImg.src = currentSlides[slideIndex];
}

function nextSlide() {
  if (currentSlides.length === 0) return;
  slideIndex = (slideIndex + 1) % currentSlides.length;
  slideshowImg.src = currentSlides[slideIndex];
}

moveButton8.addEventListener('click', showSlideshow);
nextBtn.addEventListener('click', nextSlide);




// Help! video

// document.getElementById("playButton").addEventListener("click", function () {
//     var videoPlayer = document.querySelector(".video-player");
//     videoPlayer.style.display = "block";
// });

// document.getElementById("closeButton").addEventListener("click", function () {
//     var videoPlayer = document.querySelector(".video-player");
//     videoPlayer.style.display = "none";
    
//     // Pause the video when closing
//     var video = document.getElementById("video");
//     video.pause();
// });


// button open in 5 sec

document.getElementById("moveButton7").addEventListener("click", function() {
    // Hide the initial button
    // this.style.display = "none";
    
    // Use setTimeout to show the hidden button after 5 seconds
    setTimeout(function() {
      document.getElementById("moveButton8").style.display = "block";
      document.getElementById("out").style.display = "block";
    }, 5000); // 5000 milliseconds = 5 seconds
  });

// button open in 1 sec

  document.getElementById("moveButton3").addEventListener("click", function() {
    // Hide the initial button
    // this.style.display = "none";
    
    // Use setTimeout to show the hidden button after 5 seconds
    setTimeout(function() {
      document.getElementById("moveButton4").style.display = "block";
    }, 1000); // 5000 milliseconds = 5 seconds
  });

// button one click two button open

const buttonContainer = document.getElementById('buttonContainer');

moveButton5.addEventListener('click', function () {
    buttonContainer.classList.remove('hidden');
});


// button open in 1 sec

document.getElementById("moveButton6").addEventListener("click", function() { 
    // Use setTimeout to show the hidden button after 5 seconds
    setTimeout(function() {
      document.getElementById("moveButton7").style.display = "block";
    });
    // }, 1000); // 5000 milliseconds = 5 seconds
  });


  document.getElementById("moveButton9").addEventListener("click", function() { 
    setTimeout(function() {
      document.getElementById("moveButton7").style.display = "block";
    });
  });





  const reloadButton = document.getElementById('reloadButton');

  // Add a click event listener to the button
  reloadButton.addEventListener('click', function() {
      location.reload(); // Reload the current page
  });







function showCalculation() {
  const container = document.getElementById("calculationContainer");
  container.style.display = "block";

  if (selectedLoad === "10") {
    container.innerHTML = generateTable({
      testNumber: "1",
      sample: "316 L stainless steel (Ra = 16 nm)",
      counterBody: "Stainless steel",
      load: "10 N",
      speed: "50 RPM",
      time: "30 min",
      dmax: "33 µm",
      cof: "0.45±0.07",
      deltaM: "0.009 g",
      massLossWr: "4.4x10⁻² mm³/m",
      massLossSpWr: "4.4x10⁻³ mm³/N·m"
    });
  } else if (selectedLoad === "20") {
    container.innerHTML = generateTable({
      testNumber: "2",
      sample: "316 L stainless steel (Ra = 28 nm)",
      counterBody: "Stainless steel",
      load: "20 N",
      speed: "50 RPM",
      time: "30 min",
      dmax: "58 µm",
      cof: "0.40±0.06",
      deltaM: "0.011 g",
      massLossWr: "5.3x10⁻² mm³/m",
      massLossSpWr: "2.7x10⁻³ mm³/N·m"
    });
  } else {
    container.innerHTML = "<p style='color:red;'>Please select a Load first.</p>";
  }
}
function generateTable(data) {
  return `
    <table style="width:100%; border-collapse:collapse; margin-top:10px;" border="1">
      <tr style="background:#eee;">
        <th>Parameter</th>
        <th>Value</th>
      </tr>
      <tr>
        <td>Sample<br>(Ra = Sample roughness)</td>
        <td>${data.sample}</td>
      </tr>
      <tr>
        <td>Counter Body</td>
        <td>${data.counterBody}</td>
      </tr>
      <tr>
        <td>Load</td>
        <td>${data.load}</td>
      </tr>
      <tr>
        <td>Speed</td>
        <td>${data.speed}</td>
      </tr>
      <tr>
        <td>Time</td>
        <td>${data.time}</td>
      </tr>
      <tr>
        <td>Max Penetration Depth (dmax)</td>
        <td>${data.dmax}</td>
      </tr>
      <tr>
        <td>Coefficient of Friction (cof)</td>
        <td>${data.cof}</td>
      </tr>
      <tr>
  <td>Mass Loss<br>(Δm = m₁ - m₂)</td>
  <td>${data.deltaM}</td>
</tr>

      <tr>
        <td>Wear Rate (Wr)</td>
        <td>${data.massLossWr}</td>
      </tr>
      <tr>
        <td>Specific Wear Rate (Sp. Wr)</td>
        <td>${data.massLossSpWr}</td>
      </tr>
    </table>
    <p style="margin-top:10px; font-style:italic; font-size:14px;">
      Ra = Sample surface roughness, dmax = Maximum penetration depth, Δm = Change in mass, Wr = Wear rate, Sp. Wr = Specific wear rate
    </p>
  `;
}



































let selectedLoad = null;   // stores '10' or '20'
let originalImg = null;
let xProfileImg = null;
let yProfileImg = null;

function selectLOAD(load) {
  selectedLoad = load;  // '10' or '20'
  
  // Show the "Show Result" button when load is selected
  document.getElementById("moveButton8").classList.remove("hidden");

  // Hide result container and images if user changes load
  document.getElementById("resultContainer").style.display = "none";
  document.querySelectorAll('.materialPhoto').forEach(img => img.style.display = "none");
}

function showResult() {
  if (!selectedLoad) return;

  // Hide all images first
  document.querySelectorAll('.materialPhoto').forEach(img => img.style.display = "none");

  // Assign images based on selectedLoad
  if (selectedLoad === '10') {
    originalImg = document.querySelector('img[src="out1.png"]');
    xProfileImg = document.querySelector('img[src="out11.png"]');
    yProfileImg = document.querySelector('img[src="out12.png"]');
  } else if (selectedLoad === '20') {
    originalImg = document.querySelector('img[src="out2.png"]');
    xProfileImg = document.querySelector('img[src="out21.png"]');
    yProfileImg = document.querySelector('img[src="out22.png"]');
  }

  // Show original image by default
  showImage(originalImg);

  // Enable/disable nav buttons accordingly
  toggleNavButtons(true, true, false);

  // Show the container
  document.getElementById("resultContainer").style.display = "block";
}

function showImage(img) {
  // Hide all images first
  document.querySelectorAll('.materialPhoto').forEach(i => i.style.display = "none");
  
  if (img) {
    img.style.display = "block";
    document.getElementById("imageLabel").innerHTML = `<b>${img.dataset.label}</b>`;
    document.getElementById("imageDescription").innerText = img.dataset.desc;
  }
}

function toggleNavButtons(xEnabled, yEnabled, origEnabled) {
  document.getElementById("nextBtn").disabled = !xEnabled;  // X-profile
  document.getElementById("prevBtn").disabled = !yEnabled;  // Y-profile
  document.getElementById("origBtn").disabled = !origEnabled;  // Original
}

// Navigation buttons event listeners
document.getElementById("prevBtn").addEventListener("click", () => {
  showImage(yProfileImg);
  toggleNavButtons(true, false, true);
});

document.getElementById("nextBtn").addEventListener("click", () => {
  showImage(xProfileImg);
  toggleNavButtons(false, true, true);
});

document.getElementById("origBtn").addEventListener("click", () => {
  showImage(originalImg);
  toggleNavButtons(true, true, false);
});




function showcMessage() {
  document.getElementById("cMessage").style.display = "block";
}














function openFormulaModal() {
  document.getElementById("formulaModal").style.display = "block";

  // 🔁 Ask MathJax to re-typeset formulas inside modal
  if (window.MathJax) {
    MathJax.typesetPromise();
  }
}

function closeFormulaModal() {
  document.getElementById("formulaModal").style.display = "none";
}
















function markClicked(button) {
    // Remove tick from all buttons (if you want only one active at a time)
    // document.querySelectorAll('.button').forEach(btn => btn.classList.remove('clicked'));

    // Add tick to the clicked one
    button.classList.add('clicked');
  }
















function showinitialMessage() {
  document.getElementById("initialMessage").style.display = "block";
}

function showCleanMessage() {
  document.getElementById("cleanMessage").style.display = "block";
}

function showWeightMessage() {
  document.getElementById("weightMessage").style.display = "block";
}









function startRotation() {
  const cleanBtn = document.getElementById('cleanSampleBtn');

  // Hide the clean button
  cleanBtn.style.display = "none";

  // Show it again after 5 seconds
  setTimeout(() => {
    cleanBtn.style.display = "inline-block"; // or "block" depending on your layout
  }, 5000);
}

function showCleanMessage() {
  document.getElementById("cleanMessage").style.display = "block";
}