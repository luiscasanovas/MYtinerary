const initialState = {
  exampleData: []
};

const exampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'EXAMPLE_ACTION':
      return {
        ...state,
        exampleData: action.payload
      };
    default:
      return state;
  }
};

export default exampleReducer;
