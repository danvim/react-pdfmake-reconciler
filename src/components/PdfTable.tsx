import { ComponentProps, FC, ReactElement } from "react";

export const PdfTable: FC<
  { rows: ReactElement[][] } & Omit<ComponentProps<"pdf-table">, "children"> &
    Omit<ComponentProps<"pdf-tbody">, "children">
> = ({ rows, layout, ...tbodyProps }) => {
  return (
    <pdf-table layout={layout}>
      <pdf-tbody {...tbodyProps}>
        {rows.map((row) => (
          <pdf-array>{row}</pdf-array>
        ))}
      </pdf-tbody>
    </pdf-table>
  );
};
