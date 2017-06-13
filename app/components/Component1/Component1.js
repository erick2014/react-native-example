import React, { Component } from 'react';
import {AppRegistry,Text,View,StyleSheet,TextInput } from 'react-native';

export default class Component1 extends Component {
  constructor(props){
    super(props);
    this.state={
      name:"Brad",
      showName:true,
      message:this.props.message
    }
  }
  render(){
    let name= this.state.showName ? this.state.name: 'No name';
    console.log("my props.",this.props)
    return(
      <View>
        <Text style={styles.myView}>{this.state.message} </Text>
        <View style={styles.container}>
          <View style={styles.box}>
            <Text>View 1</Text>
          </View>
          <View style={styles.box2}>
            <Text>View 2</Text>
          </View>
        </View>
        <View style={styles.inputBoxes}>
          <View style={styles.inputBox}>
            <TextInput placeholder="write your name here" />
          </View>
          <View style={styles.inputBox}>
            <TextInput placeholder="write your last name here" />
          </View>
        </View>
          
      </View>
    );
  }
}

const styles= StyleSheet.create({
  myView:{ "backgroundColor":"blue",color:"white",padding:10 },
  myText:{ "color":"white" },
  container:{ display:"flex",height:100,flexDirection:"row" },
  box:{ backgroundColor:"green",flex:1,alignItems:"center", justifyContent:"center" },
  box2:{ backgroundColor:"yellow",flex:1,alignItems:"center", justifyContent:"center" },
  inputBoxes:{ width:360,alignItems:"center",justifyContent:"center"},
  inputBox:{ width:300 }
  
})

AppRegistry.registerComponent('Component1', () => Component1);
