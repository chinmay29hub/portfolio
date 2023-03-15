import Spline from "@splinetool/react-spline";

export default function App() {
  const oye = process.env.REACT_APP_SPLINE_DESIGN
  return (
    <div style={{ height : "80vh", position : "relative", top: "73px" }}>
      <Spline scene={ oye } />
    </div>
  );
}
