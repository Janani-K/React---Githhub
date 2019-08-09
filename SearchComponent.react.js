import React from 'react';
import './SearchComponent.css';
import {Route, Switch} from 'react-router-dom';
import SearchUser from '../SearchUser/SearchUser.react'
import SearchRepo from '../SearchRepo/SearchRepo.react'

class SearchComponent extends React.Component {

    render() {
        return (
            <div>
                <main>
                <Switch>
                    <Route path="/user" component={SearchUser}></Route>
                    <Route path="/repo" component={SearchRepo}></Route>
                </Switch>
                </main>
            </div>     
        );
    }
}

export default SearchComponent;