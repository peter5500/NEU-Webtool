// Note: No React, No JSX

// pretty basic functions, but this shows how the logic is fully separated from the app itself
// these functions can be reused without having to untangle anything web- or react- specific
//
// This also means the App code has no concern for how the logic works at all
// So long as I keep the input/output expectations the same
// I could even replace these functions entirely with new versions
// and have no impact on the App code
export const letterCounter = (word) => {
  word = word.toUpperCase().replace(/[^A-Z]/g, ''); // remove non-letters
  return word.length;
};

export const vowelCounter = (word) => {
  word = word.toUpperCase().replace(/[^AEIOU]/g, ''); // remove non-vowels
  return word.length;
};

// Note: this file happens to have no default export
// Whether there is a default, only a default, or both kinds depends on what the purpose is
// and how that purpose is accomplished
