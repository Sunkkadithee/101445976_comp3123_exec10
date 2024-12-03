## Redux Counter App

Redux Counter App is a simple Redux-based application that demonstrates how to manage the state of a counter using Redux. The application allows the user to increment, decrement, and reset the counter using Redux actions and state management.

# Features
Increment the counter value.
Decrement the counter value.
Reset the counter value to 0.
The application uses Redux for managing global state.


# Redux Concepts Demonstrated
This application showcases the following Redux concepts:

State
The global state in Redux holds the counter value used across the app.

Store
The Redux store is where the state is stored. It centralizes all state updates and ensures consistency across the app.

Reducer
Reducers define how the state should change in response to dispatched actions.

Action
Actions are payloads of information that describe changes in the state.

Dispatch
Dispatch sends actions to the Redux store, which updates the state based on the reducer logic.

Subscribe
Components can subscribe to state changes using React-Redux hooks like useSelector, ensuring automatic updates when the state changes.

# How It Works
# 1. State
The state represents the global data structure stored in the Redux store. In this app, the state contains the counter key, initialized to 0. This state is managed by the counterReducer.

# 2. Store
The Redux store is created using the createStore function. It combines all reducers (using combineReducers if there are multiple reducers) and stores the application's state. The store also integrates with Redux DevTools for debugging.

# 3. Actions
Actions are plain JavaScript objects with a type field that specifies the kind of change to make. This app uses three actions:

INCREMENT: Increases the counter value by 1.
DECREMENT: Decreases the counter value by 1.
RESET: Resets the counter value to 0.
Action creators are functions that return these action objects, making it easier to use them in the application.

# 4. Reducer
The reducer is a pure function that listens for actions and updates the state based on the action's type. In this app:

The counterReducer increases, decreases, or resets the counter based on the dispatched action.
The reducer ensures that state updates are predictable and immutable.

# 5. Dispatch
Dispatch is a method provided by Redux to trigger actions. In React, the useDispatch hook is used to access this method. For example:

Clicking the "Increment" button triggers dispatch(increment()), which sends the INCREMENT action to the store.
