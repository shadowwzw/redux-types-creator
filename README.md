# redux-types-creator
types generator for redux

## **Usage (default port: 3000)**

```js
import Rtc from "redux-types-creator";
const actionTypes = Rtc(true)
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