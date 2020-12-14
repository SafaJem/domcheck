import React from "react";
import image from "./devp.jpg"
class Personne extends React.Component {
  
constructor() {
    console.log("constructor()");
    super();
    this.state = {
      fullName:"Safa Jemaiel",
      bio:"I'am a FullStack Js student in Go My Code",
      imgSrc:{image},
      profession:"Développeur FullStack JS",
      timer: 0,
      intervall: null
    };
  }
  componentDidMount() {
    console.log("Component did Mount()");
    // console.log(this.state.isVisible);
    // console.log(this.state.counter);
    this.setState({
      intervall: setInterval(
        () => this.setState({ timer: this.state.timer + 1 }),
        1000
      )
    });
  }

  componentDidUpdate() {
    console.log("Component did Update() ");
    // console.log(this.state.isVisible);
    // console.log(this.state.counter);
  }

  componentWillUnmount() {
    console.log("Component will unMount()");
    clearInterval(this.state.intervall);
  }
  Show = () => {
    this.setState({
      show: !this.state.show
    });
  };
  Img = () => {
    this.setState({
      imgSrc:{image},
    });
  };
  render() {

  return (
    <div>
     <h1>FullName: {this.state.fullName}</h1>
     <p>{this.state.bio}</p>
     <img src={image} alt="profile" style={{width:400 , height:300}}/>
     <h1>Profession: {this.state.profession}</h1>
     <p>{this.state.timer}</p>
    </div>
  );
}
}
export default Personne;
