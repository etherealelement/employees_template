import "./app-filter.css"

const AppFilter = () => {
	return (
		<div className="btn-group">
			<button className="btn btn-light" 
			type="button"
			>
				Все Slaves
			</button>
			<button className="btn btn-outline-light" 
			type="button"
			>
				Slaves на повышение 
			</button>
			<button className="btn btn-outline-light" 
			type="button"
			>
				З\П больше 300$
			</button>
		</div>
	);
}

export default AppFilter;