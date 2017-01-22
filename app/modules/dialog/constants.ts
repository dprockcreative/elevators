export const DIALOG_TYPES = ['alert', 'confirm', 'wizard'];
export const DIALOG_TYPE_ALERT = DIALOG_TYPES[0];
export const DIALOG_TYPE_CONFIRM = DIALOG_TYPES[1];
export const DIALOG_TYPE_WIZARD = DIALOG_TYPES[2];

export const DIALOG_STRING_MAP = {
  [DIALOG_TYPE_ALERT]: { 'yes' : 'ok'},
  [DIALOG_TYPE_CONFIRM]: { 'yes' : 'confirm', 'no' : 'cancel'},
  [DIALOG_TYPE_WIZARD]: { 'yes' : 'next', 'no' : 'previous', 'start' : 'cancel', 'end' : 'complete' },
};

export const DIALOG_WIZARD_SET_SHAFTS_HEADER = 'Change the Building - Shafts';
export const DIALOG_WIZARD_SET_SHAFTS_LABEL = 'How many Elevators Shafts does your new building have?';
export const DIALOG_WIZARD_SET_STORIES_HEADER = 'Change the Building - Stories';
export const DIALOG_WIZARD_SET_STORIES_LABEL = 'How many Stories high is Shaft {{ALPHA}}?';

export const DIALOG_WIZARD_WELCOME = [
  'Hello & Welcome',
  [
    {
      'type': 'generic-content',
      'inputs': {
        'template': `
          <h4>My name is David.</h4>
          <p>
            I'm a UI/UX Developer/Designer and Front End Engineer/Architect.
          </p>
          <p>
            Yes, that's a lot, but when you're in this business 20 years, you pick up a few things...
          </p>
        `
      }
    },
    {
      'type': 'generic-content',
      'inputs': {
        'template': `
          <p>
            I'm a Programmer with an Eye for Design...
          </p>
          <p>
            ...or a Designer with a Programmer's Mind...
          </p>
          <p>
            ...depends on my mood...anyhow...
          </p>
        `
      }
    },
    {
      'type': 'generic-content',
      'inputs': {
        'template': `
          <p>
            What you are looking at is not just fun to play with.
          </p>
          <p>
            It is a demonstration of a large cross-section of my skill sets and how they work together.
          </p>
          <p>
            It also reflects my interests/concerns and how I approach Front End Applications...
          </p>
        `
      }
    },
    {
      'type': 'generic-content',
      'inputs': {
        'template': `
          <p>
            Yes. On one level, it's merely an HTML, CSS & JavaScript Site.
          </p>
          <p>
            But my approach to each and their interoperability spring from shared semantic concepts & structures.
          </p>
          <p>
            Add to that my need for clean re-usable code across organized directories and scalable deployment...
          </p>
        `
      }
    },
    {
      'type': 'generic-content',
      'inputs': {
        'template': `
          <p>
            Well. I'll let you look around.
          </p>
          <p>
            Please feel free to call or check out the source on
            <a href="https://github.com/dprockcreative/elevators" rel="external" target="github">GitHub</a>
          </p>
        `
      }
    },
  ]
];
