const setCookie = (token, expiryTime) => {
    // const expiryTimeInMilliSeconds = Date.now() +(1 * 60 * 60 * 1000);
    let ck = "token=" + token + ";" + "expiry=" + expiryTime;
    document.cookie = "token=" + token;
}

const getCookie = (name) => {
    let cookie = {};
    document.cookie.split(';').forEach(function(el) {
    let [k,v] = el.split('=');
    cookie[k.trim()] = v;
  })
  return cookie[name];  
}

const redirectTo = (url) => {
    window.location.href = url;
}

const getUrlParameter = (name) => {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};