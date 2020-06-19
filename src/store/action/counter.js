
// action
export const add = (n) => {
  return {
    type: 'ADD_COUNT',
    payload: n
  }
}

// action
export const dele = () => {
  return {
      type: 'DELE_COUNT'
  }
}