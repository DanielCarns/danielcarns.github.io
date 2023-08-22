import { TopNav } from "./TopNav";

export default function Engineering() {
  return (
    <div className="content px-lg-5 bg-debug">
      <TopNav />
      <h2 className="numbered-heading">
        About Me
      </h2>
      <h2 className="numbered-heading">
        Where I've Worked
      </h2>
      <div
        role="tablist"
        aria-label="Job tabs"
        className="jobs__StyledTabList-sc-59sdss-1 sAHTI"
      >
        <button
          id="tab-0"
          role="tab"
          aria-selected="false"
          aria-controls="panel-0"
          className="jobs__StyledTabButton-sc-59sdss-2 jBtKSS"
        >
          <span>Rivers Agile</span>
        </button>
        <button
          id="tab-1"
          role="tab"
          aria-selected="true"
          aria-controls="panel-1"
          className="jobs__StyledTabButton-sc-59sdss-2 deLjYW"
        >
          <span>Viatris</span>
        </button>
        <button
          id="tab-2"
          role="tab"
          aria-selected="false"
          aria-controls="panel-2"
          className="jobs__StyledTabButton-sc-59sdss-2 jBtKSS"
        >
          <span>Highmark - HMHS</span>
        </button>
        <button
          id="tab-3"
          role="tab"
          aria-selected="false"
          aria-controls="panel-3"
          className="jobs__StyledTabButton-sc-59sdss-2 jBtKSS"
        >
          <span>Advanced Construction Robotics</span>
        </button>
      </div>
      ;
    </div>
  );
}
