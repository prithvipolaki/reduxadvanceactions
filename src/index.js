import { createStore } from 'redux';
import { createActions, createAction, handleActions, handleAction } from 'redux-actions';

// DEFAULT STATE
const defaultState = { counter: 0 };

// CREATE ACTION / CREATE ACTIONS

/* const increment = createAction('INCREMENT');
const decrement = createAction('DECREMENT'); */

const { increment, decrement } = createActions('INCREMENT', 'DECREMENT')


// HANDLE ACTION / HANDLE ACTIONS

/* const reducer1 = handleAction(increment, (state, action) => ({
    ...state, counter: state.counter + action.payload
}), defaultState) */

const reducer = handleActions({
    [increment]: (state, action) => {
        return {
            ...state, counter: state.counter + action.payload
        }
    },
    [decrement]: (state, action) => ({ ...state, counter: state.counter - action.payload })
},
    defaultState
);

// CREATE STORE

const store = createStore(reducer, defaultState);

// SUBSCRIBE STORE

store.subscribe(() => {
    console.log('store is updated ', store.getState().counter);
});

// DISPATCH ACTIONS

store.dispatch(increment(10));
store.dispatch(decrement(5));
