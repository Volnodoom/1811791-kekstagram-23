const sliderElement = document.querySelector('.effect-level__slider');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 80,
  step: 1,
  connect: 'lower',
});

let slidersValue = '';
sliderElement.noUiSlider.on('update', (skip,handle,unencoded) => {
  slidersValue = skip[handle];
  console.log (slidersValue)
});

//values, handle, unencoded

