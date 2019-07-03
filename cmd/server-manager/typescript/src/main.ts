import "jquery";
import "bootstrap";
import "bootstrap-switch";
import "@fortawesome/fontawesome-free/js/all";
import "summernote/dist/summernote-bs4";
import "./libs/jquery.quicksearch.js";
import "multiselect";
import "moment";
import "moment-timezone";
import "./javascript/manager.js";
import { RaceControl } from "./RaceControl";

$(() => {
    new RaceControl();
});

declare global {
   interface JQuery {
      bootstrapSwitch: any;
   }
}