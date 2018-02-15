var imgPreview = document.getElementById('img-preview');
var fileUpload = document.getElementById('file-upload');
var CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dy175a5ka/upload';
var CLOUDINARY_UPLOAD_PRESET = 'trejlr5j';

// ON CLICK, ADD DATA FROM FILE TO CLOUDINARY
fileUpload.addEventListener('change', function(event) {
  var file = event.target.files[0];
  var formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)


  // THIS FUNCTION IS RESPONSIBLE FOR POSTING TO CLOUDINARY
  axios({
    url: CLOUDINARY_URL,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: formData
  }).then(function(res) {
    console.log(res);
    // SHOW THE PREVIEW OF THE IMAGE
    imgPreview.src = res.data.secure_url;
  }).catch(function(err) {
    console.error(err);
  });

const savePost = document.getElementById('saveButton');
const postData = {
    name,
    tagline,
    author,
    created_at,
    image: res.data.secure_url,
    thumbnail,
    content,
    tag
}

savePost.addEventListener('change'), function(event) {

  // THIS FUNCTION WILL SEND URL FROM CLOUDINARY TO DATABASE
    axios({
      method: 'POST',
      url: 'http://localhost:3000/posts/',
      data: postData
    })
  .then(res => {
    console.log(res);
    })
  .catch(err => {
    console.error(err);
    })
  };

});
