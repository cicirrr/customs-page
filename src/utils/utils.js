const formatDate = {
  getToday() {
    const today = Date.now();
    const year = today.getFullYear();
    const m = today.getMonth() + 1;
    const month = m >= 10 ? m : `0${m}`;
    const d = today.getDate();
    const day = d >= 10 ? d : `0${d}`;
    return `${year}-${month}-${day}`;
  },
};

export {
  // eslint-disable-next-line import/prefer-default-export
  formatDate,
};
