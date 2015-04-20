/*
    Renders the top section of TodoList including "toggle all" and input field

    input functions: 
        todoList.handleKeyDown()
        todoList.toggleAll()
    input values:
        todoList.allFinished
*/
export default class TodoTop extends React.Component {
    constructor(props) {
        super(props);
    }

    // Handle Enter Key for Task Input Field
    handleKeyDown(event) {
        if(event.which === KEYS.ENTER_KEY) {
            event.preventDefault();

            let value = event.target.value;
            let task = value.trim();

            if(task.length) {
                // set parent state with current value
                this.props.setTask(task);
                // clear input field
                event.target.value = '';
            }
        }
    }

    /*

    */
    render() {
        return (
            <div className="panel-body top">
                <span
                    // display check or minus
                    className={'glyphicon glyphicon-'+(this.props.allFinished?'minus':'ok')+' todo-select'}
                    // select or deselect all tasks
                    onClick={this.props.toggleAll.bind(this)}
                />
                <input 
                    placeholder={CONSTANTS.enterATask}
                    className="todo-input"
                    // add a new task when user presses "enter key"
                    onKeyDown={this.handleKeyDown.bind(this)}
                    autoFocus="true"
                />
            </div>
        );
    }
}