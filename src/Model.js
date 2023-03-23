import Spline from "@splinetool/react-spline";

export default function App() {
  const design = process.env.REACT_APP_SPLINE_DESIGN
  return (
    <div style={{ height : "85vh", position : "relative", top: "73px" }}>
      <Spline scene={ design } />
    </div>
  );
}
