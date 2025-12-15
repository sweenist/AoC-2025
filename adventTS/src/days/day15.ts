type Data = Array<Record<string, string | number>>;
type SortBy = string;
type ColumnConfig = {
  header: string;
  columnWidth: number;
  fieldName: string;
};

export function drawTable(data: Data, sortBy: SortBy): string {
  const sorted = data.sort((a, b) => {
    return a[sortBy] > b[sortBy] ? 1 : a[sortBy] < b[sortBy] ? -1 : 0;
  });
  const columnCOnfig = getColumnConfiguration(sorted);
  console.info(columnCOnfig)
  return "";
}

function getColumnConfiguration(data: Data): ColumnConfig[] {
  const headers = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i)
  );

  const columnConfig: ColumnConfig[] = [];
  Object.keys(data[0]).forEach((key, i) => {
    const maxWidth = data.reduce((max, current) => {
      if (typeof current[key] === "string") {
        return current[key].length > max ? current[key].length : max;
      } else {
        const numberString = current[key].toString();
        return numberString.length > max ? current[key] : max;
      }
    }, 0);
    columnConfig.push({
      header: headers[i],
      fieldName: key,
      columnWidth: maxWidth,
    });
  });

  return columnConfig;
}

const exampleA = [
  { gift: "Book", quantity: 5 },
  { gift: "Music CD", quantity: 1 },
  { gift: "Doll", quantity: 10 },
];

const exampleB = [
  { name: "Charlie", city: "New York" },
  { name: "Alice", city: "London" },
  { name: "Bob", city: "Paris" },
];

export const result = drawTable(exampleB, "name");
