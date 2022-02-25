let jwt = require("jsonwebtoken")
const { request, response } = require("../routes/siswa")

exports.authorization = (request, response, next) => {
    let header = request.headers.authorization
    let token = header && header.split(" ")[1]

    if (token == null) {
        return response.json({
            message: `Unauthorized`
        })
    } else {
        let secretKey = `wow ini sangat menyenangkan`
        jwt.verify(token, secretKey, (error, user) => {
            if (error) {
                return response.json({
                    message: `Invalid Token`
                })
            } else {
                next()
            }
        })
    }
}