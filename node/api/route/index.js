module.exports = function(app) {
    const todoList = require('../controller/index')
    app.route('/student/pagination')
    .get(todoList.paginationList)

    app.route('/student/search')
    .get(todoList.searchList)

    app.route('/student')
    .get(todoList.getList)
    .post(todoList.addList)

    app.route('/student/:id')
    .delete(todoList.deleteList)
    .put(todoList.updateList)
    .get(todoList.getOne)

    
}