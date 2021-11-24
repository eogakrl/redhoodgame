function chapeu() {
    var call = prompt();
    var ret = ["1","2","stop"];
    while (!ret.includes(call)) {
      call = prompt();
    }
    if (call == "stop") { return; } else {
    alert("Valor permitido")}
  }
  num();