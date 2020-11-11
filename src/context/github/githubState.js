import React, { useReducer } from 'react';
import { GithubContext } from './githubContext';
import { GithubReducer } from './githubReducer';
import { CLEAR_USERS, GET_REPOS, GET_USER, SEARCH_USERS, SET_LOADING } from '../types';

export const GithubState = ({children}) => {
    const initialState = {
        user: {},
        users: [],
        loading: false,
        repos: []
    };
    const [state, dispatch] = useReducer(GithubReducer, initialState);

    const searchUsers = async (value) => {
        setLoading();
        //axios get

        dispatch({
            type: SEARCH_USERS,
            payload: []
        });
    };

    const getUser = async (value) => {
        setLoading();
        //axios get

        dispatch({
            type: GET_USER,
            payload: {}
        });
    };

    const getRepos = async (value) => {
        setLoading();
        //axios get

        dispatch({
            type: GET_REPOS,
            payload: []
        });
    };

    const clearUsers = async () => {
        dispatch({
            type: CLEAR_USERS
        });
    };

    const setLoading = () => {
        dispatch({
            type: SET_LOADING
        });
    };

    const {user, users, loading, repos} = state;

    return (
        <GithubContext.Provider value={{
            searchUsers, getUser, getRepos, clearUsers, setLoading,
            user, users, loading, repos
        }}>
            {children}
        </GithubContext.Provider>
    );
}
