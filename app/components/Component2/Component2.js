import React, { Component } from 'react';
import {AppRegistry,Text,View,StyleSheet,ListView } from 'react-native';

const users=[
  { name: "John Doe" },
  { name:"Brad Traversy" },
  { name:"Steve Smith" },
  { name:"Janet William" }
]

export default class Component2 extends Component {
  
  constructor(props){
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged:(r1,r2)=> r1!== r2 })
    this.state={
      dataSource:this.ds
    }
    this.renderMyRow=this.renderMyRow.bind(this);
    this.fetchUsers=this.fetchUsers.bind(this);
  }

  componentDidMount(){
    this.fetchUsers()
  }

  fetchUsers(){
    fetch("http://jsonplaceholder.typicode.com/posts")
      //receive and parse the data 
      .then( (resp)=>{
        return resp.json();
      })
      //receive the data as json
      .then( (resp)=>{
        
        if( resp instanceof Array && resp.length>0  ){
          let newData=this.ds.cloneWithRows(resp)
          this.setState({ dataSource: newData })
        }else{
          console.log("nope..")
        }
      })  
      .catch( (resp)=>{
        console.error("something were wrong..")
      })
  }
  
  renderMyRow(rowData){
    console.log("calling render my row..",rowData)
    let title=( rowData.title )? rowData.title : '';
   
    if( title.length > 20){
      title=title.substr(0,20)
    }

    return(
      <View>
        <Text>Post:{ rowData.id } {title}</Text> 
      </View>
    )
  }

  render(){
    return(
      <View>
        <Text style={styles.boxSpaces}>Users List :</Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={ (rowData)=> this.renderMyRow( rowData )  }
        />
      </View>
    );
  }
}

const styles= StyleSheet.create({
  boxSpaces:{ marginTop:10,marginBottom:10 }
})

AppRegistry.registerComponent('Component2', () => Component2);
