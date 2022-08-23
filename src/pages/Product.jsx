import React, { useEffect,useState } from "react";
import { Button, Table } from "semantic-ui-react";
import axios from "axios";

const Product=()=> {
    const[apiData,setApiData]=useState([]);
    useEffect(()=>{
      axios.get('https://62a18fd6cc8c0118ef4e1022.mockapi.io/crud')
      .then((getData)=>{
        setApiData(getData.data);
      })
    })

    return (
        <div> 
        <Table celled>
    <Table.Header>
    <Table.Row>
      <Table.HeaderCell>ID</Table.HeaderCell>
      <Table.HeaderCell>Firstname</Table.HeaderCell>
      <Table.HeaderCell>Lastname</Table.HeaderCell>
      <Table.HeaderCell>Image</Table.HeaderCell>
      </Table.Row>
  </Table.Header>
  <Table.Body>
    {apiData.map((data)=>{
      return (
        <Table.Row >
        <Table.Cell>{data.id}</Table.Cell>
        <Table.Cell>{data.Firstname}</Table.Cell>
        <Table.Cell>{data.Lastname}</Table.Cell>
        <Table.Cell>{data.Image}</Table.Cell>

        <Table.Cell>
          <Button color="green" >Update</Button>
          </Table.Cell>
          <Table.Cell>
          <Button color="red">Delete</Button>
          </Table.Cell>

        </Table.Row> 
      )
    })}

    
  </Table.Body>
</Table>
</div>
    
  );
};



export default Product;