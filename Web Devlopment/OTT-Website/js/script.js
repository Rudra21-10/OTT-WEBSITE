// Basic client-side interactions for demo

// Populate search results from ?q param
(function(){
  try{
    const params = new URLSearchParams(window.location.search);
    const q = params.get('q');
    if(q){
      const el = document.getElementById('queryText');
      if(el) el.textContent = '"' + q + '"';
      const results = document.getElementById('results');
      if(results){
        // For demo, add sample result cards
        for(let i=1;i<=6;i++){
          const col = document.createElement('div');
          col.className='col-6 col-md-3';
          col.innerHTML = `
            <a href="movie-details.html" class="text-decoration-none text-light">
              <div class="card bg-black border-0">
                <img src="../assets/images/poster${i}.jpg" class="card-img-top">
                <div class="card-body p-2">
                  <h6 class="mb-0">Result ${i} for ${q}</h6>
                </div>
              </div>
            </a>`;
          results.appendChild(col);
        }
      }
    }
  }catch(e){console.warn(e)}
})();