import { renderTemplate, getTemplate } from "./templates.js";
import { $message } from "./setup.js";

export function createNewMessage(event) {
    const msgValue = $message.val();
    if (msgValue === "") {
        $message.addClass('is-invalid');
    } else {
        getTemplate("new-message")
        .then($)
        .then(($template) => renderTemplate($template, msgValue));
    }
    event.preventDefault();
}


export function removeMessage(event) {
    $(event.currentTarget).closest("div.col-8").remove()
}