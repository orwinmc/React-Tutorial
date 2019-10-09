import React, {Component} from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

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


class ImportantTable extends Component {
  constructor(props) {
    super(props);
    this.state = { userInfo:
      [
        {
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
        }
      ]
    }

    this.removeUser = this.removeUser.bind(this);
  }

  removeUser(index) {
    this.setState((state) => ({
      userInfo: state.userInfo.filter((user, i) => {
        console.log(i);
        return i !== index;
      })
    }));
  }

  render() {
    return (
      <Table bordered hover>
        <TableHeader />
        <TableBody userInfo={this.state.userInfo} removeUser={this.removeUser}/>
      </Table>
    )
  }
}

export default ImportantTable;
