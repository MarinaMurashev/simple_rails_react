import React from "react";
import { Link } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";

class HelloReactDisplay extends React.Component {
  constructor () {
    super();
    this.state = {
      name: {}
    };
  }

  fetchName (id) {
    axios.get(`api/names/${id}`)
      .then(response => {
        this.setState({ name: response.data });
      })
      .catch(error => {
        console.error(error);
      });
  }

  setNameIdFromQueryString (qs) {
    this.qsParams = queryString.parse(qs);
    if (this.qsParams.id) {
      this.nameId = Number(this.qsParams.id);
    }
  }

  componentDidMount () {
    this.setNameIdFromQueryString(this.props.location.search);
    this.fetchName(this.nameId);
  }

  componentWillReceiveProps (nextProps) {
    this.setNameIdFromQueryString(nextProps.location.search);
    this.fetchName(this.nameId);
  }

  render () {
    const nextNameId = Number(this.state.name.id) + 1;

    return (
      <div>
        <Link to={`/?name=${nextNameId}`}>Next</Link>
        <p>{this.state.name.first}</p>
        <p>{this.state.name.last}</p>
      </div>
    );
  }
}

export default HelloReactDisplay;
