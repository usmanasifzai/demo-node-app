function submitData() {
  $.ajax({
    url: '/data',
    type: 'POST',
    data: {
      'dataField': $('#dataField').val()
    },
    success: function(result) {
      var html = `Response: <span>${result.data}</span>`;
      $('#response').html(html);
    },
    error: function (error) {
      console.log('error', error);
    }
  });
}
