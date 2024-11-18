import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import {Component} from "react";
import axios from "axios";

class PersonList extends Component {
  state = {
    persons: []
  }

  //Component Lifecycle Callback
  componentDidMount() {
    axios.get(`https://randomuser.me/api/?results=10`)
        .then(res => {
          console.log(res.data);
          const persons = res.data.results;
          this.setState({ persons });
        });
  }
  render() {
      return (
          <div className="container">
              <h1 className="text-center text-white bg-success py-3">User List</h1>
              <div className="row">
                  {this.state.persons.map((person) => (
                      <div key={person.login.uuid} className="col-md-6">
                          <div className="card mb-4 shadow-sm">
                              <div className="card-header d-flex align-items-center">
                                  <img
                                      src={person.picture.large}
                                      alt={`${person.name.first} ${person.name.last}`}
                                      className="rounded-circle me-3"
                                      style={{ width: "80px", height: "80px" }}
                                  />
                                  <h5 className="mb-0">
                                      {person.name.title} {person.name.first} {person.name.last}
                                  </h5>
                              </div>
                              <div className="card-body">
                                  <p>
                                      <strong>User Name:</strong> {person.login.username}
                                  </p>
                                  <p>
                                      <strong>Gender:</strong> {person.gender.toUpperCase()}
                                  </p>
                                  <p>
                                      <strong>Time Zone:</strong>{" "}
                                      {person.location.timezone.description}
                                  </p>
                                  <p>
                                      <strong>Address:</strong>{" "}
                                      {`${person.location.street.number} ${person.location.street.name}, ${person.location.city}, ${person.location.state}, ${person.location.country} - ${person.location.postcode}`}
                                  </p>
                                  <p>
                                      <strong>Email:</strong> {person.email}
                                  </p>
                                  <p>
                                      <strong>Birth Date:</strong>{" "}
                                      {`${person.dob.date.split("T")[0]} (${person.dob.age} years)`}
                                  </p>
                                  <p>
                                      <strong>Register Date:</strong>{" "}
                                      {person.registered.date.split("T")[0]}
                                  </p>
                                  <p>
                                      <strong>Phone:</strong> {person.phone}
                                  </p>
                                  <p>
                                      <strong>Cell:</strong> {person.cell}
                                  </p>
                                  <button className="btn btn-primary mt-3">Details</button>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      )
  };
}

export default PersonList;
