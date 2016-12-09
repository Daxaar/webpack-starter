// require("./style.css");
// document.write(require("./content.js"));
// document.write(require("./more-content.js"))
import "babel-polyfill";
import Customer from "./customer";

var me = new Customer("Darren", "Testing");
document.write(me.getName());
