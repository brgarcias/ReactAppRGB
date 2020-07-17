window.addEventListener('load', start)

function start() {
  const rangeRed = document.querySelector('#range-r')
  const rangeGreen = document.querySelector('#range-g')
  const rangeBlue = document.querySelector('#range-b')

  rangeRed.addEventListener('input', changeValueField)
  rangeGreen.addEventListener('input', changeValueField)
  rangeBlue.addEventListener('input', changeValueField)
}

let red = 0, green = 0, blue = 0

function changeValueField(e) {
  function changeColor(field) {
    switch (field) {
      case 'range-r':
        red = document.querySelector('#' + field).value
        break
      case 'range-g':
        green = document.querySelector('#' + field).value
        break
      case 'range-b':
        blue = document.querySelector('#' + field).value
        break
      default:
        break
    }
    const res = document.querySelector('.res')
    res.style.backgroundColor = `rgb(${red},${green},${blue})`
  }

  let field = e.target.id;
  changeColor(field);
  field = field.replace('range', 'field');
  let f = document.querySelector('#' + field);
  f.value = e.target.value;
}