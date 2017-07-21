const ava = require('ava');
const Rtc = require('../index').default;

const actionTypes = Rtc(true)('START', 'FINISH', 'ERROR')('CREATE_ITEMS', 'GET_ITEMS', 'DELETE_ITEMS');

ava("result", t => {
  t.deepEqual(actionTypes, {
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
  );
});

ava("frozen", t => {
  t.throws(() => {
    actionTypes.prop = true;
  }, TypeError);
});