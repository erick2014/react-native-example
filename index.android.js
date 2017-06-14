import React, { Component } from 'react';
import {AppRegistry,Text,View} from 'react-native';

import GeneralView from './app/components/GeneralView/GeneralView';


export default class asutienda_mobile extends Component {
  render(){
    return(
      <View>
        <GeneralView message="hey there llaa"/>
      </View>
    );
  }
}

AppRegistry.registerComponent('asutienda_mobile', () => asutienda_mobile);
