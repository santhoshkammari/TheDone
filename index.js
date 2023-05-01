/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import firebase from '@react-native-firebase/app';

import {name as appName} from './app.json';
const firebaseConfig = {
  apiKey: 'AIzaSyDUSSxqmdie0cqElFDMWWog_4OyqmXgBuc',
  authDomain: 'thedone-cc633.firebaseapp.com',
  projectId: 'thedone-cc633',
  storageBucket: 'thedone-cc633.appspot.com',
  messagingSenderId: '1004335350645',
  appId: '1:1004335350645:web:8b7e55785987315716c93c',
  measurementId: 'G-K9X2R1LWL2',
};
AppRegistry.registerComponent(appName, () => App);
