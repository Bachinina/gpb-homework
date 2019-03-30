var load = function (url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.timeout = 10000;
    xhr.open("GET", url, true);
    xhr.onload = function() {
      if(this.status == 200) {
        resolve(this.response);
      } else {
        var error = onError(this.statusText);
        reject(error);
      }
    };
    xhr.onerror = function() {
      reject(onError("Network Error"));
    };
    xhr.send();
  })  
};

var loadAvatar = function(url) {
  return new Promise(function(resolve, reject) {
    var avatar = new Image();
    avatar.onload = () => resolve(avatar);
    avatar.onerror = () => reject(`Не удалось загрузить картинку: ${url}`);
    avatar.src = url;
  })
};

var showAvatars = function(avatars){
  avatars.forEach((avatar) => {
    avatar.width = 50;
    document.body.appendChild(avatar);
  })
};

var onError = function(error) {
  alert(error);
};

var userAvatarLoaded = load(`https://api.github.com/users`);
userAvatarLoaded
  .then((users) => users.map((user) => loadAvatar(user.avatar_url)))
  .then((avatarPromises) => Promise.all(avatarPromises))
  .then((avatars) => showAvatars(avatars))
  .catch(onError);
