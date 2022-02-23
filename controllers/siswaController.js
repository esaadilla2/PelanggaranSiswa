//memanggil file model u/ siswa
let modelSiswa = require("../models/index").siswa

const { request, response } = require("express");

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
    //tampung data request
    let newSiswa = {
        nama: request.body.nama,
        kelas: request.body.kelas,
        poin: request.body.poin,
        nis: request.body.nis
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

exports.deleteDataSiswa = (request, response) => {
    let id = request.params.id_siswa
    
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