var  oReq = new XMLHttpRequest();

function reqListener () {
  var redditData;
  var arrayOfRedditElements;
  var authors = [];
  var content_div;
  var thumbNail_div;
  var description_div;
  var title_div;
  var details_div;
  var author_span;
  var num_comments_span;
  var likes_span;
  var score_span;

  console.log(JSON.parse(this.responseText));
  redditData = JSON.parse(this.responseText);
  arrayOfRedditElements = redditData.data.children;
  var container = document.getElementById('container');

  for (var i = 0; i < arrayOfRedditElements.length; i++) {

    content_div = document.createElement('div');
    content_div.className = 'content_div';
    container.appendChild(content_div);

    thumbNail_div = document.createElement('div');
    thumbNail_div.className = 'thumbNail_div';
    //thumbnail innerHTML
    content_div.appendChild(thumbNail_div);

    description_div = document.createElement('div');
    description_div.className = 'description_div';
    content_div.appendChild(description_div);

    title_div = document.createElement('div');
    title_div.className = 'title_div';
    title_div.innerHTML = arrayOfRedditElements[i].data.title;
    description_div.appendChild(title_div);

    details_div = document.createElement('div');
    details_div.className = 'details_div';
    description_div.appendChild(details_div);

      console.log(arrayOfRedditElements[i].data.author, 'right before author span');
      author_span = document.createElement('span');
      author_span.className = 'author_span';
      author_span.innerHTML = arrayOfRedditElements[i].data.author;
      details_div.appendChild(author_span);

      num_comments_span = document.createElement('span');
      num_comments_span.className = 'num_comments_span';
      num_comments_span.innerHTML = arrayOfRedditElements[i].data.num_comments;
      details_div.appendChild(num_comments_span);

      likes_span = document.createElement('span');
      likes_span.className = 'likes_span';
      likes_span.innerHTML = arrayOfRedditElements[i].data.likes;
      details_div.appendChild(likes_span);

      score_span = document.createElement('span');
      score_span.className = 'score_span';
      score_span.innerHTML = arrayOfRedditElements[i].data.score;
      details_div.appendChild(score_span);


  }
  console.log(authors, 'authors');


}
oReq.addEventListener( "load", reqListener );
oReq.open("GET", "https://www.reddit.com/r/surfing.json");
oReq.send();



