import React, { Component } from "react";
import axios from "axios";
// const url = process.env.workOrderCard || `http://localhost:9000/workorders/${this.state.id}`;
<<<<<<< HEAD
//const url = `https://tenantly-back.herokuapp.com/${this.state.id}`;
=======
// const url = `https://tenantly-back.herokuapp.com/${this.state.id}`;
>>>>>>> 5ac67fc5d1b765424fc57f2352e60e5be51fb23d
export default class Workordercard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.work.id,
      property: props.work.property,
      tenant: props.work.tenant,
      description: props.work.description,
      phone: props.work.phone,
      unsupervisedEntry: props.work.unsupervisedEntry,
      status: props.work.status
    };
  }

  //Radio Button Status

  inputs = ["Pending", "In Progress", "Completed"];

  //Updates the status of the radio button and sends a put request to the database to reflect the change in work order status
  statushandler = e => {
    this.setState({
      status: e.target.value
    });

    let updatedworkorder = {
      property: this.state.property,
      tenant: this.state.tenant,
      description: this.state.description,
      phone: this.state.phone,
      unsupervisedEntry: this.state.unsupervisedEntry,
      status: e.target.value
    };

<<<<<<< HEAD
    axios
      .put(
        `https://tenantly-back.herokuapp.com/${this.state.id}`,
        updatedworkorder
      )
      .then(response => {
        console.log("success");
      })
      .catch(error => {
        console.log(error);
      });
  };
=======
		axios
			.put(`https://tenantly-back.herokuapp.com/${this.state.id}`, updatedworkorder)
			.then((response) => {
				console.log('success');
			})
			.catch((error) => {
				console.log(error);
			});
	};
>>>>>>> 5ac67fc5d1b765424fc57f2352e60e5be51fb23d

  render() {
    return (
      <div className="property-card">
        <h1>{this.props.work.property}</h1>
        <h1>{this.props.work.tenant}</h1>
        <h1>{this.props.work.description}</h1>
        <h1>{this.props.work.phone}</h1>
        <h1>
          Unsupervised Entry is{" "}
          {this.props.work.unsupervisedEntry ? "Allowed" : "Not Allowed"}{" "}
        </h1>

        {/* Radio button form */}
        {this.inputs.map((values, i) => (
          <div key={i}>
            <h1>{values}</h1>
            <input
              type="radio"
              name={values}
              onChange={this.statushandler}
              value={values}
              checked={this.state.status === values}
            />
          </div>
        ))}
      </div>
    );
  }
}
