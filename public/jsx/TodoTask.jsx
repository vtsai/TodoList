/*
    Renders the middle section of TodoList including each task and its toggle

    input functions: 
        todoList.toggle()
    input values:
        todoList.task
        todoList.tid
*/
export default class TodoTask extends React.Component {
    constructor(props) {
        super(props);
    }

    // calls TodoList.toggle with current task and index
    toggle() {
        this.props.toggle(this.props.task, this.props.tid);
    }

    render() {
        return (
            <li className={this.props.task.showing ? 'list-group-item':'list-group-item finished'}>
                <span 
                    // display check or box for each task
                    className={'task-select glyphicon glyphicon-'+(this.props.task.showing?'unchecked':'ok')}
                    // toggle task between finished or not
                    onClick={this.toggle.bind(this)}
                />
                <span className="task">{this.props.task.value}</span>
            </li>
        );
    }
}