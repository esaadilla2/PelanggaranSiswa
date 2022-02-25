exports.midware1 = (request, response, next) => {
    let message = `hayo`
    console.log(message);
    next()
}

exports.midware2 = (request, response, next) => {
    let message = `hayooo`
    console.log(message);
    next()
}