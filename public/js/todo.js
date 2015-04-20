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