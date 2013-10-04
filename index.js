#!/usr/bin/env node

var program = require('commander'),
    async = require('async'),
    packageJson = require('./package.json'),
    greyscaler = require('./greyscaler');

function list(value) {
    return value.split(',') || [];
}

program._name = packageJson.name;
program
    .version(packageJson.version)
    .option('-i, --images <images>', 'Images to greyscale', list)
    .option('-o, --outputPath [outputPath]', 'Output path')
    .parse(process.argv);

if(!program.outputPath) {
    program.outputPath = process.cwd();
}

async.map(
    program.images,
    function(image, callback){
        greyscaler(image, program.outputPath, callback);
    },
    function(error){
        if(error){
            return console.log(error.stack || error);
        }

        console.log('Done.');
    }
);