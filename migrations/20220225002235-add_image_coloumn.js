'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn("siswa", "image", {type: Sequelize.STRING})
    //menambahkan kolom baru dengan nama image bertipe string di tabel siswa
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.removeColumn("siswa", "image")
     //menghapus kolom image pada siswa
  }
};
