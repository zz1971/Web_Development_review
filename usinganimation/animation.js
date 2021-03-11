import popmotion from 'popmotion';
import "./useless.js";

// const popmotion = require('popmotion');
// require("./useless.js");

// const { styler, spring, listen, pointer, value } = window.popmotion;
const { styler, spring, listen, pointer, value } = popmotion;

//const spring = window.popmotion.spring;   // do the same thing with all the other in braces 

//it's called destructuring

const ball = document.querySelector('.box');
const divStyler = styler(ball);
const ballXY = value({ x: 0, y: 0 }, divStyler.set);

listen(ball, 'mousedown touchstart')
  .start((e) => {                       //or this  function(e)
    e.preventDefault();
    pointer(ballXY.get()).start(ballXY);
  });

listen(document, 'mouseup touchend')
  .start(() => {                         //() => it's a newer way of writing function=>  function()
    spring({
      from: ballXY.get(),
      velocity: ballXY.getVelocity(),
      to: { x: 0, y: 0 },
      stiffness: 200,
      // mass: 1,
      // damping: 10
    }).start(ballXY);
  });