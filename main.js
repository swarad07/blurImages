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
    console.log(selectors.length);
    if (selectors.length !== 0) {
      console.log('here1');
      var selectorClass = selectors.split(',');
      selectorClass.forEach(selector => {
        let imagesArray = document.querySelectorAll(selector);
        Array.from(imagesArray).forEach(function(element) {
          images.push(element);
        });
      });
    } else {
      console.log('here2');
      images = document.getElementsByTagName('img');
    }
    console.log(images);
    for(var i = 0; i < images.length; i++) {
      images[i].setAttribute("style", "filter: blur(20px) invert(" + invert + ");");
    }
  }
}

getCongifValues();
