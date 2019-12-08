function debounce(cb, timeout) {
  var to;
  var ret = function() {
    console.log("click");
    if (to) {
      clearTimeout(to);
      console.log("clearTimeout");
    }
    to = setTimeout(cb, timeout);
    console.log("setTimeout");
  };

  return ret;
}

document.getElementById("clicker").addEventListener(
  "click",
  debounce(function() {
    console.log("callback");
    document.getElementById("text").innerHTML =
      "text updated " + new Date().getTime();
  }, 2000)
);
