$('document').ready(function() {
  $('ting').each(function(index) {
    /*console.log(`
      url: ${$(this).attr('url')} \n
      img: ${$(this).attr('img')} \n \n      ————————————
    `)*/
    //console.log(index)
    $('ting tang').eq(index).html(`<txt>${$(this).attr('tekst')}</txt>`);
    $('ting tang').eq(index).append(`
      <img src="` + $(this).attr('img') + `"></img>
    `);
    /*$('ting tang').eq(index).click(function() {
      window.open($(this).attr('url'));
    });*/
  });
});
