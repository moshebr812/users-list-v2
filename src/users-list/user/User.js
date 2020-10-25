// FILE:    User.js

import React from 'react';
import './User.css';
// import './User.sass';

export class User extends React.Component {
    // I can also define usage of local variables
    // static localHeader = '...user.js v2';

    render() {
        return ( <div class="userInfo"> 
                    <div>
                    <   strong>{this.props.rowCounter}.  
                                {this.props.userName}
                         </strong> <br></br>
                        <label> {this.props.heroName} </label>
                    </div> 
                </div>) ;
    }
}
