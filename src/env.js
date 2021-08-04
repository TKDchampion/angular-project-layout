(function (window) {
  window.__env = window.__env || {};

  // set Test
  window.__env.Test = true;

  // identity
  // strange: 1, logined and not validated: 2,
  // logined and not need validate: 3, logined and validated: 4
  window.__env.identity = 2;
})(this);
