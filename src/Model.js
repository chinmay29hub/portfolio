import Spline from "@splinetool/react-spline";

export default function App() {
  return (
    <div style={{ height : "100%", position : "relative", top: "90px" }}>
      {/* <Spline scene="https://prod.spline.design/2PPIdBzs0CXumg2p/scene.splinecode" /> */}
      {/* <Spline scene="https://prod.spline.design/hE8rMkc8o1y7QJ1U/scene.splinecode" /> */}
      {/* <Spline scene="https://prod.spline.design/HzsgUGRONN0p-MxS/scene.splinecode" /> */}
      {/* <Spline scene="https://prod.spline.design/O5BxeN05wvUbSTeq/scene.splinecode" /> */}
      <Spline style={{ height : "80vh" }} scene="https://prod.spline.design/O5BxeN05wvUbSTeq/scene.splinecode" />
    </div>
  );
}
