$('document').ready(function() {
  $('ting').each(function(index) {
    $('ting tang').eq(index).html(`<txt>${$(this).attr('tekst')}</txt>`);
    $('ting tang').eq(index).append(`
      <img src="` + $(this).attr('img') + `"></img>
    `);
  });
});
