//React understands this JSX because it gets converted into regular JavaScript (with React.createElement) when the app runs.
// function Shubh() {
//   const name = "Chandana";
//   return <p>Welcome, {name}!</p>; //You can insert JavaScript expressions in JSX using {}.
// }
// export default Shubh;

// function Shubh(props) {
//   return <h2>Hello, {props.user}!</h2>;
// }
// export default Shubh;

//✅ Destructuring Props (Cleaner Code): Instead of writing props.user, you can destructure directly in the function argument:
function Shubh({ user }) {
  return <h2>Hello, {user}!</h2>;
}
export default Shubh;

//note : Props are Immutable. If you need to update data, use state or pass a callback function from the parent.
