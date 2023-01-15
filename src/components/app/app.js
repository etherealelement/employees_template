import { Component } from "react";

import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import EmployeesList from "../emloyees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import ConditionList from "../conditions-list/conditions-list";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "Straponoff",
          salary: 300,
          increase: false,
          id: 1,
        },
        {
          name: "Danch-2003",
          salary: 300,
          increase: true,
          id: 2,
        },
        {
          name: "Soessa",
          salary: 0,
          increase: false,
          id: 3,
        },
      ],
      namesData: [
        {
          name: "van",
          salary: 1000,
          increase: false,
          id: 1,
        },
        {
          name: "billy",
          salary: 200,
          increase: true,
          id: 2,
        },
        {
          name: "Jabronie",
          salary: 3000,
          increase: false,
          id: 3,
        },
      ],
    };
  }

  deleteItem = (id) => {
    this.setState(({data})=>{
      return {
        data: data.filter(item => item.id !== id),
      }
    })
  }

  deleteItemNext = (id) =>{
    this.setState(({namesData})=>{
      return {
        namesData: namesData.filter(item => item.id !== id)
      }
    })
  }


  render() {
    return (
      <div className="app">
        <AppInfo></AppInfo>
        <div className="search-panel">
          <SearchPanel></SearchPanel>
          <AppFilter></AppFilter>
          <EmployeesList
            data={this.state.data}
            onDelete={this.deleteItem}
          ></EmployeesList>
          <ConditionList deleteItemNext={this.deleteItemNext}
          namesData={this.state.namesData}></ConditionList>
        </div>
        <EmployeesAddForm></EmployeesAddForm>
      </div>
    );
  }
}

export default App;
