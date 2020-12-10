import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root';

// TESTING
import * as SessionApiUtil from './util/session_api_util';
import * as SessionActions from './actions/session_actions';
import * as ArticleApiUtil from './util/article_api_util';
import * as ArticleActions from './actions/article_actions';
import configureStore from './store/store';
//

document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { currentUser: window.currentUser }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    // TESTING
    // window.signUp = SessionApiUtil.signUp;
    // window.signIn = SessionApiUtil.signIn;
    // window.signOut = SessionApiUtil.signOut;
    // window.fetchArticles = ArticleApiUtil.fetchArticles;
    window.fetchArticles = ArticleActions.fetchArticles;
    window.signUp = SessionActions.signUp;
    window.signIn = SessionActions.signIn;
    window.signOut = SessionActions.signOut;
    window.store = store;
    window.dispatch = store.dispatch;
    //

    
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
});