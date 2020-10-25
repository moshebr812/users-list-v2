// Always
import React from 'react';
// Component CSS
import './UsersList.css';
// Referenced HTML Classes applied via *.js files
import { User } from './user/User';

export class UsersList extends React.Component {
    // to access a static use this
    static ulRevision = '1.0.5';
    // in the render() section use this
    // {UsersList.ulRevision}

    // to access a NON static use this 
    counter = parseInt(0);
    // in the render section user this
    // {this.counter + 1}

    render() {
        return ( <div class="usersList"> 
                    
                    <div>
                        <h3 title="user list revision number"> Users List </h3>    [revision: {UsersList.ulRevision}]
                        <User rowCounter={++this.counter} userName="Dan Cohen" heroName="Spiderman"></User>
                        <User rowCounter={++this.counter} userName="Naama Levi" heroName="Batman"></User>
                        <User rowCounter={++this.counter} userName="Eli Melamed" heroName="Wonderwoman"></User>
                    </div> 
                </div>) ;
    }
}