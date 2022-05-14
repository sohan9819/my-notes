export const filterReducer = (filterState, { type, payload }) => {
  switch (type) {
    case 'clear':
      return {
        ...filterState,
        search: '',
        sort: 'none',
      };
    case 'data':
      return { ...filterState, cards: payload };
    case 'search':
      return { ...filterState, search: payload };
    case 'sort':
      return { ...filterState, sort: payload };

    default:
      break;
  }
};
