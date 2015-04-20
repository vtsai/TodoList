(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
    Renders the bottom section of TodoList including task count and remove task

    input functions: 
        todoList.removeTask()
    input values:
        todoList.taskCount
        todoList.finishedTaskCount
*/

var TodoBottom = (function (_React$Component) {
    function TodoBottom(props) {
        _classCallCheck(this, TodoBottom);

        _get(Object.getPrototypeOf(TodoBottom.prototype), "constructor", this).call(this, props);
    }

    _inherits(TodoBottom, _React$Component);

    _createClass(TodoBottom, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "bottom text-center" },
                React.createElement(
                    "span",
                    { className: "task-count" },
                    CONSTANTS.tasks,
                    " ",
                    React.createElement(
                        "span",
                        { className: "badge" },
                        this.props.taskCount
                    )
                ),
                React.createElement(
                    "button",
                    {
                        type: "button",

                        className: "btn btn-default command remove" + (this.props.finishedTaskCount > 0 ? "" : " hide"),

                        onClick: this.props.removeTask.bind(this)
                    },
                    CONSTANTS.remove
                )
            );
        }
    }]);

    return TodoBottom;
})(React.Component);

exports["default"] = TodoBottom;
module.exports = exports["default"];
// hides remove button when no tasks are finished
// remove all finished tasks
},{}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

/*
    Renders a TodoList 

    functionalities:
        - add a task
        - toggle a single task or all tasks between finished or not
        - remove a task
        - task counter

    todo:
        - edit a task
        - drag and reorder tasks

    dependencies:
        js/TodoTop.js
        js/TodoBottom.js
        js/TodoTask.js
        js/constants.js
        stylesheet/css/main.css

*/

var _TodoTop = require('./TodoTop');

var _TodoTop2 = _interopRequireWildcard(_TodoTop);

var _TodoBottom = require('./TodoBottom');

var _TodoBottom2 = _interopRequireWildcard(_TodoBottom);

var _TodoTask = require('./TodoTask');

var _TodoTask2 = _interopRequireWildcard(_TodoTask);

$(function () {

    var TodoList = React.createClass({
        displayName: 'TodoList',

        getInitialState: function getInitialState() {
            return {
                /* Main handle for all tasks contains:
                   {
                        value: str, // text for a single task
                        showing: bool // whether to display task or not
                   }
                */
                taskList: [],
                // How many tasks are checked off
                finishedTaskCount: 0
            };
        },
        // add a new task into taskList
        setTask: function setTask(val) {
            this.setState(function (state) {
                taskList: state.taskList.push({ value: val, showing: true });
            });
        },
        // renders a task
        addTask: function addTask(val, index) {
            return React.createElement(_TodoTask2['default'], {
                task: val,
                tid: index,
                toggle: this.toggle
            });
        },
        // deletes a task from taskList and zeros finishedTaskCount
        removeTask: function removeTask() {
            var remaining = this.state.taskList.filter(function (val) {
                return val.showing;
            });
            this.setState({ taskList: remaining, finishedTaskCount: 0 });
        },
        // shows or hides a single task and updates finishedTaskCount
        toggle: function toggle(val, index) {
            this.setState(function (state) {
                finishedTaskCount: val.showing ? state.finishedTaskCount++ : state.finishedTaskCount--;
            });
            this.setState(function (state) {
                taskList: state.taskList[index].showing = !val.showing;
            });
        },
        // shows or hides aall task and updates finishedTaskCount
        toggleAll: function toggleAll() {
            // whether or not all tasks are checked
            var toggleOn = this.state.finishedTaskCount >= this.state.taskList.length;

            if (toggleOn) {
                // All tasks checked
                this.setState(function (state) {
                    taskList: state.taskList.map(function (val) {
                        val.showing = true;
                    });
                });
                this.setState({ finishedTaskCount: 0 });
            } else {
                // Not all tasks checked
                this.setState(function (state) {
                    taskList: state.taskList.map(function (val) {
                        val.showing = false;
                    });
                });
                this.setState({ finishedTaskCount: this.state.taskList.length });
            }
        },
        render: function render() {
            return React.createElement(
                'div',
                { className: 'panel panel-default todo' },
                React.createElement(_TodoTop2['default'], {
                    setTask: this.setTask,
                    toggleAll: this.toggleAll,
                    allFinished: this.state.taskList.length == this.state.finishedTaskCount
                }),
                React.createElement(
                    'ul',
                    { className: 'list-group task-list' },
                    this.state.taskList.map(this.addTask)
                ),
                React.createElement(_TodoBottom2['default'], {
                    taskCount: this.state.taskList.length - this.state.finishedTaskCount,
                    finishedTaskCount: this.state.finishedTaskCount,
                    removeTask: this.removeTask,
                    filterTasks: this.filterTasks
                })
            );
        }
    });

    React.render(React.createElement(TodoList, null), document.getElementById('content'));
});
},{"./TodoBottom":1,"./TodoTask":2,"./TodoTop":3}]},{},[4]);
