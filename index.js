console.log('hey')

AFRAME.registerComponent('ui-button', {
  init: function() {
    this.el.addEventListener('mouseenter', function() {
      console.log('enter')
    })
    this.el.addEventListener('mouseleave', function() {
      console.log('leave')
    })
  }
})