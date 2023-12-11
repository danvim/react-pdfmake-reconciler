/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDynamicImport } from "docusaurus-plugin-react-docgen-typescript/dist/esm/hooks";
import { FC } from "react";

export const PropTable: FC<{ name: string }> = ({ name }) => {
  const props = useDynamicImport(name);

  if (!props) {
    return null;
  }

  const propEntries: [string, any][] = Object.entries(props);
  const libPropEntries: any[] = [];
  const libTypes = new Set<string>();
  const defaultPropEntries: any[] = [];

  for (const [key, prop] of propEntries) {
    if (prop.parent?.fileName.includes("@types/react")) {
      libPropEntries.push([key, prop]);
      libTypes.add(prop.parent.name);
    } else {
      defaultPropEntries.push([key, prop]);
    }
  }

  return (
    <>
      <p>This type also extends: {Array.from(libTypes).join(", ")}</p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Required</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {defaultPropEntries.map(([key, prop]) => {
            return (
              <tr key={key}>
                <td>
                  <code>{key}</code>
                </td>
                <td>
                  <code>{prop.type?.name}</code>
                </td>
                <td>{prop.required ? "Yes" : "No"}</td>
                <td>{prop.description}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
