import React from 'react';

import { TaskContext } from './TaskContext';
import { useContext } from 'react';

const Task = props => {
	const { text, date, id, active, important, endDate } = props.task;

	const { handleChange, handleDelete } = useContext(TaskContext);

	const style = { color: 'red' }

	if (active) {
		return (
			<div>
				<p>
					<strong style={important ? style : null}>{text}</strong> - until {date} <button onClick={() => handleChange(id)}>Done</button><button onClick={() => handleDelete(id)}>X</button>
				</p>
			</div>
		);
	} else {
		const finish = new Date(endDate).toLocaleString();

		return (
			<div>
				<p>
					<strong>{text}</strong> <em>(final date {date})</em>
					<br />
					<span>- confirmed  {finish}</span>
					<button onClick={() => handleDelete(id)}>X</button>
				</p>
			</div>
		)
	}
}

export default Task;