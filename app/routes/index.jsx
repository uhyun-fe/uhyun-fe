import { Nav } from "~/components/Nav";
import { Home } from "~/components/Home";

export default function Index() {
  return (
    <div className="d-fr jc-c h-100">
      <div className="d-fc w-100 lh-md" style={{ maxWidth: "500px" }}>
        <div className="d-fr h-100">
          <Home />
        </div>
        <Nav />
      </div>
    </div>
  );
}
