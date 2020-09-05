let ajax_promise = new Promise((resolve, reject) => {
  let req = new XMLHttpRequest();
  req.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto', true);
  req.onreadystatechange = (req_event) => {
    debugger
    if (req.readyState == 4) {
      if(req.status == 200){
        return resolve(req.response);
      } else {
        return reject(req.reject);
      }
    }
  }
  req.send(null);
});

ajax_promise.then((result) => {
  debugger
  console.log("the result" + result);
  return result
}).catch((err) => {
  return err
})
console.log(ajax_promise)