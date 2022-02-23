const res = require("express/lib/response")
const { request, response } = require("../routes/siswa")

let modelPelanggaran = require("../models/index").pelanggaran

exports.getPelanggaran = async (request, response) => {
    let dataPelanggaran = await modelPelanggaran.findAll()
    return response.json(dataPelanggaran)
}

exports.addPelanggaran = (request, response) => {
    let dataPelanggaran = {
        nama_pelanggaran: request.body.nama_pelanggaran,
        poin: request.body.poin
    }

    modelPelanggaran.create(dataPelanggaran)
    .then(result => {
        return response.json({
            message: `Data pelanggaran berhasil ditambahkan`
        })
    }) 
    .catch(error => {
        return response.json({
            message: error.message
        })
    })
}

exports.updatePelanggaran = (request, response) => {
    let id = request.params.id_pelanggaran
    let dataPelanggaran = {
        nama_pelanggaran: request.body.nama_pelanggaran,
        poin: request.body.poin
    }

    modelPelanggaran.update(dataPelanggaran, {where: {id_pelanggaran: id}})
    .then(result => {
        return response.json({
            message: `Data pelanggaran berhasil diubah`
        })
    })
    .catch(error => {
        return response.json({
            message: error.message
        })
    })
}

exports.deletePelanggaran = (request, response) => {
    let id = request.params.id_pelanggaran
    
    modelPelanggaran.destroy({where: {id_pelanggaran: id}})
    .then(result => {
        return response.json({
            message: `Data user berhasil dihapus`
        })
    })
    .catch(error => {
        return response.json({
            message: error.message
        })
    })
}