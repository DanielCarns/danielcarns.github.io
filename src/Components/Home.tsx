import { BottomNav } from "./BottomNav";
import "../App.css";

export default function Home() {
  return (
    <div className="background-image-blur">
      <div className="background-image">
        <div className="content homepagebg">
          <h1 className="title-font-light d-none d-md-block">DANIEL CARNS</h1>
          <div className="subtitle-font-light display-1 mx-4">
            SOFTWARE ENGINEER, FULL STACK & MOBILE
          </div>
        </div>
        <BottomNav />
      </div>
    </div>
  );
}