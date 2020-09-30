this.onmessage=e=>{
  const message=e.data;
  console.log("web worker get message")
  self.postMessage(message*100)
}