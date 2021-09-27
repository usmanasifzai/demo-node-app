async function submitData() {
  const dataField = document.getElementById('dataField');

  const body = { dataField: dataField.value }
  const response = await postData('/data', body);

  var html = `Response: <span>${response.data}</span>`;
  document.getElementById('response').innerHTML = html;
  dataField.value = '';
}

async function postData(url, body = {}) {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json"
    }
  });

  return response.json();
}
