import './App.css';
import React from 'react';
import { LandingPage } from './components/landing-page/landing-page.component';
import { Component } from 'react';

class App extends Component{
  circles;
  mainCircle;
  mouseCircle;
  mouseCircleBool;
  mouseDot;
  mX;
  mY;
  z;
  constructor(){
    super()

    this.mX = 0;
    this.mY = 0;
    this.z = 100;
  }

  componentDidMount(){
    this.circles = document.querySelectorAll(".circle")
    this.mainCircle = document.querySelector(".main-circle")
    this.mouseCircle = document.querySelector(".mouse-circle");
    this.mouseDot = document.querySelector(".mouse-dot");
    this.mouseCircleBool = true;
  }

  render(){
    return(
    <div className="App" onMouseMove={this.mouseMoved}>
      <LandingPage></LandingPage> 
    </div>
    )
  }

  mouseMoved = (e) => {
  // Circle movement
  if (e.clientX < this.mX) {
    this.circles.forEach((circle) => {
      circle.style.left = `${this.z}px`;
    });
  } else if (e.clientX > this.mX) {
    this.circles.forEach((circle) => {
      circle.style.left = `-${this.z}px`;
    });
  }

  if (e.clientY < this.mY) {
    this.circles.forEach((circle) => {
      circle.style.top = `${this.z}px`;
    });
  } else if (e.clientY > this.mY) {
    this.circles.forEach((circle) => {
      circle.style.top = `-${this.z}px`;
    });
  }

  this.mX = e.clientX;
  this.mY = e.clientY;

  // MouseCircle and Dot repositioning
  this.mouseCircleBool &&
    (this.mouseCircle.style.cssText = `top: ${e.clientY}px; left: ${e.clientX}px; opacity: 1`);

  this.mouseDot.style.cssText = `top: ${e.clientY}px; left: ${e.clientX}px; opacity: 1`;
}
}

export default App;
