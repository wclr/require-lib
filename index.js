var fs = require('fs'),
    path = require('path'),
    cwd = process.cwd(),
    configPath = cwd + '/require-lib.json',
    config

if (fs.existsSync(configPath)){
    config = fs.readFileSync(configPath)
}

module.exports = function(lib){
    var libPath = path.resolve(cwd, 'lib/' + lib)
    if (fs.existsSync(libPath)){
        return require(libPath)
    }
    libPath += '.js'
    if (fs.existsSync(libPath)){
        return require(libPath)
    }

    return require(lib)
}


