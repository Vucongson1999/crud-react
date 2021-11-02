const Models = require("../model/index");

exports.getList = async (req, res) => {
  try {
    let getData = await Models.find({});
    res.send({ getData });
  } catch (error) {
    res.send(error);
  }
};

exports.getOne = async (req, res) => {
  try {
    let id = req.params.id;
    let respon = await Models.findById(id)

    let arr = [];
    arr.push(respon);
    res.send({ arr });
  } catch (error) {
    res.send(error);
  }
};

exports.addList = async (req, res) => {
    try {
        let name = req.body
        let addData = await Models.create(name)
        res.send({addData, id: addData._id})
    } catch (error) {
        res.send(error)
    }
}

exports.deleteList = async (req, res) => {
    try {
        let id = req.params.id
        let deletee = await Models.findByIdAndDelete(id)
        res.send({deletee})
    } catch (error) {
        res.send(error)
    }
}

exports.updateList = async (req, res) => {
    try {
        let id = req.params.id
        let name = req.body
        let updatee = await Models.findByIdAndUpdate(id, name, {'new': true})
        res.send({updatee, id: updatee._id})
    } catch (error) {
        res.send(error)
    }
}

exports.paginationList = async(req, res) => {
    try {
        let limit = parseInt(req.query.limit)
        let activePage = parseInt(req.query.activePage)
        let skip = (activePage - 1) * limit
        let totalRecord = await Models.estimatedDocumentCount()
        let totalPage = Math.ceil(totalRecord / limit)

        const pagination = await Models.find({}).skip(skip).limit(limit)
        res.send({
            pagination : pagination,
            totalPage: totalPage,
            totalRecord
        })
    } catch (error) {
        res.send(error)
    }
}

exports.searchList = async(req, res) => {
    try {
        let textSearch = req.query.textSearch
        let limit = parseInt(req.query.limit)
        let activePage = parseInt(req.query.activePage)
        let skip = (activePage - 1) * limit
        let totalRecord = await Models.countDocuments({name: {$regex: textSearch, $options: 'i'}})
        let totalPage = Math.ceil(totalRecord / limit)

        const searchPagi = await Models.find({name: {$regex: textSearch, $options: 'i'}}).skip(skip).limit(limit)
        res.send({
            totalPageSearch: totalPage,
            searchPagi: searchPagi,
            totalRecord
        })
    } catch (error) {
        res.send(error)
    }
}