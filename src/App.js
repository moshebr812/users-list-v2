// FILE:    App.js

import React from 'react';
import './App.css';
import { PostsList } from './posts-list/PostsList';
import { UsersList } from './users-list/UsersList';

export class App extends React.Component {
    render() {
        return <div> 
                  <div>
                        <UsersList></UsersList>
                  
                        <PostsList userId="909"></PostsList>
                    </div>
                </div>
                
    }
}