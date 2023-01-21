import "./app-info.css"

const AppInfo = ({increased, employees}) => {
	return (
		<div className="app-info">
			<h1>Учет Slaves в Dangeon</h1>
			<h2>Общее число Slaves: {employees}</h2>
			<h2>Semen получат: {increased}</h2>
		</div>
	);
}

export default AppInfo;