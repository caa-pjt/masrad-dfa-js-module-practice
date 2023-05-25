import { $alignButtons } from "./setup.js";


export function changeAlignment(event) {
    const $target = $(event.currentTarget);
    // Change the active state when a button is clicked
    $("button.active", $alignButtons).removeClass("active");
    $target.addClass("active");
    // Check what button has been clicked
    const btnId = $target.attr("id");
    if (btnId === "align-left-btn") {
        $("#message").removeClass("text-end text-center").addClass("text-start")
    } else if (btnId === "align-center-btn") {
        $("#message").removeClass("text-end text-start").addClass("text-center");
    } else if (btnId === "align-right-btn") {
        $("#message").removeClass("text-start text-center").addClass("text-end");
    }
}


export function getTextareaAlignment($textarea) {
    if ($textarea.hasClass("text-start")) {
        return "text-class";
    } else if ($textarea.hasClass("text-center")) {
        return "text-center";
    } else {
        return "text-end";
    }
}

