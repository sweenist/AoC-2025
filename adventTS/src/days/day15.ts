type Data = Array<Record<string, string | number>>;
type SortBy = string;

export function drawTable(data: Data, sortBy: SortBy): string {
  type ColumnConfig = {
    header: string;
    columnWidth: number;
    fieldName: string;
  };
  function getColumnConfiguration(data: Data): ColumnConfig[] {
    const headers = Array.from({ length: 26 }, (_, i) =>
      String.fromCharCode(65 + i)
    );

    const columnConfig: ColumnConfig[] = [];
    Object.keys(data[0]).forEach((key, i) => {
      const maxWidth = data.reduce((max, current) => {
        if (typeof current[key] === "string") {
          const str = current[key].toString();
          return str.length > max ? str.length : max;
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

  function composeTable(data: Data, columnConfigs: ColumnConfig[]): string {
    const node = '+';
    const hSep = '-';
    const vSep = '|';
    const nl = '\n';

    let sb: string = node;

    const headerSeparator = () => {
      const divs = columnConfigs.map((c) => hSep.repeat(c.columnWidth + 2));
      return divs.join(node) + node + nl;
    }

    sb += headerSeparator();
    sb += vSep + columnConfigs.map((c) => ' ' + c.header.padEnd(c.columnWidth, ' ') + ' ').join(vSep) + vSep + nl;
    sb += node + headerSeparator();

    data.map((d) => {
      sb += vSep;
      Object.keys(d).forEach((_, i) => {
        const { fieldName: key, columnWidth } = columnConfigs[i]
        sb += ' ' + d[key].toString().padEnd(columnWidth) + ' ' + vSep;
      });
      sb += nl
    });

    sb += node + headerSeparator();
    return sb;
  }

  const sorted = data.sort((a, b) => {
    return a[sortBy] > b[sortBy] ? 1 : a[sortBy] < b[sortBy] ? -1 : 0;
  });
  const columnConfig = getColumnConfiguration(sorted);

  return composeTable(sorted, columnConfig);
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

export const result = drawTable(exampleA, "quantity");
export const res2 = drawTable(exampleB, 'name');
