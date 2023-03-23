import Spline from "@splinetool/react-spline";

export default function App() {
  const design = process.env.REACT_APP_SPLINE_DESIGN
  return (
    <div style={{ height : "90vh", position : "relative", top: "40px" }}>
      <Spline scene={ design } />
    </div>
  );
}
