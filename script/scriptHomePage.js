function renderWheel() {
    // Get the name list from Local Storage
    const nameList = JSON.parse(localStorage.getItem("nameList")) || [];

    // Create an array of segments based on the name list
    const segments = nameList.map((item) => {
      return {
        fillStyle: "#" + Math.floor(Math.random() * 16777215).toString(16),
        text: item.text,
        id: item.id,
      };
    });

    // Create a new wheel object
    theWheel = new Winwheel({
      numSegments: nameList.length,
      outerRadius: WHEEL_RADIUS,
      textFontSize: TEXT_FONT_SIZE,
      segments: segments,
      animation: {
        type: "spinToStop",
        duration: 15,
        spins: 8,
        callbackFinished: alertPrize,
      },
    });
  }

  // Function to alert the selected prize
  function alertPrize(indicatedSegment) {
    // Alert the selected restaurant name
    alert("The winner is: " + indicatedSegment.text);
    resetWheel();
  }

  // Function to reset the wheel
  function resetWheel() {
    theWheel.stopAnimation(false);
    theWheel.rotationAngle = 0;
    theWheel.draw();
    wheelSpinning = false;
  }

  // Define WHEEL_RADIUS and TEXT_FONT_SIZE constants here

  // Call renderWheel when the page loads
  document.addEventListener("DOMContentLoaded", renderWheel);

  