function Article(defaultData){
    defaultData = defaultData || {};
    this.userId = defaultData.userId;
    this.id = defaultData.id;
    this.title = defaultData.title;
    this.body = defaultData.body;
}

Article.prototype.getArticle = function(id)  {
    var that = this;
    var responseObj = {};
    var handeErros = function(response) {
        if(response.ok) {
            return response.json();
        }
        throw new Error(response.status);
    }
    
    var url = "https://jsonplaceholder.typicode.com/posts/1";
    return fetch(url, {
        method:"GET"
    })
    .then(handeErros)
    .then(function(response) {
        that.userId = response.userId;
        that.id = response.id;
        that.title = response.title;
        that.body = response.body;
    })
    .catch(function(error) {
        console.log(error);
    })
}