import produce from "immer";
import { SET_ITEMS, ADD_ITEM, EDIT_ITEM, DELETE_ITEM } from "./constants";

export default (state, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_ITEMS:
        draft.items = action.items;
        break;
      case ADD_ITEM:
        draft.items.push(action.item);
        break;
      case EDIT_ITEM:
        const { data: itemEdit } = action;

        const itemIndexEdit = draft.items.findIndex(
          (item) => item._id === itemEdit._id
        );
        if (itemIndexEdit >= 0) {
          draft.items.splice(itemIndexEdit, 1, itemEdit);
        }
        break;
      case DELETE_ITEM:
        const { data: itemDel } = action;

        const itemIndexDel = draft.items.findIndex(
          (item) => item._id === itemDel._id
        );
        if (itemIndexDel >= 0) {
          draft.items.splice(itemIndexDel, 1);
        }
        break;

      default:
        break;
    }
  });
