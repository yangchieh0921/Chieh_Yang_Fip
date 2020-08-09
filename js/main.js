(() => {
  var infoToggle = document.querySelectorAll('.toggle-bottle-info'),
    infoWrapper = document.querySelector('.info-wrapper'),
    info = [
      'We care about what we put into our beer - every bottle, can and draft of Bud Light uses only four simple ingredients of the highest quality we can find to create a crisp taste you can count on. Sip in and sip out.',
      'Anheuser-Busch is here for the times that matter. The moments where we celebrate, defy challenges, dream of the brighter future we are building today– and all the moments in between. We are a company that brings people together for richer conversations, sweeter celebrations and stronger communities. We embody the time-honored traditions of brewing great beer while constantly innovating to drive the industry forward. We strive for excellence in everything we do. We are home to iconic, beloved brands. And we are leading the industry into the future by growing beyond beer to offer new beverages for every person, for every occasion',
      'We are building a business that will endure the test of time. We put sustainable innovation at the center of our business by reducing our use of precious natural resources, and continuously striving to leave our world a cleaner place for the future. Our 19,000 colleagues accept the challenge every day to find new ways to brew better, build a better company, and create a better world for us all.Cheers to creating these timeless moments – together – for generations to come.',
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
