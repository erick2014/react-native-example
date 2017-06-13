import React, { Component } from 'react';
import {AppRegistry,Text,View} from 'react-native';
import Component1 from './app/components/Component1/Component1'

export default class asutienda_mobile extends Component {
  render(){
    return(
      <View>
        <Component1 message="hey there llaa"/>
      </View>
    );
  }
}

AppRegistry.registerComponent('asutienda_mobile', () => asutienda_mobile);
