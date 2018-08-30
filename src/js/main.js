/**
 * @fileoverview main.js is used for adding base functionality to the
 *               durationsjs.com website.
 * @author Rob Dukarski <rob@purplest.com> (https://github.com/RobDukarski)
 * @copyright 2018 Purplest, Inc.
 * @version 1.0.3
 */

const bttButton = document.querySelector('.js-btt');
const links = document.querySelectorAll('.js-nav a');
const scrollButton = document.querySelector('.js-scroll');
const sectionBttButtons = document.querySelectorAll('.js-section-btt');
const years = document.querySelectorAll('.js-year');

let vh = window.innerHeight * 0.01;

/**
 * Scrolls to the top of the page.
 */

const backToTop = () => {
  scrolls(0);
};

/**
 * Hides the back-to-top button.
 */

const hideBackToTop = () => {
  if (window.pageYOffset < 20 && bttButton) {
    bttButton.classList.remove('is--shown');
  }
};

/**
 * Shows the back-to-top button.
 */

const showBackToTop = () => {
  if (window.pageYOffset >= 20 && bttButton) {
    bttButton.classList.add('is--shown');
  }
};

/**
 * Listens for the scroll event to occur and updates the back-to-top button
 * accordingly.
 */

window.addEventListener('scroll', () => {
  if (window.pageYOffset < 20) {
    hideBackToTop();
  } else {
    showBackToTop();
  }
});

/**
 * Listens for the resize event to occur and updates the viewport height
 * property accordingly.
 */

window.addEventListener('resize', () => {
  vh = window.innerHeight * 0.01;

  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

/**
 * Code setup to execute immediately including initializing events, and their
 * liseners.
 */

(() => {
  durations('.js-duration', {
    date: 'July 27, 2018 12:00:00',
    text: 'Coming Soon!'
  }, {
    afterText: ' since this project was launched!',
    beforeText: 'There has been ',
    date: 'July 27, 2018 17:11:00 (EST)',
    text: 'The launch is over!'
  }, false);

  durations('.js-duration-since',{
    date: 0
  },{
    afterText: ' since the beginning of JS time.',
    beforeText: 'There has been ',
    date: 0
  }, false);

  durations('.js-duration-until',{
    afterText: ' until December 31st, 9999.',
    beforeText: 'There are ',
    date: 'July 27, 2018 12:00:00 (EST)'
  },{
    date: 'Dec 31, 9999',
    text: 'The event has ended.'
  }, true);

  vh = window.innerHeight * 0.01;

  document.documentElement.style.setProperty('--vh', `${vh}px`);

  if (bttButton) {
    bttButton.addEventListener('click', () => {
      backToTop();
    });

    if (window.pageYOffset >= 20) {
      bttButton.classList.add('is--shown');
    }
  }

  if (sectionBttButtons) {
    sectionBttButtons.forEach((button) => {
      button.addEventListener('click', () => {
        scrolls('header');
      });
    });
  }

  if (years) {
    years.forEach((year) => {
      year.innerText = new Date().getFullYear();
    });
  }

  if (scrollButton) {
    scrollButton.addEventListener('click', () => {
      scrolls('header');
    });
  }

  if (links) {
    let linksCount = links.length;

    for (let i = 0; i < linksCount; i++) {
      let tempLink = links[i];
      let tempSection = tempLink.getAttribute('href').replace('#', '');

      tempLink.addEventListener('click', (e) => {
        e.preventDefault();

        scrolls('.' + tempSection);
      });
    }
  }
})();