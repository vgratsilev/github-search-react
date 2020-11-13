import React, { useContext, useEffect, useMemo } from 'react';
import { GithubContext } from '../context/github/githubContext';
import Loader from '../components/UI/Loader/Loader';
import { Link } from 'react-router-dom';

const imgStyles = {maxWidth: 250};

export const Profile = ({match}) => {
    const {getUser, getRepos, loading, user} = useContext(GithubContext);
    const username = useMemo(() => match.params.name, [match]);

    useEffect(() => {
        getUser(username);
        getRepos(username);
        // eslint-disable-next-line
    }, [username]);

    if (loading) {
        return <Loader/>
    }

    const {
        name,
        company,
        avatar_url,
        location,
        bio,
        blog,
        login,
        html_url,
        followers,
        public_repos,
        public_gists,
        following
    } = user;

    return (
        <div>
            <Link to={'/'} className={'btn btn-link'}>Back</Link>

            <div className={'card mb-4'}>
                <div className={'card-body'}>
                    <div className={'row'}>
                        <div className={'col-sm-3 text-center'}>
                            <img style={imgStyles} src={avatar_url} alt={name}/>
                            <h2 className={'card-title'}>{name}</h2>
                            <h5 className={'card-subtitle text-muted'}>{login}</h5>
                            {location &&
                            <p>Location: {location}</p>
                            }
                        </div>
                        <div className={'col'}>
                            {bio &&
                            <>
                                <h3>BIO</h3>
                                <p>{bio}</p>
                            </>
                            }
                            <a
                                href={html_url}
                                target={'_blank'}
                                rel={'noreferrer'}
                                className={'btn btn-dark'}
                            >
                                Open Profile
                            </a>
                            <ul>
                                {company && <li>
                                    <strong>Company: </strong> {company}
                                </li>}
                                {blog && <li>
                                    <strong>Website: </strong>
                                    <a
                                        href={blog}
                                        target={'_blank'}
                                        rel={'noreferrer'}
                                        className={'card-link'}
                                    >{blog}</a>
                                </li>}
                            </ul>

                            <div className={'d-flex flex-column align-items-start'}>
                                <div className={'badge badge-primary w-25 mb-1'}>Followers: {followers}</div>
                                <div className={'badge badge-primary w-25 mb-1'}>Following: {following}</div>
                                <div className={'badge badge-info w-25 mb-1'}>Public repos: {public_repos}</div>
                                <div className={'badge badge-dark w-25'}>Public gists: {public_gists}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
