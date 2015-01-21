#!/usr/bin/env node

/**
 * Created by zackaman on 1/20/15.
 */

var fs = require('fs')
var liner = require('./liner')

//look in the unsanitized folder
fs.readdir('./unsanitized', function (err, files) {

    //for each file in the unsanitized folder
    for (var i = 0; i < files.length; i++) {
        console.log(files[i]);


        var source = fs.createReadStream('./unsanitized/' + files[i])
        source.pipe(liner)
        liner.on('readable', function () {
            var line
            while (line = liner.read()) {
                //sanitize the data
                console.log(line);

                //write to sanitized folder
            }
        })
    }
});



