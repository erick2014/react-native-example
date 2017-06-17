import React, { Component } from 'react';
import {AppRegistry,Text,View,StyleSheet,ListView,TouchableHighlight } from 'react-native';

export default class UsersList extends Component {
  
  constructor(props){
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged:(r1,r2)=> r1!== r2 })
    this.state={
      dataSource:this.ds
    }
    this.renderMyRow=this.renderMyRow.bind(this);
    this.fetchUsers=this.fetchUsers.bind(this);
    this._onClickUserFromList=this._onClickUserFromList.bind(this);
  }

  componentDidMount(){
    //this.fetchUsers()
  }

  fetchUsers(){
    fetch("http://jsonplaceholder.typicode.com/users")
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
        console.log("something were wrong, check your connection or something")
      })
  }

  _onClickUserFromList(user){
    this.props.navigate("UserDetails",{ user:user });
  }
  
  renderMyRow(rowData){
    return(
      <View style={{margin:10}}>
        <TouchableHighlight onPress={ ()=>{ this._onClickUserFromList(rowData) } }>
          <Text> {rowData.name }: {rowData.email}</Text> 
        </TouchableHighlight>
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
