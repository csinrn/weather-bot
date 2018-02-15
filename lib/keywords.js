"use strict";

function isObservation(msg) {
    let result = null;
    const data = require('../data/observation');
    data.forEach(e => {
        if (msg.includes(e)) {
            result = e;
        }
    })
    return result;
}

function isAir(msg) {
    let result = null;
    const data = require('../data/air');
    data.forEach(e => {
        if (msg.includes(e)) {
            result = e;
        }
    })
    return result;
}

function isWeather(msg) {
    const keywords = ["天氣", "氣溫", "溫度", "壓力", "氣壓", "濕度", "溼度", "風速", "風向", "雨量"];
    let result = null;
    keywords.forEach(e => {
        if (msg.includes(e)) {
            result = e;
        }
    });
    return result;
}

function isFunny(msg) {
    const keywords = require('../data/funny');
    let result = null;
    for (const keyword in keywords) {
        if (msg.includes(keyword)) {
            const anwsers = keywords[keyword];
            result = anwsers[Math.floor(Math.random() * anwsers.length)];
        }
    }
    return result;
}

module.exports.isObservation = isObservation;
module.exports.isAir = isAir;
module.exports.isWeather = isWeather;
module.exports.isFunny = isFunny;