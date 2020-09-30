self.addEventListener("message", function(event) {
  console.log("--- service get data ---")
  self.clients.matchAll().then((clientList)=>{
    clientList.forEach(client => {
      client.postMessage("Hello service,I get you message:"+event.data)
    })
  })
});
self.addEventListener('fetch', function(event) { 
  console.log("拦截请求~")
  console.log(event)
});
