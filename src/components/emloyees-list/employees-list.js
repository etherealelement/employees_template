import EmployeesListItem from "../employees-list-item/employees-list-item";
import "./emloyees-list.css";

const EmployeesList = ({ data, onDelete, onToggleProp }) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <EmployeesListItem
        onDelete={() => onDelete(id)}
        key={id}
        {...itemProps}
        onToggleProp={(e)=> onToggleProp(id, e.currentTarget.getAttribute("data-toggle"))}
      ></EmployeesListItem>
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeesList;
