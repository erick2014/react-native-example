/*React stuff*/
import React, { Component } from 'react';
/*React apollo stuff*/
import { ApolloClient, createNetworkInterface,ApolloProvider,gql,graphql } from 'react-apollo';

/*React native stuff*/
import {AppRegistry,Text,View } from 'react-native';
/*Navigation stuff*/
import { StackNavigator } from 'react-navigation';


/*Custom components*/
import GeneralView from './app/components/GeneralView/GeneralView';
import UsersDetails from './app/components/UsersDetails/UsersDetails';


/*Apollo client setup*/
const apolloClient = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://45.56.118.22:4000/graphql',
  }),
});

class HomeScreen extends Component {
  static navigationOptions = { title: 'Welcome'};
  render() {
    return(
      <ApolloProvider client={apolloClient}>
        <GeneralView message="hello motto" {...this.props} />
      </ApolloProvider>
    )
  }
}

const App = StackNavigator({
  Home: { screen: HomeScreen },
  UserDetails:{ screen:UsersDetails }
});

AppRegistry.registerComponent('asutienda_mobile', () => App);