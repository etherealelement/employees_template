import EmployeesListItem from "../employees-list-item/employees-list-item";
import "./emloyees-list.css";

const EmployeesList = ({ data, onDelete }) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <EmployeesListItem
        onDelete={() => onDelete(id)}
        key={id}
        {...itemProps}
      ></EmployeesListItem>
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeesList;
