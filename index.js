/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Welcome from './screens/Welcome';

AppRegistry.registerComponent(appName, () => () => <Welcome />);
