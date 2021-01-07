import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="todo stack-small">
        <div className="c-cb">
          <input
            id={this.props.id}
            type="checkbox"
            defaultChecked={this.props.completed}
            onChange={() => this.props.toggleCompleted(this.props.id)}
          />
          <label className="todo-label" htmlFor={this.props.id}>
            {this.props.name}
          </label>
        </div>
        <div className="btn-group">
          <button type="button" className="btn">
            Edit <span className="visually-hidden">Eat</span>
          </button>
          <button
            type="button"
            className="btn btn__danger"
            onClick={() => this.props.deleteTask(this.props.id)}
          >
            Delete <span className="visually-hidden">Eat</span>
          </button>
        </div>
      </li>
    );
  }
}

export default Todo;
