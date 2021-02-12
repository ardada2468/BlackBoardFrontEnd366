// import React from "react";
// import ReactDOM from "react-dom";
// import { useDencrypt } from "use-dencrypt-effect";

// import "./styles.css";

// const values = ["Happy Birthday", "Learn", "Grow", "Imagine"];

// const Example = ({values}) => {
//   const { result, dencrypt } = useDencrypt();

//   React.useEffect(() => {
//     let i = 0;

//     const action = setInterval(() => {
//       dencrypt(values[i]);

//       i = i === values.length - 1 ? 0 : i + 1;
//     }, 2250);

//     return () => clearInterval(action);
//   }, []);

//   return <h1>{result}</h1>;
// };

// if (typeof window !== "undefined") {
//   ReactDOM.render(<Example />, document.getElementById("root"));
// }
// export default Example
