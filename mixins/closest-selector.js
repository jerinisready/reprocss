/* Closest Selector Mixin for reproCSS */
function closest(selectorList, element, rule) {

  var tag = document.querySelectorAll(selectorList)
  var style = ''
  var count = 0

  for (var i = 0; i < tag.length; i++) {

    var attr = btoa(selectorList).replace(/=/g, '')

    tag[i].closest(element).setAttribute('data-closest-' + attr, count)

    style += '\n/* ' + selectorList + ':closest(' + element + ') */\n'
             + '[data-closest-' + attr + '="' + count + '"] {\n'
             + '  ' + rule + '\n'
             + '}\n'

    count++

  }

  return style

}