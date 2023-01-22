import { Component } from "react";
import "./search-panel.css"


class SearchPanel extends Component{ 
    constructor(props) { 
        super(props);
        this.state = {
            term: ''
        }
    }


    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term)
    }


	render() {
        return (
          <div className="form-group">
            <input
              type="text"
              clasName="form-control  new-post-label"
              placeholder="Default input"
              value={this.state.term}
              onChange={this.onUpdateSearch}
            />
          </div>
        );
    }
}

export default SearchPanel;