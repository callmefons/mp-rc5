(function(global) {

    // map tells the System loader where to look for things
    var map = {
        'app':                        'js/app', // 'dist',
        'rxjs':                       'js/vendor/rxjs',
        '@angular':                   'js/vendor/@angular',
        'ng2-bootstrap': 'js/vendor/ng2-bootstrap',
        'moment': 'js/vendor/moment/moment.js'

    };

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app':                        { main: 'boot.js',  defaultExtension: 'js' },
        'rxjs':                       { defaultExtension: 'js' },
        'ng2-bootstrap': { defaultExtension: 'js' }

    };

    var packageNames = [
        '@angular/common',
        '@angular/compiler',
        '@angular/core',
        '@angular/http',
        '@angular/forms',
        '@angular/platform-browser',
        '@angular/platform-browser-dynamic',
        '@angular/router',
        '@angular/testing',
        '@angular/upgrade'
    ];

    // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
    packageNames.forEach(function(pkgName) {
        packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
    });

    var config = {
        map: map,
        packages: packages
    };

    // filterSystemConfig - index.html's chance to modify config before we register it.
    if (global.filterSystemConfig) { global.filterSystemConfig(config); }

    System.config(config);

})(this);