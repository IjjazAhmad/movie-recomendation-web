(async function(){
    const response = await fetch("./movies.json");
    const movies = await response.json();

    const inputElem = document.getElementById("searchInput");
    const btnElem = document.getElementById("searchBtn");
    const listElem = document.getElementById("movie-list");
   
    //  display movies 

    function displaySearchResults (results) {
        listElem.innerHTML = "";
        results.forEach(function (movie) {
          const li = document.createElement("li");
          const listItem = `
          <div class:"movie-section">
          
          <p class="title"><img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}" class="poster"> ${movie.title} <span class="year">${movie.release_date}</span></p>
        </div>
            
          `;
          li.innerHTML = listItem;
          listElem.appendChild(li);
        })
      }








    //  search function 
    function search() {
        const query = inputElem.value.toLowerCase();
        const results = movies.filter(function (movie) {
            return (movie.original_language.toLowerCase().includes(query) )
           });
       console.log(results);
       displaySearchResults(results);
     }
   
     btnElem.addEventListener("click", search);
   
   })();
   





//    genres  "Comedy" "Family" "Animation"

//    original_language
//    writers

//    || movie.language.toLowerCase().includes(query) 