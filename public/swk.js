const clients=[]
this.onconnect = function(e) {
    var port = e.ports[0];
    clients.push(port)
    port.onmessage = function (e) {
      clients.map((item)=>{
        item.postMessage(e.data)
      })
  }
}