import React from 'react';
import { Search } from '../components/Search/Search';
import { Card } from '../components/Card/Card';

export const Home = () => {
    const cards = new Array(15)
        .fill('')
        .map((_, index) => index + 1);

    return (
        <div>
            <Search/>


            <div className={'row'}>
                {cards.map(card => {
                    return (
                        <div key={card} className={'col-sm-3 mb-4'}>
                            <Card />
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
