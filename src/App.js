import { createRoot } from "react-dom/client";

import BodyComponent from "./BodyComponent";
import Header from "./Header";

const AppComponent = () => (
  <>
    <Header />
    <BodyComponent />
    {/* <Footer /> */}
  </>
);
const root = createRoot(document.getElementById("root"));
root.render(<AppComponent />);
