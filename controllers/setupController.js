var Todos = require('../models/todoModels');

module.exports = function(app) {

    app.get('/api/setupTodos', function(req, res) {

        var starterTodos = [
            {
                username: 'test_user',
                todo: 'Buy milk',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test_user',
                todo: 'Murder peasents',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test_user',
                todo: 'Learn Node',
                isDone: false,
                hasAttachment: false
            }
        ];
        Todos.create(starterTodos, function(err, results) {
            res.send(results);
        });
    });
}