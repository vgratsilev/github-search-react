import React, { useContext } from 'react';
import { Search } from '../components/Search/Search';
import { Card } from '../components/Card/Card';
import { GithubContext } from '../context/github/githubContext';
import Loader from '../components/UI/Loader/Loader';

export const Home = () => {
    const {loading, users} = useContext(GithubContext);

    return (
        <div>
            <Search/>

            <div className={'row mt-4'}>

                {loading
                    ? <Loader/>
                    : users.map(user => {
                        return (
                            <div key={user.id} className={'col-sm-3 mb-4'}>
                                <Card user={user}/>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}
