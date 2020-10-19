import $ from 'jquery'

$(document).ready(function () {
  $('li:not([class!=""])').each(function () {
    var that = $(this)
    var text = that.html()

    that.html(text.autoLink())
  })

  var callback = $('li.callback')

  $(callback).html(
    callback.html().autoLink({
      callback: function (url) {
        return /\.(gif|png|jpe?g)$/i.test(url) ? '<img src="' + url + '">' : null
      }
    })
  )

  var newWindow = $('li.new_window')

  $(newWindow).html(
    newWindow.html().autoLink({ target: '_blank' })
  )
})
