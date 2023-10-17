const getCurrentYear = () => {
  const currentDate = new Date();
  return currentDate.getFullYear();
};

export { getCurrentYear };