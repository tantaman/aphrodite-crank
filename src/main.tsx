import { renderer } from "@b9g/crank/dom";
import { createElement } from "@b9g/crank";

console.log("hello world");

renderer.render(<div>Hello world</div>, document.body);
