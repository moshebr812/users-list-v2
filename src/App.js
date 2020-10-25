

// import React always
import React from 'react';
import './App.css';
import { UsersList } from './users-list/UsersList';
//

export class App extends React.Component {
    render() {
        return <div> 
                   <UsersList></UsersList>
                </div>
                
    }
}