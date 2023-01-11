import ConditionListItem from "../condition-list-items/condition-list-items";
import "./conditions-list.css"


const ConditionList = ({namesData}) => {

	const elem = namesData.map((item)=>{
		const {id, ...itemProps} = item
		return <ConditionListItem key="id" {...itemProps}></ConditionListItem>
	})

	return (
		<ul className="app-list list-group">{elem}</ul>
	);
}

export default ConditionList;