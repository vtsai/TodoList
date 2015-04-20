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
import TodoTop from './TodoTop';
import TodoBottom from './TodoBottom';
import TodoTask from './TodoTask';

$(function() {

    var TodoList = React.createClass({
        getInitialState: function() {
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
        setTask: function(val) {
            this.setState((state) => { taskList: state.taskList.push({value: val, showing: true})});
        },
        // renders a task
        addTask: function(val, index) {
            return (
                <TodoTask 
                    task={val}
                    tid={index}
                    toggle={this.toggle}
                />
            );
        },
        // deletes a task from taskList and zeros finishedTaskCount
        removeTask: function() {
            let remaining = this.state.taskList.filter(function(val) {
                return (val.showing);
            });
            this.setState({ taskList: remaining, finishedTaskCount: 0 });
        },
        // shows or hides a single task and updates finishedTaskCount
        toggle: function(val, index) {
            this.setState((state) => { finishedTaskCount: (val.showing ? state.finishedTaskCount++: state.finishedTaskCount--) });
            this.setState((state) => { taskList: state.taskList[index].showing=!val.showing });
        },
        // shows or hides aall task and updates finishedTaskCount
        toggleAll: function() {
            // whether or not all tasks are checked
            let toggleOn = (this.state.finishedTaskCount >= this.state.taskList.length);

            if(toggleOn) {
                // All tasks checked
                this.setState((state) => { taskList: state.taskList.map(function(val) {
                        val.showing = true;
                    })
                });
                this.setState({ finishedTaskCount: 0 });
            } else {
                // Not all tasks checked
                this.setState((state) => { taskList: state.taskList.map(function(val) {
                        val.showing = false;
                    })
                });
                this.setState({ finishedTaskCount: this.state.taskList.length });
            }
        },
        render: function() {
            return (
                <div className="panel panel-default todo">
                    <TodoTop
                        setTask={this.setTask}
                        toggleAll={this.toggleAll}
                        allFinished={(this.state.taskList.length == this.state.finishedTaskCount)}
                    />
                    <ul className="list-group task-list">
                        {this.state.taskList.map(this.addTask)}
                    </ul>
                    <TodoBottom 
                        taskCount={(this.state.taskList.length - this.state.finishedTaskCount)}
                        finishedTaskCount={this.state.finishedTaskCount}
                        removeTask={this.removeTask}
                        filterTasks={this.filterTasks}
                    />
                </div>
            );
        }
    });

    React.render(
       <TodoList />,
        document.getElementById('content')
    );
});
