// FILE:    UsersList.js

import React, { useRef } from 'react';
// Component CSS
import './UsersList.css';
// Referenced HTML Classes applied via *.js files
import { User } from './user/User';

export class UsersList extends React.Component {
    // to access a static use this
    static ulRevision = '1.2.20'; // in the render() section use this
                                 // {UsersList.ulRevision}
    // to access a NON static use this 
    counter = parseInt(0);       // in the render section user this
                                 // {this.counter + 1}
    
    constructor() {
        super();
        this.users = [
            {userName: "Dan Cohen", heroName: "Spiderman", powerS: ["Vision","Fly"], favoritColors: ["red","lime","purple"]},
            {userName: "Naama Levi", heroName: "Batman", powerS: ["All Black","Touch","Kitten"], favoritColors: ["yellow","darkred"] },
            {userName: "Eli Melamed", heroName: "Spiderman", powerS: ["Sunny","Beauty"], favoritColors: ["skyblue","purple","white","orange","violet"] },
        ]

        this.inputName = React.createRef();
        this.inputHero = React.createRef();
    }

    getUsers() {
        let htmlArray = this.users.map ( userObj => {
            // map with arrow function MUST return a value
            return <User rowCounter={++this.counter} userName={userObj.userName} heroName={userObj.heroName}  powerS={userObj.powerS} favoritColors={userObj.favoritColors}></User>
        });

        return htmlArray;
    }   // END getUsers()

    createNewUser (e) {
        e.preventDefault();
        let userName = e.inputName.value;    // since we defined it in the Constructor as React.createRef() we can use it now
        // let heronName = this.inputHero.value;   //
        // this.inputName.value = '';  // clean the field
        // this.inpuHero.value = '';  // clean the field
        console.log (`userName = ${userName}`);
    }

    createNewUser_SyntaxC () {
        alert (`from createNewUser_SyntaxC. Value was saved in the this.name2 from onBlur() \n\n ${this.name2}`);
    }
    onBlurName(event) {
        console.log (`\n ==>> from input.onBlur ${event.target.value}`);
        // save the value on variable at the class level so it will be available from the "create" button
        this.name2 = event.target.value;
    }

    onChangeName (event) {
        console.log (`from input.onChange ${event.target.value}`);
    }
    
    clickSyntaxB (e) {
        alert (`clickSyntaxB - passing object "e" as parameter \n\n   onClick={ () => {this.clickSyntaxA('ArrowFunction')}}`);
        alert (JSON.stringify (e.st));
    }
    clickSyntaxA(p) {
        if (p==='ArrowFunction') {
            alert ('basic syntax to "Add Event" using \n\n onClick={ () => this.clickSyntaxA("ArrowFunction") }');
        } else {
            alert ('basic syntax to "Add Event" using \n\n onClick={this.clickSyntaxA}');
        }
    }
    render() {
        return ( <div className="usersList"> 
            
                {/* this section handles the "list of Users"  */}
                <div>
                    <h3 title="user list revision number"> Users List </h3>    [revision: {UsersList.ulRevision}]
                    { this.getUsers() }
                </div> 

                <div>
                    {/* this handles the "form area" */}
                    <fieldset title="create a new user"> 
                        <legend>Create User</legend>
                        {/* ref is a rserved word. */}
                        <input ref={this.inputName} placeholder="user name ..........." type="text"
                                onChange={ (event) => this.onChangeName(event)}
                                onBlur={ (event) => this.onBlurName(event)}>
                        </input>
                        <input ref={this.inputHero} placeholder="preferred hero ......" type="text"></input>
                        <br></br>
                        --------------------
                        <br></br>

                        {/* value saved in onBlur on class variable this.name2 so no need to pass a parameter */}
                        <button onClick={ (e) => this.createNewUser_SyntaxC() }>Create using onBlur</button>
                      
                   
                        {/* As Arrow Function with the "e" Object as Parameter , but we don't really need it */}
                        <button onClick={ (event) => this.clickSyntaxB(event) }>SyntaxB "e"</button>


                        {/* As Arrow Function - no parameter */}
                        <button onClick={ () => this.clickSyntaxA('ArrowFunction') }>SyntaxA: ArrowFunciton</button>    


                        {/* Note we put the function name without () - as we write JS within a HTML section: this is a callback */}
                        {/* if I would write onClick={this.clickSyntaxA}  the onClick would receive the returned value of funciton clickSyntaxA() */}
                        <button onClick={this.clickSyntaxA}>Syntax A</button>
                    </fieldset>
                </div>
            </div>) ;
    }
}

{/* <input placeholder="user name...">...</input>    */}
{/* <input placeholder="hero .......">...</input>    */}