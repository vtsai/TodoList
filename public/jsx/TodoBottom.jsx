/*
    Renders the bottom section of TodoList including task count and remove task

    input functions: 
        todoList.removeTask()
    input values:
        todoList.taskCount
        todoList.finishedTaskCount
*/
export default class TodoBottom extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="bottom text-center">
                <span className="task-count">{CONSTANTS.tasks} <span className="badge">{this.props.taskCount}</span></span>
                <button 
                    type="button"
                    // hides remove button when no tasks are finished
                    className={'btn btn-default command remove'+(this.props.finishedTaskCount>0?'':' hide')}
                    // remove all finished tasks
                    onClick={this.props.removeTask.bind(this)}
                >{CONSTANTS.remove}</button>
            </div>
        );
    }
}