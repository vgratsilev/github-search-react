import React from 'react';
import { Link } from 'react-router-dom';

export const Card = () => {
    return (
        <div className={'card'}>
            <img
                src={''}
                alt={'user'}
                className={'card-img-top'}/>
            <div className={'card-body'}>
                <h5 className={'class-title'}>User Name</h5>
                <Link
                    to={'/profile/' + 'user'}
                    className={'btn btn-primary'}
                >
                    See more
                </Link>
            </div>
        </div>
    )
}
