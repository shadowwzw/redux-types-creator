# redux-types-creator
types generator for redux

[![Latest Stable Version](https://img.shields.io/npm/v/redux-types-creator.svg)](https://www.npmjs.com/package/redux-types-creator)
[![License](https://img.shields.io/npm/l/redux-types-creator.svg)](https://www.npmjs.com/package/redux-types-creator)

----------

## **Installation**

```bash
$ npm install redux-types-creator --save
```
or
```bash
$ yarn add redux-types-creator
```
----------

examples which uses redux-types-creator
1) [react-native-redux-saga](https://github.com/shadowwzw/react-native-redux-saga/tree/master/actions)
2) [react-native-reddit-demo](https://github.com/shadowwzw/react-native-reddit-demo/tree/master/actions)

----------

## **Usage (use ES6 Modules)**

```js
// const reduxTypesCreator = require("redux-types-creator").default; // use require
import reduxTypesCreator from "redux-types-creator";
const actionTypes = reduxTypesCreator(true) // true - object will be frozen.
('START', 'FINISH', 'ERROR') // postfix
('CREATE_ITEMS', 'GET_ITEMS', 'DELETE_ITEMS'); // types

console.log(actionTypes);
/*
{
      CREATE_ITEMS: {
        START: 'CREATE_ITEMS_START',
        FINISH: 'CREATE_ITEMS_FINISH',
        ERROR: 'CREATE_ITEMS_ERROR',
        SELF: 'CREATE_ITEMS'
      },
      GET_ITEMS: {
        START: 'GET_ITEMS_START',
        FINISH: 'GET_ITEMS_FINISH',
        ERROR: 'GET_ITEMS_ERROR',
        SELF: 'GET_ITEMS'
      },
      DELETE_ITEMS: {
        START: 'DELETE_ITEMS_START',
        FINISH: 'DELETE_ITEMS_FINISH',
        ERROR: 'DELETE_ITEMS_ERROR',
        SELF: 'DELETE_ITEMS'
      }
    }
 */

const { CREATE_ITEMS, GET_ITEMS, DELETE_ITEMS } = actionTypes;
CREATE_ITEMS.SELF // CREATE_ITEMS
CREATE_ITEMS.START // CREATE_ITEMS_START
CREATE_ITEMS.FINISH // CREATE_ITEMS_FINISH
CREATE_ITEMS.ERROR // CREATE_ITEMS_ERROR

// action creator
getItems = () => ({
  type: CREATE_ITEMS.SELF
})
```
----------
