import { StyleSheet, Text,  TouchableOpacity, View } from 'react-native'
import React ,{Component}from 'react'
import { connect, Connect } from 'react-redux'


class CounterApp extends Component{


  render(){
  return (
    <View style= {styles.container}>
      <View style={{flexDirection: 'row', width:200,justifyContent: 'space-around'}}>
        <TouchableOpacity onPress={()=>this.props.increaseCounter()} >
        <Text style= {{fontSize: 20}}>Increase</Text>
        </TouchableOpacity>
        
        <Text style= {{fontSize: 20}}>{this.props.counter}</Text>

        <TouchableOpacity onPress={()=>this.props.decreaseCounter()}>
        <Text style= {{fontSize: 20}}>Decrease</Text>
        </TouchableOpacity>
      
      </View>
    </View>
  )
}
}

function mapStateToProps(state){
  return{
    counter: state.counter
  }
}

function mapDispatchedToProps(dispatch){
  return{
    increaseCounter : ()=> dispatch({type:'INCREASE_COUNTER'}),
    decreaseCounter : ()=> dispatch({type:'DECREASE_COUNTER'})
  }
}

export default connect(mapStateToProps, mapDispatchedToProps)(CounterApp)

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})