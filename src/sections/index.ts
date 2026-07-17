import focus from "./about/config";
import project from "./project/config";
import experience from "./experience/config";
import education from "./education/config";
import contact from "./contact/config";

const sections = [
  focus,
  project,
  experience,
  education,
  contact

].sort((a, b) => a.order - b.order);

export default sections;