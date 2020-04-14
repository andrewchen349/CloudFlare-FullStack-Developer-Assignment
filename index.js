const url = 'https://cfw-takehome.developers.workers.dev/api/variants';

/**
 * Fetch the response from the api and convert it to json
 * @param {Sting} url 
 */
async function fetchRequest(url){
  const response = await fetch(url);
  return response.json();
}


addEventListener('fetch', event => {
  respBody = fetchRequest(url);
  event.respondWith(
    (async function() {
      const body = await respBody
      const num = Math.round(Math.random()); //Get Random Number 0 is first index, 1 second index of array
      if (num == 0){
        return Response.redirect(body.variants[0], 302);
      }
      if(num == 1){
        return Response.redirect(body.variants[1], 302);
      }
    })()
  )
})

/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  return new Response('Hello worker!', {
    headers: { 'content-type': 'text/plain' },
  })
  
}



