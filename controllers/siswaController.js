//memanggil file model u/ siswa
let modelSiswa = require("../models/index").siswa

const { request, response } = require("express");

let path = require("path")
let fs = require("fs")

// export digunakan untuk memanggil fungsinya ke file siswa
exports.getDataSiswa = (request, response) => {
    modelSiswa.findAll()
        .then(result => {
            return response.json(result)
        })
        .catch(error => {
            return response.json({
                message: error.message
            })
        })
}

exports.addDataSiswa = (request, response) => {
    if (!request.file) {
        return response.json({
            message: `Nothing to upload`
        })
    }
    //tampung data request
    let newSiswa = {
        nama: request.body.nama,
        kelas: request.body.kelas,
        poin: request.body.poin,
        nis: request.body.nis,
        image: request.file.filename
    }

    modelSiswa.create(newSiswa)
    .then(result => {
        return response.json({
            message: `Data siswa berhasil ditambahkan`
        })
    })
    .catch(error => {
        return response.json({
            message: error.message
        })
    })
}

exports.editDataSiswa = (request, response) => {
    let id = request.params.id_siswa
    let dataSiswa = {
        nama: request.body.nama,
        nis: request.body.nis,
        poin: request.body.poin,
        kelas: request.body.kelas
    }

    modelSiswa.update(dataSiswa, {where: {id_siswa: id}})
    .then(result => {
        return response.json({
            message: `Data siswa berhasil diubah`
        })
    })
    .catch(error => {
        return response.json({
            message: error.message
        })
    })
}

exports.deleteDataSiswa = async (request, response) => {
    let id = request.params.id_siswa

    let siswa = await modelSiswa.findOne({where: {id_siswa: id}})
    if (siswa ) {
        let oldFileName = siswa.image

        //del file
        let location = path.join(__dirname, "../image, oldFileName")
        fs.unlink(location, error => console.log(error))
    }
    
    modelSiswa.destroy({where: {id_siswa: id}})
    .then(result => {
        return response.json({
            message: `Data siswa berhasil dihapus`
        })
    })
    .catch(error => {
        return response.json({
            message: error.message
        })
    })
}