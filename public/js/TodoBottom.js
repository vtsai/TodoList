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