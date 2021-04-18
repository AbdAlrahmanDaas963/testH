import Oneone from './oneone';
import React, { Component } from 'react';
class Game extends Component {
    state = {  
        row1: [
            { number: "n1", name:"1111", },
            { number: "n2", name:"2222", },
            { number: "n3", name:"3333", },
            { number: "n4", name:"4444", },
        ],
        row2: [
            { number: "n5", name:"5555", },
            { number: "n6", name:"6666", },
            { number: "n7", name:"7777", },
            { number: "n8", name:"8888", },
        ],
        row3: [
            { number: "n9", name:"1111", },
            { number: "n10", name:"2222", },
            { number: "n11", name:"3333", },
            { number: "n12", name:"4444", },
        ],
        row4: [
            { number: "n13", name:"5555", },
            { number: "n14", name:"6666", },
            { number: "n15", name:"7777", },
            { number: "n16", name:"8888", },
        ],
        rows: [
            { number: "n1", name:"1111", },
            { number: "n2", name:"2222", },
            { number: "n3", name:"3333", },
            { number: "n4", name:"4444", },
            { number: "n5", name:"5555", },
            { number: "n6", name:"6666", },
            { number: "n7", name:"7777", },
            { number: "n8", name:"8888", },
            { number: "n9", name:"1111", },
            { number: "n10", name:"2222", },
            { number: "n11", name:"3333", },
            { number: "n12", name:"4444", },
            { number: "n13", name:"5555", },
            { number: "n14", name:"6666", },
            { number: "n15", name:"7777", },
            { number: "n16", name:"8888", },

        ]
    }
    
    render() {  
        return ( 
            <div className="box">
                <div className="bigRow">
                    <div className="row">
                    {
                        this.state.row1.map(one => <div className="row">
                        <Oneone name={one.name} front={one.number+"-front"} back={one.number+"-back"}/>
                    </div>)
                    }
                </div>
                <div className="row">
                    {
                        this.state.row2.map(one => <div className="row">
                        <Oneone name={one.name} front={one.number+"-front"} back={one.number+"-back"}/>
                    </div>)
                    }
                </div>
                <div className="row">
                    {
                        this.state.row3.map(one => <div className="row">
                        <Oneone name={one.name} front={one.number+"-front"} back={one.number+"-back"}/>
                    </div>)
                    }
                </div>
                <div className="row">
                    {
                        this.state.row4.map(one => <div className="row">
                        <Oneone name={one.name} front={one.number+"-front"} back={one.number+"-back"}/>
                    </div>)
                    }
                </div>
                
                </div>
                
                
            </div>
        );
    }
}
//it was good :)
export default Game;