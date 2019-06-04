const urlencoded = require('body-parser');
const slackBot = require('slackbots');

let data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'watch a movie'}];
let urlencodedParser = urlencoded({extended: false});

module.exports = function(app) {

const bot = new slackBot({
    token: 'xoxb-638802650978-638789633107-ZQp7sYtyCJZlxcLZvUbsnK5f',
    name: 'tryBot'
});

app.get('/', function(req, res) {
    res.render('todo', {todos: data});
});

app.post('/todo', urlencodedParser, function(req, res) {
    const params = {
        icon_emoji: ':smiley:'
    };
    bot.postMessageToUser('preetsardhara1999', `Item added: ${req.body.item}`, params);
    data.push(req.body);
    res.json(data);
});

app.delete('/todo/:item', function(req, res) {
    const params = {
        icon_emoji: ':smiley:'
    };
    bot.postMessageToUser('preetsardhara1999', `Item removed: ${req.params.item}`, params);
    data = data.filter(function(todo) {
        return todo.item.replace(/ /g, '-') !== req.params.item;
    });
    res.json(data);
});

}