import "./lib/jquery-3.6.4.min.js";

import { $alignButtons } from './modules/setup.js';
import { switchListItem } from "./modules/dialogs.js";
import { changeAlignment } from "./modules/alignment.js";
import { createNewMessage, removeMessage } from "./modules/messages.js";


// Feature 1 - Switch List Item

$("a.list-group-item").on("click", switchListItem);

// Feature 2 - Change Alignment


$("button", $alignButtons).on("click", changeAlignment);

// Feature 3 - Create New Message


$("#send-btn").on("click", createNewMessage);

// Feature 4 : "Remove message"

$("#dialog").on("click", "button", removeMessage)


