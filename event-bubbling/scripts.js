document.getElementById("inner").addEventListener("click", function(e) {
  e.preventDefault();
  //   e.stopImmediatePropagation();
  //   e.stopPropagation();
  console.log("first inner click");
  console.log("target " + e.target);
  console.log("bubbles " + e.bubbles);
  console.log("phase " + e.eventPhase);
});

document.getElementById("inner").addEventListener(
  "click",
  function(e) {
    e.preventDefault();
    //   e.stopImmediatePropagation();
    console.log("second inner click");
    console.log("target " + e.target);
    console.log("bubbles " + e.bubbles);
    console.log("phase " + e.eventPhase);
  },
  true
);

document.getElementById("outer").addEventListener("click", function(e) {
  console.log("outer");
  console.log("target " + e.target);
  console.log("bubbles " + e.bubbles);
  console.log("phase " + e.eventPhase);
});

document.getElementById("outer").addEventListener(
  "click",
  function(e) {
    console.log("outer 2");
    console.log("target " + e.target);
    console.log("bubbles " + e.bubbles);
    console.log("phase " + e.eventPhase);
  },
  true
);

document.getElementById("middle").addEventListener("click", function(e) {
  //e.stopPropagation();
  console.log("middle");
  console.log("target " + e.target);
  console.log("bubbles " + e.bubbles);
  console.log("phase " + e.eventPhase);
});

// **** event propagation ****
// 1. capture
// 2. target
// 3. bubble

document.getElementById("form").addEventListener("focus", function(e) {
  console.log("form focus");
  console.log("bubbles " + e.bubbles);
  console.log("phase " + e.eventPhase);
});

document.getElementById("text").addEventListener("focus", function(e) {
  console.log("text focus");
  console.log("bubbles " + e.bubbles);
  console.log("phase " + e.eventPhase);
});
