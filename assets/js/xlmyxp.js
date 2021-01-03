;(function () {
  const btn = `<a href="https://codepen.io/larsmagnus/" target="_blank" rel="noopener noreferrer" id="ss-collection">More like this</a>`;
  
  const styles = `<style>
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans:300&display=swap&text=More%20lik%20ths');
  #ss-collection {
    position: fixed;
    bottom: 20px;
    left: 20px;
    z-index: 10;
    font-family: "IBM Plex sans", "Roboto", sans-serif;
    font-weight: 300;
    text-decoration: none;
    font-display: swap;
    font-size: 15px;
    padding: 0.6em 0.7em 0.7em;
    background-color: #e7edf0;
    color: #8ca9b7;
    line-height: 1;
    border-radius: 0.2em;
    border: 2px solid transparent;
    box-shadow: 2px 2px 5px rgba(0,0,0,0);
    transition-property: color, background, box-shadow;
    transition-duration: 0.25s;
    transition-timing-function: cubic-bezier(0.4,0,0.2,1);
  }
  #ss-collection:hover, #ss-collection:focus {
    background-color: #037DE4;
    color: #fff;
    box-shadow: 2px 5px 18px rgba(0,0,0,0.26);
  }
  #ss-collection:focus {
    outline: none;
    border-color: #46a9fd;
  }
  </style>`;
  
  document.head.insertAdjacentHTML('beforeend', styles);
  document.body.insertAdjacentHTML('beforeend', btn);
})();