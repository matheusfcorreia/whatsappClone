const INITIAL_STATE = {
  email: '',
  password: '',
  name: '',
  phone: ''
}


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_EMAIL':
      state.email = action.payload
      return state;
    case 'SET_NAME':
      state.name = action.payload
      return state;
    default: return state;
  }
};