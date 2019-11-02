var base_url = "https://readerapi.codepolitan.com/";

// blok kode yang akan di panggil jika fetch berhasil
function status(response){
  if(response.status !== 200){
		console.log("error : "+ response.status);
		// method reject() akan membuat block catch terpanggil
		return Promise.reject(new Error(response.statusText)); 
  }else{
		// mengubah suatu objek menjadi promise agar kita "di-then-kan"
		return Promise.resolve(response);
	}
}

// blok kode untuk memparsing json menjadi array javascript
function json(resolve){
	return response,json();
}

// blok kode untuk meng-handle kesalahan di blok catch
function error(error){
	// Parameter error berasal dari promise.project()
	console.log("Error : " + error);
}

// blok kode untuk melakukan request data json
function getArticles(){
	fetch(base_url + "articles")
		.then(status)
		.then(json)
		.then(function(data){
			// objek/array JS dari response.json() masuk lewat date.

			// menyusun komponen card artikel secara dinamis
			var articlesHTML = "";
			data.result.forEach(function(article){
				articlesHTML += `
				<div class="card">
					<a href="./article.html?id=${article.id}">
						<div class="card-image waves-effect waves-block waves-light">
							<img src="${article.thumbnail}" />
						</div>
					</a>
					<div class="card-content">
						<span class="card-title truncate">${article.title}</span>
						<p>${article.description}</p>
					</div>
				</div>
				`;
			});
			// sisipkn komponen card ke dalam elemen dengan id #content
			document.getElementById("articles").innerHTML = articlesHTML;
		})
		.catch(error);
}