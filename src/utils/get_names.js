const getNames = (people, profession, value) => {
  const filteredPeople = people.filter(
    (person) => person[profession] === value
  );
  const slicedPeople = filteredPeople.slice(0, 30);
  const names = slicedPeople.map((person) => person.name).join(", ") || "-";
  return names;
};

export { getNames };
