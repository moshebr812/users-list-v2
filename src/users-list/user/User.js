// FILE:    User.js

import React from 'react';
import './User.css';
// import './User.sass';

export class User extends React.Component {
    // I can also define usage of local variables
    // static localHeader = '...user.js v2';

    showInfo(e) {
        e.preventDefault();
        // this is the primitive way
        alert (`User Info for ${this.props.userName} \n\n my hero is ${this.props.heroName}`);
    }

    render() {
        let buttonWidth = 180;
        const buttonResizeClass = "buttonResize";
        let colorsButton = {
            backgroundColor: 'lime',
            color: 'yellow'
        }

        return ( <div className="userInfo"> 
                    <div>
                    <   strong>{this.props.rowCounter}.  
                                {this.props.userName}
                         </strong> <br></br>
                        <label> {this.props.heroName} </label>
                        
                        <ol>
                            {/* use map inline to convert the array to HTML li list */}
                            {this.props.powerS.map ( item => <li>{item}</li> )}
                        </ol>
                        {/* I want to set N button, each with the background color of the array input */}
                        {/* <button style={{colorsButton}}>test</button> */}

                        {/* I define this div as Inline so I get all my colors in e 1 line */}
                        <div class="divInline">
                            {this.props.favoritColors.map ( userColor => {
                                let calcWidth = (180 / this.props.favoritColors.length).toString() + 'px';
                                let buttonStyle = {
                                    color: 'white',
                                    width: calcWidth,
                                    backgroundColor: userColor,
                                    height: 25,
                                }
                                console.log (calcWidth);
                                return <label style={buttonStyle} class={buttonResizeClass} title={userColor+ " - preferred color"}>...</label>    
                            })}
                        </div>
                        {/* raise events from DOM */}

                        <button style={{width: buttonWidth}} onClick={ (e) => this.showInfo(e)}>Show Info ...</button>
                    </div> 
                </div>) ;
    }
}



{/* <ol>
{this.props.favoritColors.map ( item => {
    let textColor = item;
    // in this syntax map must return a vatlue
    // return <li>aa</li>`<label style="color: 'red';">color</label>`;
    return <label style={{backgroundColor: item}}>--</label>
})}
</ol> */}

{/* <label>{this.props.favoritColors[0]}</label> */}