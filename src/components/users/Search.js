import React, {useState, Fragment, useContext} from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {

    const githubContext = useContext(GithubContext);

    const alertContext = useContext(AlertContext);

    const {clearUsers} = githubContext;

    const {setAlert} = alertContext;

    const [text,setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value);
    }

    const clearWrapper = () => {
        setText('');
        clearUsers();
    }

    const onSubmit = (e) => {

        e.preventDefault();
        if (text === ''){
            setAlert('Search field cannot be empty', 'light')
        }
        else{
            githubContext.searchUsers(text)
        }
    }

        return (
            <Fragment>
                <form class = "form" onSubmit = {onSubmit}>
                    <input type="text" name = "text" value = {text} 
                    placeholder = "Search user..." onChange = {onChange} ></input>
                    <input type = "submit" value ="Submit" className = "btn btn-dark btn btn-block"></input>            

                </form>
                {githubContext.users.length > 0 && <button className = "btn btn-light btn-block" onClick = {
                    clearWrapper }>Clear</button>
}
            </Fragment>
        )
    
}



export default Search;