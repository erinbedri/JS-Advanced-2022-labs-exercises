function getArticleGenerator(array) {

    let articles = array;
    let contentElement = document.getElementById('content');

    return () => {
        if (articles.length > 0) {

            let currentArticle = articles.shift();
            let articleElement = document.createElement('article');
    
            articleElement.textContent = currentArticle;
            contentElement.appendChild(articleElement);
        }
    }
}