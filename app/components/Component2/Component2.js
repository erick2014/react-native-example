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
    const ds = new ListView.DataSource({rowHasChanged:(r1,r2)=> r1!== r2 })
    this.state={
      dataSource:ds.cloneWithRows(users)
    }
    this.renderMyRow=this.renderMyRow.bind(this);
  }
  
  renderMyRow(rowData){
    return(
      <View>
        <Text>{rowData.name}</Text> 
      </View>
    )
  }

  render(){
    return(
      <ListView
        dataSource={this.state.dataSource}
        renderRow={ (rowData)=> this.renderMyRow( rowData )  }
      />
    );
  }
}

const styles= StyleSheet.create({
  
})

AppRegistry.registerComponent('Component2', () => Component2);
