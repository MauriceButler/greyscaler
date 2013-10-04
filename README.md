greyscaler
==========

Takes an image and greyscales it.

Installation
============

    npm install greyscaler

Usage
=====

###CLI
    Usage: greyscaler [options]

    Options:

      -h, --help                     output usage information
      -V, --version                  output the version number
      -i, --images <images>          Images to greyscale
      -o, --outputPath [outputPath]  Output path


###Module
    var greyscaler = require('./greyscaler');

    greyscaler('test.png', './output', callback);

