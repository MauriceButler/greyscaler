module.exports = function(imagePath, outputPath, callback){
    var path = require('path'),
        fs = require('fs'),
        PNG = require('pngjs').PNG;

    if(!callback){
        callback = function(){};
    }

    fs.createReadStream(imagePath)
        .pipe(new PNG({filterType: 4}))
        .on('parsed', function() {
            for (var y = 0; y < this.height; y++) {
                for (var x = 0; x < this.width; x++) {
                    var index = (this.width * y + x) << 2;
                    var value = (this.data[index] + this.data[index+1] + this.data[index+2])/3;
                    this.data[index] = this.data[index+1] = this.data[index+2] = value;
                }
            }
            debugger;
            this.pack().pipe(fs.createWriteStream(path.join(outputPath, path.basename(imagePath, '.png') + '.greyscale.png'))
                .on('finish', callback));
        }
    );
};
