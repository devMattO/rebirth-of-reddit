var oReq = new XMLHttpRequest();

function reqListener () {
  var redditData;
  var arrayOfRedditElements;
  var content_div;
  var thumbNail_div;
  var description_div;
  var title_div;
  var details_div;
  var author_span;
  var num_comments_span;
  var likes_span;
  var score_span;
  var thumbNail_pic;
  var modalContent;
  var closeModal;
  var modal;
  var modalImage;

  console.log(JSON.parse(this.responseText));
  redditData = JSON.parse(this.responseText);
  arrayOfRedditElements = redditData.data.children;
  var container = document.getElementById('container');

  (function createPosts(){

    function displayModal(){
      modal.style.display = 'block';
    }
    function hideModal(){
      modal.style.display = 'none';
    }

    for (var i = 0; i < arrayOfRedditElements.length; i++) {

      content_div = document.createElement('div');
      content_div.className = 'content_div';
      content_div.id = 'content_div' + i;
      container.appendChild(content_div);

      modal = document.createElement('div');
      modal.className = 'modal';
        modalContent = document.createElement('div');
        modalContent.className = 'modal-content';
      // modalImage = document.createElement('IMG');
      // modalImage.className = 'modalImage';
      // modalImage.setAttribute('src', arrayOfRedditElements[i].data.thumbnail);
      // modalImage.innerHTML = arrayOfRedditElements[i].data.selftext;
        closeModal = document.createElement('span');
        closeModal.className = 'close';
        closeModal.innerHTML = 'X';

      // modalContent.appendChild(modalImage);
      modalContent.appendChild(closeModal);
      modal.appendChild(modalContent);
      container.appendChild(modal);

      content_div.addEventListener('click', displayModal);

      closeModal.addEventListener('click', hideModal);



      thumbNail_div = document.createElement('div');
      thumbNail_div.className = 'thumbNail_div';
      if(arrayOfRedditElements[i].data.thumbnail !== 'self'){
        thumbNail_pic = document.createElement('IMG');
        thumbNail_pic.className = 'thumbNail_pic';

        //border radius needs to be similar to stock image**

        thumbNail_pic.setAttribute('src', arrayOfRedditElements[i].data.thumbnail);
        // thumbNail_pic.src = arrayOfRedditElements[i].data.url;
        thumbNail_div.appendChild(thumbNail_pic);

      content_div.appendChild(thumbNail_div);
      } else {
        thumbNail_pic = document.createElement('IMG');
        thumbNail_pic.className = 'thumbNail_pic';
        thumbNail_pic.setAttribute('src', 'https://pixabay.com/static/uploads/photo/2013/04/01/21/33/surfing-99304_960_720.png');
        thumbNail_pic.setAttribute('width', '140px');
        thumbNail_pic.setAttribute('height', '140px');
        thumbNail_div.appendChild(thumbNail_pic);

      content_div.appendChild(thumbNail_div);
      }

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

        author_span = document.createElement('span');
        author_span.className = 'author_span';
        author_span.innerHTML = arrayOfRedditElements[i].data.author;
        details_div.appendChild(author_span);

        num_comments_span = document.createElement('span');
        num_comments_span.className = 'num_comments_span';
        num_comments_span.innerHTML = 'Comments: ' + arrayOfRedditElements[i].data.num_comments;
        details_div.appendChild(num_comments_span);

        likes_span = document.createElement('span');
        likes_span.className = 'likes_span';
        likes_span.innerHTML = 'likes: ' + arrayOfRedditElements[i].data.likes;
        details_div.appendChild(likes_span);
        // all likes are null, ditch this?? ^^

        score_span = document.createElement('span');
        score_span.className = 'score_span';
        score_span.innerHTML = 'score: ' + arrayOfRedditElements[i].data.score;
        details_div.appendChild(score_span);

    }

  })();


}
oReq.addEventListener( "load", reqListener );
oReq.open("GET", "https://www.reddit.com/r/surfing.json");
oReq.send();



