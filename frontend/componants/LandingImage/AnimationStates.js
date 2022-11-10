const States =  {
    Fading : 'Fading',
    Removing : 'Removing',
};

function AnimationReducer (state, action) {
    switch (action.type) {
      case States.Fading:
        return {load: false , fade: true , remove: false};
      case States.Removing:
        return {load: false , fade: false  , remove: true};
      default:
        throw new Error();
    }
  }

  export { AnimationReducer , States} ;