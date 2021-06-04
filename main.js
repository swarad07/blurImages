function getCongifValues() {
  chrome.storage.sync.get(['master', 'invert', 'selectors'], function (obj) {
    var master = obj.master;
    var invert = obj.invert === true ? 1 : 0;
    var selectors = obj.selectors;
    blurImages(master, invert, selectors);
  });
}

function blurImages(master, invert, selectors) {
  if (master) {
    let images = [];
    // Check if we have selectors.
    if (selectors.length !== 0) {
      var selectorClass = selectors.split(',');
      selectorClass.forEach(selector => {
        let imagesArray = document.querySelectorAll(selector);
        Array.from(imagesArray).forEach(function(element) {
          images.push(element);
        });
      });
    } else {
      images = document.getElementsByTagName('img');
    }
    for(var i = 0; i < images.length; i++) {
      images[i].setAttribute("style", "filter: blur(20px) invert(" + invert + ");");
    }
  }
}

getCongifValues();
