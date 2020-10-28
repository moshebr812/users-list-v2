// FILE:    PostsList.js

import React from 'react';
// Component CSS
import './PostsList.css';
// Referenced HTML Classes applied via *.js files

export class PostsList extends React.Component {
    dummyPost = 'I am a dummy Post'

    render() {
        return ( <div className="postsList"> 
                    
                <div>
                    <h3 title="user list revision number">Post List ofr user id {this.props.userId} </h3>    [revision: {PostsList.dummyPost}]
                    
                </div> 
            </div>) ;
    }
}