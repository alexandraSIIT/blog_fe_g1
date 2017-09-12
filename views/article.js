window.addEventListener("load", function(){
    // always add this listener on views
    var article = new Article();
    var articleReq = article.getArticle();
    
    articleReq.then(renderArticle);
    
    function renderArticle() {
        var container = document.getElementsByTagName("body")[0];
        // create article container
        var articleElem = document.createElement("article");
        //create article title element
        var articleTitleElem = document.createElement("h1");
        articleTitleElem.innerHTML = article.title;
        // create article body element
        var articleBodyElem = document.createElement("p");
        articleBodyElem.innerHTML = article.body;
        
        articleElem.appendChild(articleTitleElem);
        articleElem.appendChild(articleBodyElem);
        
        container.appendChild(articleElem);
    }
});