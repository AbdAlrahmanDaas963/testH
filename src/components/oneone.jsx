import React, { Component } from 'react';

let elemA = null;
let elemB = null;
let frontA = "";
let backA = "";
let frontB = "";
let backB = "";
let canRotate = 0;
let move = 0;
let done = 0;

class Oneone extends Component {
    state = {    }
    doRotateA = () => {
        document.getElementById(frontA).style.transform = "rotateY(180deg)";
        document.getElementById(backA).style.transform = "rotateY(0deg)";
    }
    doRotateB = () => {
        document.getElementById(frontB).style.transform = "rotateY(180deg)";
        document.getElementById(backB).style.transform = "rotateY(0deg)";
    }
    dontRotateA = () => {
        document.getElementById(frontA).style.transform = "rotateY(0deg)";
        document.getElementById(backA).style.transform = "rotateY(180deg)";
    }
    dontRotateB = () => {
        document.getElementById(frontB).style.transform = "rotateY(0deg)";
        document.getElementById(backB).style.transform = "rotateY(180deg)";
    }
    flip = () =>{
        console.log("elemA :"+elemA);
        console.log("elemB :"+elemB);
        console.log("frontA :"+frontA);
        console.log("backA :"+backA);
        console.log("frontB :"+frontB);
        console.log("backB :"+backB);

        if(elemA === null){
            elemA = this.props.name;
            frontA = this.props.front;
            backA = this.props.back;
        }else {
            elemB = this.props.name;
            frontB = this.props.front;
            backB = this.props.back;
        }

        if(canRotate === 2){}
        else if( canRotate ===1 ){
            this.doRotateB();
            canRotate++;
            setTimeout( () => {
                if(elemA === elemB){
                    done += 2;
                }else {
                    this.dontRotateA();
                    this.dontRotateB();
                }
                elemA = null;
                elemB = null;
                frontA = "";
                backA = "";
                frontB = "";
                backB = "";
                canRotate = 0;

            },1500)
        }else {
            this.doRotateA();
            canRotate++;
            move++;
        }
    }
    render() { 
        return ( 
        <div className="one" onClick={this.flip}>
            <div id={this.props.front} className="front-card card"></div>
            <div id={this.props.back} className="back-card card">
                {this.props.back}
                <h1>{this.props.name}</h1>
            </div>
        </div>
        );
    }
}
// there is a problem with the css, make the rotate smoth
export default Oneone;