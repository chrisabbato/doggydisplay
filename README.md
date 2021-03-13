# Doggy Display

Everyone loves cute dog pictures, get your fill here!

## Resources and Libraries Used

- [Dog API](https://dog.ceo/dog-api/)
- Reach Router for page routing
- Styled Components
  - I like the scoping and flexibility of the CSS-in-JS though I have some reservations on long term maintainability. Time will tell, I suppose.

## Lessons Learned

I've learned just how many different ways of implementing data fetching and loading/error handling there are.
This is something I've been wrestling with lately in the pursuit of the best, most robust, most developer and user friendly approach.
[This](https://mastery.games/post/state-machines-in-react/) blog post was very enlightening on the power of finite state machines to handle this complexity and I am very interested in practicing this implementation, but it wasn't feasible for this project.

Furthermore, on the idea of freedom of design, the value of design/development constraints in a team is made ever more evident when wrestling with these topics (including CSS approach)

## Things I'm proud of

- Responsive design built in without relying on media queries
- Smooth ease of use. Autofocus input on load, quick filtering, quick tab + enter KB flow to jump to random view, and back link to return
- Minimal reliance on external libraries
  - It's so easy and tempting to just npm install everything right away but I minimize my reliance on that for this challenge

## Areas of Improvements

- Cleaner messaging around data fetching/ error handling / loading. I don't like the spam of ternary conditionals in the render function. It's unreliable and error prone.
  - Support for suspense/placeholder when loading the images
  - State machine to handle the loading/error/display state of components using [XState](https://xstate.js.org/)
- Proper testing (not my strength at the moment, but eager to learn and implement)
- Better type support (Typescript or more advanced PropType declarations)
- Add a small picture next to breed selection in case the user doesn't know what they look like
