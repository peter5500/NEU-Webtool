import React from 'react';
import LCButton from './LCButton';

// This is the only component other than App that has a decent argument for being class-based
// and maintaining some state
//
// A good rule of thumb is "The nearest ancestor of
// all the components that need to interact with the state is where the state should be
// where the state lives"
//
// Does App need to know the word on each letter press?  Arguable
// but I prefer to have a bit more complex state in one place (App) rather than have two
// places that need to not mess each other up

const LCControls = ({ mode, word, onCount, onChangeMode, onUpdateWord }) => {
  // Above you can see how the props describe the purpose of the passed functions
  // not which events this component should bind them to

  // React annoyingly can't check for Enter onChange, but can't get the value on a controlled input from onKeyPress
  // So I have both events
  const checkForSubmit = (event) => {
    // onKeyPress/onKeyDown/onKeyUp are great places to evaluate incoming keypresses and prevent undesired ones from happening
    if(event.key === "Enter") {
      // This is the same as the onClick on the button below.  Had onCount been onCountClick, for example,
      // this call would be weird, since there's no click involved
      onCount();
    }
  };

  // Technically these functions are less efficient when they aren't in a class-based component
  // Because this component has no persistence it is regularly having to re-render the children
  // because generating these functions twice gives you different functions
  // so React doesn't know that nothing changed
  //
  // but I find the visual simplicity worth it
  //
  const updateWord = (event) => {
    onUpdateWord(event.target.value); // Seems silly, but this is part of being a controlled (input) component
  };

  // The value= in the input tag below is what makes this "controlled", that is, React takes over the internal state of the input
  // that's not required but is useful if your app can interact with that input
  // for example, onCount() (passed from App) sets this.state.word to ''...but that wouldn't change the input element
  // if it wasn't controlled

  return (
    <div className="lc-controls">

      <div>Word: <input value={word} onKeyPress={checkForSubmit} onChange={updateWord}/></div>
      <LCButton text="Count" onClick={onCount}/>
      <LCButton text={mode} onClick={onChangeMode}/>
    </div>
  );
  // Here I _am_ saying what event the component will bind to (onClick)
  // That's because this button is VERY dumb - It's not even specific to this app
};

export default LCControls;
