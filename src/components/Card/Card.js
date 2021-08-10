import React from 'react';
import { Link } from 'react-router-dom';

export const Card = ({user}) => {
    return (
        <div className={'card'}>
            <img
                src={user.avatar_url}
                alt={user.login}
                width={'304px'}
                height={'304px'}
                className={'card-img-top'}/>
            <div className={'card-body'}>
                <h5 className={'class-title'}>{user.login}</h5>
                <Link
                    to={`/profile/${user.login}`}
                    className={'btn btn-primary'}
                >
                    See more
                </Link>
            </div>
        </div>
    )
}
