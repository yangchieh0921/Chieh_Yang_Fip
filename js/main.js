(() => {
  var infoToggle = document.querySelectorAll('.toggle-bottle-info'),
    infoWrapper = document.querySelector('.info-wrapper'),
    info = [
      'this is the description for bottle 1',
      'this is the description for bottle 2',
      'this is the description for bottle 3',
    ];

  function toggleInfo(index) {
    infoWrapper.innerHTML = `<p>${info[index]}</p>`
  }

  infoToggle.forEach(function(btn, index) {

    btn.addEventListener("click", function() {
      toggleInfo(index)
    }, false);
  })
})();
