export const incNumber = (num) => {
  return {
    type: 'INCREMENT',
    payload: num, //payload ki jagah kuch bi likh sakty hain
  };
};

export const decNumber = () => {
  return {
    type: 'DECREMENT',
  };
};

export const mulNumber = (num) => {
  return {
    type: 'MULTIPLY',
    payload: num,
  };
};

export const divNumber = (num) => {
  return {
    type: 'DIVIDE',
    payload: num,
  };
};

export const addTask = (data) => {
  return {
    type: 'ADD_TASK',
    payload: {
      id: Math.random(),
      data: data,
    },
  };
};

export const delTask = (id) => {
  return {
    type: 'DEL_TASK',
    id,
  };
};

export const removeTask = () => {
  return {
    type: 'Remove_All',
  };
};
