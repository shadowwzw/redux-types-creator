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

## **Usage (use ES6 Modules)**

```js
import reduxTypesCreator from "redux-types-creator";
const actionTypes = reduxTypesCreator(true)
('START', 'FINISH', 'ERROR')
('CREATE_ITEMS', 'GET_ITEMS', 'DELETE_ITEMS');

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
```
----------

## **Usage (use require)**

```js
const reduxTypesCreator = require("redux-types-creator").default;
const actionTypes = reduxTypesCreator(true)
('START', 'FINISH', 'ERROR')
('CREATE_ITEMS', 'GET_ITEMS', 'DELETE_ITEMS');

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
```