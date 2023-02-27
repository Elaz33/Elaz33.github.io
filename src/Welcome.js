import React,{Component} from 'react';

export default function Welcome(prop){
    const {first,last} =prop;
    return(
        <h2>welcome to react,{first} {last}</h2>
    )
}

export class WelcomeC extends Component{
    constructor(props){
        super(props);

        this.state = {
            count: 0,
            foo: "bar",
            count2: 0
        };
    }

    componentDidMount(){
        console.log("in componentDidMount")
        this.interval = setInterval(() => {
            console.log('in componentDidMount interval')
            this.setState({ count: this.state.count + 1 });
        }, 1000);
    }
    interval = setInterval(() => {
        console.log('in componentDidMount interval')
        this.setState({ count: this.state.count + 1 });
    }, 1000);

    render(){
        const {first,last} = this.props;
        return(
            <h2>WelcomeC to react,{first} {last} {this.state.count}
            {this.state.count2} {this.state.foo}</h2>
        )
    }
}