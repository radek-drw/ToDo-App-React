import React from 'react';

const Task = props => {
	const { text, date, id, active, important, endDate } = props.task;

	const style = {
		color: 'red'
	}

	if (active) {
		return (
			<div>
				<p>
					<strong style={important ? style : null}>{text}</strong> - until {date} <button onClick={() => props.change(id)}>Done</button><button onClick={() => props.delete(id)}>X</button>
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
					<button onClick={() => props.delete(id)}>X</button>
				</p>
			</div>
		)
	}
}

export default Task;