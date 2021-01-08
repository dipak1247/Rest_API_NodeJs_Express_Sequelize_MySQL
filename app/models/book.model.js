module.exports = (sequelize, Sequelize) => {
    const Book = sequelize.define("book", {
      name: {
        type: Sequelize.STRING
      },
      author: {
        type: Sequelize.STRING
      }
    });
  
    return Book;
  };
  