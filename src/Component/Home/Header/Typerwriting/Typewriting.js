import React , {Component} from 'react'
import './Typewriting.css'
class Typwriting extends Component{
   state={
      wordIndex :0,
      isDeleting:false,
      txt:"",
      current:0,
      fullTxt:"",
   }
   count=0
   type=()=>{
      let typeSpeed = 500
      this.state.current = this.state.wordIndex% this.props.children.length
      this.state.fullTxt= this.props.children[this.state.current]
      if(!this.state.isDeleting){
         this.setState({txt: this.state.fullTxt.substr(0,this.state.txt.length+1)})
      }else{
         this.setState({txt: this.state.fullTxt.substr(0,this.state.txt.length-1)})
         typeSpeed/=2
      }
      if(!this.state.isDeleting && this.state.fullTxt==this.state.txt){
         this.setState({isDeleting:true})
         typeSpeed=1000
      }
      if(this.state.isDeleting && this.state.txt==""){
         this.setState({isDeleting:false, wordIndex:this.count++})
         typeSpeed=1000
      }
      setTimeout(this.type, typeSpeed)
   }
   componentDidMount(){
      this.type()
   }
   render(){

      return(
      <h3><span>{this.state.txt}</span></h3>
      )

   }
}
export default Typwriting