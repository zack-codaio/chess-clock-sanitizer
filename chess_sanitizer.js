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
    //for (var i = 0; i < 1; i++) {
        var filename = files[i];

        console.log(filename);

        //clear the file
        fs.writeFile('./sanitized/' + filename, '', function (err) {
            if (err) {
                console.log('error writing to file');
            }
        });

        var source = fs.createReadStream('./unsanitized/' + filename)
        var destination = fs.createWriteStream('./sanitized/' + filename);
        source.pipe(liner)
        liner.on('readable', function () {
            var line
            while (line = liner.read()) {
                //sanitize the data
                //console.log(line);

                //probably want information on the file name and the number of moves
                //want to strip out all of the other metadata
                var curline = line;
                if(curline[0] == '['){

                    //do nothing on metadata
                }
                else {
                    console.log(curline);
                    //add an additional linebreak between games
                    if(curline[0] == '1' && curline[1] == '.'){
                        destination.write("\n");
                    }

                    destination.write(curline + "\n");
                }

            }
        })

    }
});



