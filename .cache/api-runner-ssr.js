var plugins = [{
      name: 'gatsby-plugin-react-helmet',
      plugin: require('C:/Users/Thor Nolan/Desktop/💻 Code/ThorNolan.github.io/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-image',
      plugin: require('C:/Users/Thor Nolan/Desktop/💻 Code/ThorNolan.github.io/node_modules/gatsby-plugin-image/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-transition-link',
      plugin: require('C:/Users/Thor Nolan/Desktop/💻 Code/ThorNolan.github.io/node_modules/gatsby-plugin-transition-link/gatsby-ssr'),
      options: {"plugins":[],"layout":"C:\\Users\\Thor Nolan\\Desktop\\💻 Code\\ThorNolan.github.io\\src\\components\\Wrapper\\layout.js"},
    },{
      name: 'gatsby-plugin-manifest',
      plugin: require('C:/Users/Thor Nolan/Desktop/💻 Code/ThorNolan.github.io/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"THOR NOLAN PORTFOLIO","short_name":"@ThorNolan","start_url":"/","background_color":"#1D1F3C","theme_color":"#1D1F3C","display":"standalone","icon":"src/images/mstile-150x150.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"e2fafb24ab02387d78903839f58a9c0c"},
    },{
      name: 'gatsby-plugin-offline',
      plugin: require('C:/Users/Thor Nolan/Desktop/💻 Code/ThorNolan.github.io/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[],"precachePages":["./*"]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    try {
      const result = plugin.plugin[api](args, plugin.options)
      if (result && argTransform) {
        args = argTransform({ args, result })
      }
      return result
    } catch (e) {
      if (plugin.name !== `default-site-plugin`) {
        // default-site-plugin is user code and will print proper stack trace,
        // so no point in annotating error message pointing out which plugin is root of the problem
        e.message += ` (from plugin: ${plugin.name})`
      }

      throw e
    }
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
