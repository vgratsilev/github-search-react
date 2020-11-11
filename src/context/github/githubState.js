import React, { useReducer } from 'react';
import { GithubContext } from './githubContext';
import { GithubReducer } from './githubReducer';

export const GithubState = ({children}) => {
    const initialState = {
        user: {},
        users: [],
        loading: false,
        repos: []
    };
    const [state, dispatch] = useReducer(GithubReducer, initialState);

    return (
        <GithubContext.Provider value={{}}>
            {children}
        </GithubContext.Provider>
    );
}
