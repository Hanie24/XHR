const form = document.getElementById("search-form");
const searchField = document.getElementById("seach-keyword");
const responseContainer = document.getElementById("response-container");
let searchedForText;

form.addEventListener("sumit", function (e){
    e.preventDefault();
    responseContainer.innerHTML = "";
    searchedForText = searchField.value;
    getNews();
});

function getNews() {
    const articleRequest = new XMLHttpRequest();
    articleRequest.open("GET", `http://api.nytimes.com/syc/search/v2/articlesearch.json?q=${searchedForText}&api-key=c820af0290c849559411d42097f3a5fd`);
    articleRequest.onload = addNews;
    articleRequest.onerror = handleError;
    articleRequest.send();
}

function handleError() {
    console.log("Se ha presentado un error")
}

function addNews(){
    const data = JSON.parse(this.resposeText);
    const article = data.response.docs;
    const arrayFive = article.splice(0,5);
    article.array.forEach((element, index,array) => {
        const snippet = article.snippet;
        let li = document.createElement("li");
        li.className = "articleClass";
        li.innerText = snippet;
        responseContainer.appendChild(li);
    });
    

    

    
}




