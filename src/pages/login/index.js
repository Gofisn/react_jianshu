import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
import {actionCreaters} from './store'
import {
    LoginWrapper,
    LoginBox,
    Input,
    Button,
} from './style'
import { throws } from 'assert';
class Login extends Component{
    render (){
        if(this.props.loginState){
            return <Redirect to='/'></Redirect>
        }else{
            return(
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder='账号' ref={(input)=>{this.account=input}}></Input>
                        <Input placeholder='密码' type ='password' ref={(input)=>{this.password=input}}></Input>
                        <Button onClick={()=>this.props.handleLogin(this.account,this.password)}>登录</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        }
        
    }
}

const mapState=(state)=>{
    return{
        loginState:state.getIn(['login','login'])
    }
}
const mapDispacth=(dispacth)=>{
    return{
        handleLogin(accountE,passwordE){
            console.log(accountE)
            dispacth(actionCreaters.login(accountE.value,passwordE.value))
        }
    }
}
export default connect(mapState,mapDispacth)(Login);