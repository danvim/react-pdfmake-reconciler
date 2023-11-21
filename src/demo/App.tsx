import {
  createContext,
  FC,
  StrictMode,
  useContext,
  useEffect,
  useState,
} from "react";
import "./App.css";
import { PdfPreview } from "../PdfPreview.tsx";
import { PdfNode } from "../types/PdfNode.ts";
import { PdfTable } from "../components";
import { Heading } from "./components/Heading.tsx";

const Bold: FC<{ children?: PdfNode }> = ({ children }) => {
  return <pdf-text bold={true}>{children}</pdf-text>;
};

interface SourceContextType {
  url: string;
}

const SourceContext = createContext<SourceContextType>({ url: "" });

const Counter = () => {
  const [count, setCount] = useState(0);
  const { url } = useContext(SourceContext);

  useEffect(() => {
    const counter = () => {
      setCount((count) => count + 1);
    };

    window.addEventListener("increment", counter);

    return () => {
      window.removeEventListener("increment", counter);
    };
  }, []);

  return (
    <Bold>
      Count {url}: {count}
    </Bold>
  );
};

function App() {
  const [shown, setShown] = useState(true);
  const [name, setName] = useState("Peter");

  return (
    <>
      <h1>React PDF Make Reconciler</h1>
      <p>
        <a href="https://www.npmjs.com/package/react-pdfmake-reconciler">
          NPM Package
        </a>
      </p>
      <p>
        <a href="https://www.npmjs.com/package/react-pdfmake-reconciler">
          GitHub repository
        </a>
      </p>
      <label>
        Name{" "}
        <input value={name} onChange={(e) => setName(e.currentTarget.value)} />
      </label>

      <div>
        {shown && (
          <PdfPreview>
            <StrictMode>
              <Heading>
                Report for {name.length === 0 ? "No Name" : name}
              </Heading>
              <SourceContext.Provider value={{ url: "https://apple.com" }}>
                <Counter />
              </SourceContext.Provider>
              <pdf-text>
                Hello <pdf-text link="https://www.google.com">Google</pdf-text>
              </pdf-text>
              <pdf-array>Check this out</pdf-array>
              <pdf-stack>
                <pdf-text>Hello</pdf-text>
                <pdf-text>Hello</pdf-text>
                <pdf-text>Hello</pdf-text>
              </pdf-stack>
              <pdf-table layout="lightHorizontalLines">
                <pdf-tbody headerRows={1}>
                  <pdf-array>
                    <pdf-text>Hello</pdf-text>
                    <pdf-text>Hello</pdf-text>
                  </pdf-array>
                  <pdf-array>
                    <pdf-text>Hello</pdf-text>
                    <pdf-text>Hi</pdf-text>
                  </pdf-array>
                  <pdf-array>
                    Hello
                    <pdf-cell border={[true, true, true, true]}>
                      <pdf-text>Hello</pdf-text>
                    </pdf-cell>
                  </pdf-array>
                </pdf-tbody>
              </pdf-table>
              <PdfTable
                layout="noBorders"
                rows={[
                  [<pdf-text>Hello</pdf-text>, <pdf-text>Hello</pdf-text>],
                  [<pdf-text>Hello</pdf-text>, <pdf-text>Hello</pdf-text>],
                ]}
              />
            </StrictMode>
          </PdfPreview>
        )}
      </div>

      <button onClick={() => setShown((shown) => !shown)}>Toggle</button>

      <button
        onClick={() => window.dispatchEvent(new CustomEvent("increment"))}
      >
        Increment
      </button>
    </>
  );
}

export default App;
