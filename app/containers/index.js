import React,{Component} from 'react';
import RouterMap from "../routes/index";
export default class App extends Component{
    constructor(props){
        super(props);
        this.state={
            done:false
        }
    }
    render(){
        return (
            <div>
                {this.state.done?<RouterMap/>:<div>正在加载...</div>}
            </div>
        )
    }
    componentDidMount(){
        this.setState({
            done:true
        })
    }
}