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
            buttons[currentButtonIndex].disabled = true;
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


// JavaScript logic
const material1Button = document.getElementById('moveButton');
const material2Button = document.getElementById('moveButton2');
const moveButton8 = document.getElementById('moveButton8');
const resultContainer = document.getElementById('resultContainer');
const material1Photo = document.getElementById('material1Photo');
const material2Photo = document.getElementById('material2Photo');

// Function to show the result photo based on the choice of material
function showResult() {
    if (flag_material1) {

        resultContainer.style.display = 'block';
        material1Photo.style.display = 'block';
        material2Photo.style.display = 'none';
    }
    if (flag_material2) {
            resultContainer.style.display = 'block';
            material1Photo.style.display = 'none';
            material2Photo.style.display = 'block';
        }
    // if(!flag_material1 && !flag_material2){
    //     alert('Please select a material first.');

    // }
}
console.log(moveButton8.addEventListener('click', showResult)
)
// Add click event listener to the Show Result button
moveButton8.addEventListener('click', showResult);



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





