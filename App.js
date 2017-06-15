/*React stuff*/
import React from 'react';
/*React native stuff*/
import {
  AppRegistry,
  Text,
} from 'react-native';

/*Navigation stuff*/
import { StackNavigator } from 'react-navigation';

/*Custom components*/
import GeneralView from './app/components/GeneralView/GeneralView';
import UsersDetails from './app/components/UsersDetails/UsersDetails';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    return(
      <GeneralView message="hey there llaa" {...this.props} />
    )
  }
}

const App = StackNavigator({
  Home: { screen: HomeScreen },
  UserDetails:{ screen:UsersDetails }
});

AppRegistry.registerComponent('asutienda_mobile', () => App);