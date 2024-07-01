const Type = require('../models/typeBook.js');
const Genre = require('../models/genreBook.js');

module.exports.createType = async (req, res) => {
    const { typeCode, typeName } = req.body;

    try {
        const type = new Type({
            typeCode: typeCode,
            typeName: typeName
        });

        await type.save();

        res.json(type);
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

module.exports.createGenre = async (req, res) => {
    const { genreCode, genreName } = req.body;

    try {
        const genre = new Genre({
            genreCode: genreCode,
            genreName: genreName
        });

        await genre.save();

        res.json(genre);
    } catch (error) {
        res.status(500).json({ message: error });
    }
};