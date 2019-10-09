import React from 'react';
import Table from 'react-bootstrap/Table';

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
    </thead>
  );
}

const TableBody = (props) => {
  var rows = [];
  for (var i = 0; i < props.userInfo.length; i++) {
      rows.push(
        <tr>
          <td>{i}</td>
          <td>{props.userInfo[i].firstname}</td>
          <td>{props.userInfo[i].lastname}</td>
          <td>@{props.userInfo[i].username}</td>
        </tr>
      );
  }
  
  return <tbody>{rows}</tbody>;
}


const ImportantTable = (props) => {
  return (
    <Table bordered hover variant="dark">
      <TableHeader />
      <TableBody userInfo={props.userInfo}/>
    </Table>
  );
}

export default ImportantTable;
