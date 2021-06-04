function save_options() {
  var master = document.getElementById('master').checked;
  var invert = document.getElementById('invert').checked;
  var selectors = document.getElementById('selectors').value;
  chrome.storage.sync.set({
    master: master,
    invert: invert,
    selectors: selectors
  }, function() {
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

function restore_options() {
  chrome.storage.sync.get({
    master: 1,
    invert: 0,
    selectors: null
  }, function(items) {
    document.getElementById('master').checked = items.master;
    document.getElementById('invert').checked = items.invert;
    document.getElementById('selectors').value = items.selectors;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
