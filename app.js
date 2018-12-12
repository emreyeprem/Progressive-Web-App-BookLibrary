let content = document.getElementById('content')

// register a service worker
if("serviceWorker" in navigator) {
  navigator.serviceWorker.register('/serviceWorker.js')
  .then((registration) => {
    console.log("Server worker has been registered",registration.scope)
  }).catch((error) => {
    console.log("Error occured in registering Service worker", error)
  })
}
const BOOKS_URL = "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/"

fetch('https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json').then(function(response){
  return response.json()
}).then(function(json){
   let books = json.map(function(each){
     return `<div class="card">
        <img id="pictures" class="card-img-top" src='${BOOKS_URL}${each.imageLink}' alt="Card image cap" />
        <div class="card-body">
          <h3 class="card-text"><a href="#">${each.title}</a></h3>
          <p class="card-text"><a href="#">Author : ${each.author}</a></p>
          <p class="card-text"><a href="#">Language : ${each.language}</a></p>
          <p class="card-text"><a href="#">Pages : ${each.pages}</a></p>
        </div>
      </div>`
   })
    content.innerHTML = books.join('')

})
