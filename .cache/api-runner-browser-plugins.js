module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-image/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-scroll-reveal/gatsby-browser.js'),
      options: {"plugins":[],"threshold":1,"once":true,"disable":false,"animateClassName":"sal-animate"},
    },{
      plugin: require('../node_modules/gatsby-plugin-transition-link/gatsby-browser.js'),
      options: {"plugins":[],"layout":"C:\\Users\\Thor Nolan\\Desktop\\💻 Code\\ThorNolan.github.io\\src\\components\\Wrapper\\layout.js"},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"THOR NOLAN PORTFOLIO","short_name":"@ThorNolan","start_url":"/","background_color":"#1D1F3C","theme_color":"#1D1F3C","display":"standalone","icon":"src/images/mstile-150x150.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"e2fafb24ab02387d78903839f58a9c0c"},
    },{
      plugin: require('../node_modules/gatsby-plugin-gatsby-cloud/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[],"precachePages":["./*"]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
