const setCookie = (token) => {
    const expiryTimeInMilliSeconds = Date.now() +(1 * 60 * 60 * 1000);
    let ck = "token=" + token + ";" + "expiry=" + expiryTimeInMilliSeconds;
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