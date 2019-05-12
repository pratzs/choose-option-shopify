$(document).ready(function() {
  if( typeof(productOptions ) != "undefined" ){
    for(i=0;i<productOptions.length;i++) {
      $('.single-option-selector:eq('+ i +')')
      .filter(function() {
        return $(this).find('option').length > 1
      })
      .prepend('<option value="">Pick a ' + productOptions[i][i] + '</option>')
      .val('')
      .trigger('change');
    }
  }
});
