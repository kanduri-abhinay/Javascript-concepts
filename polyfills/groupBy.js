function groupBy(data, executor) {
  return data.reduce((result, element) => {
    const val = executor(element);
    (result[val] ||= []).push(element);
    return result;
  }, {});
}

const items = [
  {
    id: 1,
    kind: "a",
  },
  {
    id: 2,
    kind: "b",
  },
  {
    id: 3,
    kind: "a",
  },
];

const groups = groupBy(items, ({ kind }) => kind);
console.log(groups);
