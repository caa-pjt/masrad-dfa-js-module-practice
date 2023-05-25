import { getTextareaAlignment } from "./alignment.js";
import { getCurrentTime } from "./utils.js"; 
import { $message } from "./setup.js";



export function renderTemplate($template, content) {
    const alignment = getTextareaAlignment($message);
    
    $("div.msg-content", $template).text(content);
    $("small.text-primary", $template).text(getCurrentTime());
    $template.addClass(alignment);
    
    $("#dialog").find("div.row").append($template);
    $message.val("");
}


export function getTemplate(name) {
    return $.get(`templates/${name}.html`).then($);
}