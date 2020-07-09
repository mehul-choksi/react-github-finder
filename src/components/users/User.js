import React, {useEffect, Fragment, useContext} from 'react'
import {Link} from 'react-router-dom';

import GithubContext from '../../context/github/githubContext';


const User = ({match}) => {
 
    const githubContext = useContext(GithubContext);

    const {user,getUser,getRepos} = githubContext;
    useEffect(() => {
        getUser(match.params.login);
        getRepos(match.params.login);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
   
   
    const {name,location,bio, avatar_url,
         hireable,html_url, blog, followers,
         following, public_repos} = user;

        return (
            <div>
                <Link to = '/' className = "btn btn-light btn-sm my-1">Back to home</Link>
                <div class = "card grid-2">
                    <div className = "all-center">
                        <img src = {avatar_url} alt = "" className = "round-img" style = {{width : '150px'}}></img>
                        <h2> {name}</h2>
                        <p>{location}</p>
                    </div>
                    <div>
                    {bio && <Fragment>
                        <h3>Bio</h3>
                        <p> {bio}</p>
                    </Fragment>
                    }
                    Hireable: {
                        hireable ? <i className = "fas fa-check text-success"></i> :
                            <i class = "fas fa-times-circle text-danger"></i>
                    }

                    <br/>
                    <a className = "btn btn-dark my-1" href = {html_url} >Visit Github Profile</a>
                
                    <br/>
                    {blog && <u><a href = {blog} style = {{color : "blue"}}>Blog</a></u>}
                </div>

                </div>
                
                <div class = "card text-center">
                    <div className = "badge badge-success">Followers : {followers}</div>
                    <div className = "badge badge-primary">Following : {following}</div>
                    <div className = "badge badge-dark"> Public repositories: {public_repos}</div>
                </div>

                
            </div>
        );

}

export default User;