'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

Object.defineProperty(exports, '__esModule', {
    value: true
});
/*
    Renders the top section of TodoList including "toggle all" and input field

    input functions: 
        todoList.handleKeyDown()
        todoList.toggleAll()
    input values:
        todoList.allFinished
*/

var TodoTop = (function (_React$Component) {
    function TodoTop(props) {
        _classCallCheck(this, TodoTop);

        _get(Object.getPrototypeOf(TodoTop.prototype), 'constructor', this).call(this, props);
    }

    _inherits(TodoTop, _React$Component);

    _createClass(TodoTop, [{
        key: 'handleKeyDown',

        // Handle Enter Key for Task Input Field
        value: function handleKeyDown(event) {
            if (event.which === KEYS.ENTER_KEY) {
                event.preventDefault();

                var value = event.target.value;
                var task = value.trim();

                if (task.length) {
                    // set parent state with current value
                    this.props.setTask(task);
                    // clear input field
                    event.target.value = '';
                }
            }
        }
    }, {
        key: 'render',

        /*
         */
        value: function render() {
            return React.createElement(
                'div',
                { className: 'panel-body top' },
                React.createElement('span', {
                    className: 'glyphicon glyphicon-' + (this.props.allFinished ? 'minus' : 'ok') + ' todo-select',

                    onClick: this.props.toggleAll.bind(this)
                }),
                React.createElement('input', {
                    placeholder: CONSTANTS.enterATask,
                    className: 'todo-input',

                    onKeyDown: this.handleKeyDown.bind(this),
                    autoFocus: 'true'
                })
            );
        }
    }]);

    return TodoTop;
})(React.Component);

exports['default'] = TodoTop;
module.exports = exports['default'];

// display check or minus
// select or deselect all tasks
// add a new task when user presses "enter key"