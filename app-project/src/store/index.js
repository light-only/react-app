import {createStore,applyMiddleware,combineReducers} from 'redux';

import Thunk from 'redux-thunk';

import reducer from "../reducer";

const store = createStore(
    //combineReducers:合并reducer的作用，把多个reducer合并成一个reducer
    combineReducers(reducer),
    // applyMiddleware:  用来拆分处理redux的逻辑问题，而`redux-thunk`作为处理的中间件。原来的`type`是对象类型的，通过`thunk`可以变成函数形式的。
    applyMiddleware(Thunk)
);

export default store;