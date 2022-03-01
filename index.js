/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Login from './screens/Login';
import Register from './screens/Register';

AppRegistry.registerComponent(appName, () => () => <Register />);
