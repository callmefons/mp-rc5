// function ClickyLog(name) {
//     console.log(name);
//     clicky.log(name.toString(),name.toString());
// }

var clicky_site_ids = clicky_site_ids || [];
clicky_site_ids.push(100980200);
(function() {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = '//static.getclicky.com/js';
    ( document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0] ).appendChild( s );
})();

function ClickyLog(app) {
    console.log("click", app);
    clicky.log(app, app);
}


