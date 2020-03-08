/* ---------- */
var timeout = setInterval(reCheck, 3000);

function reCheck () {
  $('#gate_status').load('/gate_status');
}
