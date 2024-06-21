// Initialize variables
let dragged;

// Add event listeners for drag and drop
document.addEventListener("dragstart", function(event) {
    dragged = event.target;
    event.target.style.opacity = 0.5; // Make the dragged item semi-transparent
});

document.addEventListener("dragend", function(event) {
    event.target.style.opacity = ""; // Reset opacity when drag ends
});

document.addEventListener("dragover", function(event) {
    event.preventDefault(); // Allow drop events
});

document.addEventListener("dragenter", function(event) {
    // Highlight potential drop target when the draggable element enters it
    if (event.target.classList.contains("draggable")) {
        event.target.style.background = "lightgray";
    }
});

document.addEventListener("dragleave", function(event) {
    // Remove highlight when the draggable element leaves a drop target
    if (event.target.classList.contains("draggable")) {
        event.target.style.background = "";
    }
});

document.addEventListener("drop", function(event) {
    event.preventDefault();
    // Swap the dragged element with the drop target
    if (event.target.classList.contains("draggable")) {
        // Swap backgrounds
        let temp = dragged.style.backgroundImage;
        dragged.style.backgroundImage = event.target.style.backgroundImage;
        event.target.style.backgroundImage = temp;
    }
});
