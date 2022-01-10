import { generate_list, generate_list_item } from "./modules/list.js";

let list = generate_list(document.body);
generate_list_item(list, `img/1.jpg`);
generate_list_item(list, `img/2.jpg`);
generate_list_item(list, `img/3.jpg`);