import React,{Component} from 'react'
import styled from 'styled-components'

 class Increment extends Component{
    constructor(props){
        super(props);
        this.state ={
            clicks:0
        
        };
    }

    IncrementItem = ()=> {
    this.setState({clicks:this.state.clicks +1});
}
    DecrementItem = () => {
        if(this.state.clicks <= 0){
            window.alert("Angka tidak bisa kurang dari 0");
            return this.state.clicks
        }
        this.setState({clicks:this.state.clicks -1});
        
    }

        
    

    render(){
        return (
            <div>
                <Button onClick={this.IncrementItem} primary> + </Button>
            <h2>{this.state.clicks}</h2>
            <Button onClick={this.DecrementItem}primary>-</Button>
            </div>
            
        
        );
    }
    }

    export default Increment

    const Button = styled.button`
    /* Adapt the colors based on primary prop */
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};
  
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
  `;
  