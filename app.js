var currentToggled = null;
var contentElement = document.getElementById('content');
var contentControls = {
  functions: {
    navButton: document.getElementById('functionsNavButton'),
    expandButton: document.getElementById('functionsExpandButton'),
    description: document.getElementById('functionsDescription'),
    container: document.getElementById('functions')
  },
  objects: {
    navButton: document.getElementById('objectsNavButton'),
    expandButton: document.getElementById('objectsExpandButton'),
    description: document.getElementById('objectsDescription'),
    container: document.getElementById('objects')
  },
  arrays: {
    navButton: document.getElementById('arraysNavButton'),
    expandButton: document.getElementById('arraysExpandButton'),
    description: document.getElementById('arraysDescription'),
    container: document.getElementById('arrays')
  },
  forLoops: {
    navButton: document.getElementById('forLoopsNavButton'),
    expandButton: document.getElementById('forLoopsExpandButton'),
    description: document.getElementById('forLoopsDescription'),
    container: document.getElementById('forLoops')
  },
  conditionals: {
    navButton: document.getElementById('conditionalsNavButton'),
    expandButton: document.getElementById('conditionalsExpandButton'),
    description: document.getElementById('conditionalsDescription'),
    container: document.getElementById('conditionals')
  }
};

function toggleDescription(id) {
  let control = contentControls[id];
  updateToggleControls(control);
  if(control === currentToggled) {
    hideDescription(control);
    currentToggled = null;
  } else {
    if(currentToggled) {
      updateToggleControls(currentToggled);
      hideDescription(currentToggled);
    }
    showDescription(control);
    currentToggled = control;
  }
}

function updateToggleControls(control) {
    control.navButton.classList.toggle('is-active');
    control.expandButton.classList.toggle('expanded');
}

function showDescription(control) {
  control.container.style.height = `${control.container.offsetHeight + control.description.offsetHeight}px`;
  control.description.classList.remove('hidden');
}

function hideDescription(control) {
  control.container.style.height = `${control.container.offsetHeight - control.description.offsetHeight}px`;
  control.description.classList.add('hidden');
}
