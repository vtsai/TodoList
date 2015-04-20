'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

Object.defineProperty(exports, '__esModule', {
    value: true
});
/*
    Renders the middle section of TodoList including each task and its toggle

    input functions: 
        todoList.toggle()
    input values:
        todoList.task
        todoList.tid
*/

var TodoTask = (function (_React$Component) {
    function TodoTask(props) {
        _classCallCheck(this, TodoTask);

        _get(Object.getPrototypeOf(TodoTask.prototype), 'constructor', this).call(this, props);
    }

    _inherits(TodoTask, _React$Component);

    _createClass(TodoTask, [{
        key: 'toggle',

        // calls TodoList.toggle with current task and index
        value: function toggle() {
            this.props.toggle(this.props.task, this.props.tid);
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'li',
                { className: this.props.task.showing ? 'list-group-item' : 'list-group-item finished' },
                React.createElement('span', {
                    className: 'task-select glyphicon glyphicon-' + (this.props.task.showing ? 'unchecked' : 'ok'),

                    onClick: this.toggle.bind(this)
                }),
                React.createElement(
                    'span',
                    { className: 'task' },
                    this.props.task.value
                )
            );
        }
    }]);

    return TodoTask;
})(React.Component);

exports['default'] = TodoTask;
module.exports = exports['default'];

// display check or box for each task
// toggle task between finished or not