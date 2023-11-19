import { ComponentProps, FC, Fragment, ReactElement } from "react";

export const PdfTable: FC<
  { rows: ReactElement[][] } & Omit<ComponentProps<"pdf-table">, "children"> &
    Omit<ComponentProps<"pdf-tbody">, "children">
> = ({ rows, layout, ...tbodyProps }) => {
  return (
    <pdf-table layout={layout}>
      <pdf-tbody {...tbodyProps}>
        {rows.map((row, i) => (
          <pdf-array key={i}>
            {row.map((cell, j) => (
              <Fragment key={j}>{cell}</Fragment>
            ))}
          </pdf-array>
        ))}
      </pdf-tbody>
    </pdf-table>
  );
};
