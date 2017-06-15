import React, { Component } from 'react';
import {AppRegistry,Text,View,StyleSheet,ListView } from 'react-native';

export default class UsersDetails extends Component {
  
  constructor(props){
   super(props);
  }

  render(){
    const { params } = this.props.navigation.state;
    return(
      <View>
        <Text>Name: {params.user.name}</Text>
        <Text>Email: {params.user.email}</Text>
        <Text>Address: {params.user.address.street}</Text>
      </View>
    );
  }

}