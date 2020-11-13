import React from 'react';

export const Repos = ({repos}) => {
    return (
        <div>
            {repos.map((repo) => {
                const {
                    html_url,
                    name,
                    description,
                    homepage
                } = repo;
                return (
                    <div className={'card mb-3'} key={repo.id}>
                        <div className={'card-body'}>
                            <h4 className={'card-title'}>
                                <a
                                    href={html_url}
                                    target={'_blank'}
                                    rel={'noreferrer'}
                                    className={'card-link'}
                                >
                                    {name}
                                </a>
                            </h4>
                            {description &&
                            <h6 className={'card-subtitle text-muted'}>{description}</h6>
                            }
                            {homepage &&
                            <a
                                href={homepage}
                                target={'_blank'}
                                rel={'noreferrer'}
                                className={'card-link'}
                            >
                                {homepage}
                            </a>
                            }
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
