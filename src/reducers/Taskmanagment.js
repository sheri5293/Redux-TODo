//reducers hold current state of the application and return new state based on action//

const intialData = {
  list: [],
};

const addTaskThing = (state = intialData, actions) => {
  switch (actions.type) {
    case 'ADD_TASK':
      const { id, data } = actions.payload;

      if (data.length > 2) {
        return {
          ...state,
          list: [
            ...state.list,
            {
              id: id,
              data: data, //current data//
            },
          ],
        };
      }

      break;

    case 'DEL_TASK':
      const newList = state.list.filter((elem) => elem.id !== actions.id);

      return {
        ...state,
        list: newList,
      };

    case 'Remove_All':
      return {
        ...state,
        list: [],
      };

    default:
      return state;
  }
};
export default addTaskThing;
