const myObserver = new IntersectionObserver(elements => {
  if (elements[0].intersectionRatio !== 0) {
    //console.log("about!");
          ga('send', {
            hitType: 'event',
            eventCategory: 'ZvezdaPlus',
            eventAction: 'desktop',
            eventLabel: 'about'
        });
        ga('send', {
            hitType: 'event',
            eventCategory: 'ZvezdaPlus',
            eventAction: 'mobile',
            eventLabel: 'about'
        });
  } else {
    //console.log("The element is out of view")
  }
});

const myEl = document.querySelector('.about');

myObserver.observe(myEl);

const myObserver2 = new IntersectionObserver(elements => {
  if (elements[0].intersectionRatio !== 0) {
    //console.log("broadcast");
          ga('send', {
            hitType: 'event',
            eventCategory: 'ZvezdaPlus',
            eventAction: 'desktop',
            eventLabel: 'efir'
        });
        ga('send', {
            hitType: 'event',
            eventCategory: 'ZvezdaPlus',
            eventAction: 'mobile',
            eventLabel: 'efir'
        });
  } else {
    //console.log("The element is out of view")
  }
});

const myEl2 = document.querySelector('.broadcast');

myObserver2.observe(myEl2);


const myObserver3 = new IntersectionObserver(elements => {
  if (elements[0].intersectionRatio !== 0) {
    //console.log("promo!");
          ga('send', {
            hitType: 'event',
            eventCategory: 'ZvezdaPlus',
            eventAction: 'desktop',
            eventLabel: 'promo'
        });
        ga('send', {
            hitType: 'event',
            eventCategory: 'ZvezdaPlus',
            eventAction: 'mobile',
            eventLabel: 'promo'
        });
  } else {
    //console.log("The element is out of view")
  }
});

const myEl3 = document.querySelector('.video_block');

myObserver3.observe(myEl3);


/* 4 */
const myObserver4 = new IntersectionObserver(elements => {
  if (elements[0].intersectionRatio !== 0) {
    //console.log("weapon!");
          ga('send', {
            hitType: 'event',
            eventCategory: 'ZvezdaPlus',
            eventAction: 'desktop',
            eventLabel: 'weapon'
        });
        ga('send', {
            hitType: 'event',
            eventCategory: 'ZvezdaPlus',
            eventAction: 'mobile',
            eventLabel: 'weapon'
        });
  } else {
    //console.log("The element is out of view")
  }
});

const myEl4 = document.querySelector('.weapon');

myObserver4.observe(myEl4);

/* 5 */
const myObserver5 = new IntersectionObserver(elements => {
  if (elements[0].intersectionRatio !== 0) {
    //console.log("history!");
          ga('send', {
            hitType: 'event',
            eventCategory: 'ZvezdaPlus',
            eventAction: 'desktop',
            eventLabel: 'history'
        });
        ga('send', {
            hitType: 'event',
            eventCategory: 'ZvezdaPlus',
            eventAction: 'mobile',
            eventLabel: 'history'
        });
  } else {
    //console.log("The element is out of view")
  }
});

const myEl5 = document.querySelector('.history');

myObserver5.observe(myEl5);

/* 6 */
const myObserver6 = new IntersectionObserver(elements => {
  if (elements[0].intersectionRatio !== 0) {
    //console.log("great!");
          ga('send', {
            hitType: 'event',
            eventCategory: 'ZvezdaPlus',
            eventAction: 'desktop',
            eventLabel: 'gpw'
        });
        ga('send', {
            hitType: 'event',
            eventCategory: 'ZvezdaPlus',
            eventAction: 'mobile',
            eventLabel: 'gpw'
        });
  } else {
    //console.log("The element is out of view")
  }
});

const myEl6 = document.querySelector('.great');

myObserver6.observe(myEl6);

/* 7 */
const myObserver7 = new IntersectionObserver(elements => {
  if (elements[0].intersectionRatio !== 0) {
    //console.log("legends!");
          ga('send', {
            hitType: 'event',
            eventCategory: 'ZvezdaPlus',
            eventAction: 'desktop',
            eventLabel: 'legend'
        });
        ga('send', {
            hitType: 'event',
            eventCategory: 'ZvezdaPlus',
            eventAction: 'mobile',
            eventLabel: 'legend'
        });
  } else {
    //console.log("The element is out of view")
  }
});

const myEl7 = document.querySelector('.legends');

myObserver7.observe(myEl7);

/* 8 */
const myObserver8 = new IntersectionObserver(elements => {
  if (elements[0].intersectionRatio !== 0) {
    //console.log("secrets!");
          ga('send', {
            hitType: 'event',
            eventCategory: 'ZvezdaPlus',
            eventAction: 'desktop',
            eventLabel: 'riddle'
        });
        ga('send', {
            hitType: 'event',
            eventCategory: 'ZvezdaPlus',
            eventAction: 'mobile',
            eventLabel: 'riddle'
        });
  } else {
    //console.log("The element is out of view")
  }
});

const myEl8 = document.querySelector('.secret');

myObserver8.observe(myEl8);

/* 9 */
const myObserver9 = new IntersectionObserver(elements => {
  if (elements[0].intersectionRatio !== 0) {
    //console.log("footer!");
          ga('send', {
            hitType: 'event',
            eventCategory: 'ZvezdaPlus',
            eventAction: 'desktop',
            eventLabel: 'footer'
        });
        ga('send', {
            hitType: 'event',
            eventCategory: 'ZvezdaPlus',
            eventAction: 'mobile',
            eventLabel: 'footer'
        });
  } else {
    //console.log("The element is out of view")
  }
});

const myEl9 = document.querySelector('.footer');

myObserver9.observe(myEl9);

/* 10 */
const myObserver10 = new IntersectionObserver(elements => {
  if (elements[0].intersectionRatio !== 0) {
    //console.log("people!");
          ga('send', {
            hitType: 'event',
            eventCategory: 'ZvezdaPlus',
            eventAction: 'desktop',
            eventLabel: 'people'
        });
        ga('send', {
            hitType: 'event',
            eventCategory: 'ZvezdaPlus',
            eventAction: 'mobile',
            eventLabel: 'people'
        });
  } else {
    //console.log("The element is out of view")
  }
});

const myEl10 = document.querySelector('.country');

myObserver10.observe(myEl10);

/* 11 */
const myObserver11 = new IntersectionObserver(elements => {
  if (elements[0].intersectionRatio !== 0) {
    //console.log("people!");
          ga('send', {
            hitType: 'event',
            eventCategory: 'ZvezdaPlus',
            eventAction: 'desktop',
            eventLabel: 'plus'
        });
        ga('send', {
            hitType: 'event',
            eventCategory: 'ZvezdaPlus',
            eventAction: 'mobile',
            eventLabel: 'plus'
        });
  } else {
    //console.log("The element is out of view")
  }
});

const myEl11 = document.querySelector('.plus');

myObserver11.observe(myEl11);