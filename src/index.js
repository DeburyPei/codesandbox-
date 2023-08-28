import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
function App(){
    return(
        <div className="App">
            爸爸
            <Son messageForSon="儿子你好"/>
        </div>
    )
}

class Son extends React.Component{
    constructor() {
        super();
        this.state = {
            n :0
        };
    }
    add(){
        this.setState({n:this.state.n +1 })
    }
    render(){
        return <div className="Son">
                儿子 message {this.props.messageForSon}

                <GrandSon messageForGrandSon="孙子你好哈哈哈哈"/>
        </div>
    }
}
const GrandSon = props => {

    return( <div className="GrandSon">
    孙子 message {props.messageForGrandSon}


</div>)}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />
);
