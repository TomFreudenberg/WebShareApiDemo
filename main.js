const shareButton = document.querySelector('.share-button');
const shareDialog = document.querySelector('.share-dialog');
const closeButton = document.querySelector('.close-button');

shareButton.addEventListener('click', event => {
  if (navigator.share) {

    var content = {data: "123", time: "today"};
    var toShare = {
      title: "ShareViaText.tsd",
      text: JSON.stringify(content, null, 2)
    }
    
    navigator.share(toShare)
      .then(() => {
        window.alert('Thanks for sharing!');
      })
      .catch((error) => {
        window.alert("Share failed:" + error);
      })
    
  } else {
      shareDialog.classList.add('is-open');
  }
});

closeButton.addEventListener('click', event => {
  shareDialog.classList.remove('is-open');
});
