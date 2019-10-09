import React, {Component} from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
        <th>Edit</th>
      </tr>
    </thead>
  );
}

const TableBody = (props) => {
  const rows = props.userInfo.map((row, index) => {
    return (
      <tr key={index}>
        <td>{index}</td>
        <td>{props.userInfo[index].firstname}</td>
        <td>{props.userInfo[index].lastname}</td>
        <td>@{props.userInfo[index].username}</td>
        <td><Button onClick={() => props.removeUser(index)}>Remove</Button></td>
      </tr>
    )
  });

  return <tbody>{rows}</tbody>;
}

const AddForm = (props) => {
  return (
    <Form>
      <Form.Row>
        <Col>
          <Form.Control id="fn_input" placeholder="First Name" onChange={props.formUpdated} />
        </Col>
        <Col>
          <Form.Control id="ln_input" placeholder="Last Name" onChange={props.formUpdated} />
        </Col>
        <Col>
          <Form.Control id="un_input" placeholder="Username" onChange={props.formUpdated} />
        </Col>
        <Col>
          <Button variant="primary" onClick={props.addUser}>
            Submit
          </Button>
        </Col>
      </Form.Row>
    </Form>
  )
}


class UserDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { userInfo:
                    [{
                      firstname: 'Michael',
                      lastname: 'Orwin',
                      username: 'orwinmc'
                    },
                    {
                      firstname: 'Josh',
                      lastname: 'Gibson',
                      username: 'gibsonjosh55'
                    },
                    {
                      firstname: 'Sharif',
                      lastname: 'Shaker',
                      username: 'sharifmsha'
                    },
                    {
                      firstname: 'Erin',
                      lastname: 'Radermacher',
                      username: 'erinr_8'
                    },
                    {
                      firstname: 'Keegan',
                      lastname: 'Bach',
                      username: 'kbeazy'
                    },
                    {
                      firstname: 'Connor',
                      lastname: 'Bach',
                      username: 'cbach120'
                    }],
                  firstname_entry: '',
                  lastname_entry: '',
                  username_entry: ''
    }

    this.removeUser = this.removeUser.bind(this);
    this.addUser = this.addUser.bind(this);
    this.formUpdated = this.formUpdated.bind(this);
  }

  removeUser(index) {
    this.setState((state) => ({
      userInfo: state.userInfo.filter((user, i) => {
        return i !== index;
      })
    }));
  }

  addUser() {
    this.setState((state) => ({
      userInfo: state.userInfo.concat({
        firstname: state.firstname_entry,
        lastname: state.lastname_entry,
        username: state.username_entry
      })
    }));
  }

  formUpdated(event) {
    this.setState(() => ({
      firstname_entry: document.getElementById('fn_input').value,
      lastname_entry: document.getElementById('ln_input').value,
      username_entry: document.getElementById('un_input').value
    }));
  }

  render() {
    return (
      <div>
        <Table bordered hover>
          <TableHeader />
          <TableBody userInfo={this.state.userInfo} removeUser={this.removeUser}/>
        </Table>
        <AddForm addUser={this.addUser} formUpdated={this.formUpdated}/>
      </div>
    )
  }
}

export default UserDashboard;
