$(function () {
  const item = $(".item")

  for (let i = 1; i < 10; i++) {
    item.append('<div class="every"></div>')
    var p = '<p class="second">' + i + "</p>"
    var second = $(`.every:nth-child(${i})`)
    second.append(p)
  }

  item
    .children()
    .children()
    .before(`<p class="x">x</p>`)
    .after(`<p class="=">=</p>`)
  $(".every").append('<p class="value"></p>')

  for (let i = 0; i < 10; i++) {
    item
      .eq(i)
      .children(".every")
      .children(".x")
      .before(`<p class='first'>${i + 2}</p>`)
    item.eq(i).prepend(`<span class='banner'>${i + 2}</span>`)
  }

  for (let i = 0; i < 72; i++) {
    const value =
      $(".first")
        .eq(i)
        .text() *
      $(".second")
        .eq(i)
        .text()
    $(".value")
      .eq(i)
      .html(value)
  }
})