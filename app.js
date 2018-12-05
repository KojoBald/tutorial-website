var contentElement = document.getElementById('content');
var descriptionsElement = document.getElementById('descriptions')
var contentControls = {
  functions: {
    navButton: document.getElementById('functionsNavButton'),
    subMenu: document.getElementById('functionsSubMenu'),
    description: document.getElementById('_functions')
  },
  objects: {
    navButton: document.getElementById('objectsNavButton'),
    subMenu: document.getElementById('objectsSubMenu'),
    description: document.getElementById('_objects')
  },
  arrays: {
    navButton: document.getElementById('arraysNavButton'),
    subMenu: document.getElementById('arraysSubMenu'),
    description: document.getElementById('_arrays')
  },
  forLoops: {
    navButton: document.getElementById('forLoopsNavButton'),
    subMenu: document.getElementById('forLoopsSubMenu'),
    description: document.getElementById('_forLoops')
  },
  conditionals: {
    navButton: document.getElementById('conditionalsNavButton'),
    subMenu: document.getElementById('conditionalsSubMenu'),
    description: document.getElementById('_conditionals')
  }
}
var currentToggled = contentControls['functions'];

function onNavButtonClick(id) {
  triggeredByClick = true;
  changeDescription(id);
}

function changeDescription(id) {
  let control = contentControls[id];
  descriptionsElement.style.transform = `translateX(-${control.description.offsetLeft}px)`;

  currentToggled.navButton.parentElement.classList.remove('active');
  currentToggled.navButton.parentElement.style.height = `${currentToggled.navButton.parentElement.offsetHeight - currentToggled.subMenu.offsetHeight}px`;
  currentToggled.navButton.classList.remove('is-active');

  control.navButton.parentElement.classList.add('active');
  control.navButton.parentElement.style.height = `${control.navButton.parentElement.offsetHeight + control.subMenu.offsetHeight}px`;
  control.navButton.classList.add('is-active');

  currentToggled = control;
  window.location.hash = id;
}

//Watch for hash changes entered by user
var triggeredByClick = false;
window.onhashchange = function(ev) {
  let hash = location.hash.slice(1);
  if(!triggeredByClick && contentControls[hash]) {
    changeDescription(hash);
  }
  triggeredByClick = false;
}

//Check if hash is present on page load
if(location.hash !== '' ) {
  console.log('had hash on page load');
  let hash = location.hash.slice(1);
  if(contentControls[hash]) {
    changeDescription(hash);
  }
} else {
  location.hash = '#functions';
}
