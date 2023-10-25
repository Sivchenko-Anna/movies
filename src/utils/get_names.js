const getName = (people, profession, value) => {
  return (
    people
      .filter((person) => person[profession] === value)
      .map((person) => person.name)
      .join(", ") || "-"
  );
};

export { getName };
