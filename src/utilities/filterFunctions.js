const search = (filterState, cards) => {
  const regex = new RegExp(filterState.search, 'gi');
  return cards.filter((card) => card.title.match(regex));
};

const sort = (filterState, cards) => {
  switch (filterState.sort) {
    case 'asc':
      return cards.sort(
        (a, b) => new Date(b.timeStamp) - new Date(a.timeStamp)
      );
    case 'dsc':
      return cards.sort(
        (a, b) => new Date(a.timeStamp) - new Date(b.timeStamp)
      );
    case 'none':
      return cards;
    default:
      break;
  }
};

export { search, sort };
