var timeout = setInterval(reCheck, 3000);

function reCheck () {
  //$('#gate_status').load('http://coxinha.asuscomm.com:9080/getgatestatus');
  $('#gate_status').load('https://coxinha.asuscomm.com:9443/gate_status');
  
  
}
