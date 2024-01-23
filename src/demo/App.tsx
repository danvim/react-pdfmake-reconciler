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
import { PdfDocument, PdfFooter, PdfHeader, PdfTable } from "../components";
import { Heading } from "./components/Heading.tsx";
import { styled } from "../styled";

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
      <h1>React pdfmake Reconciler</h1>
      <p>
        <a href="https://www.npmjs.com/package/react-pdfmake-reconciler">
          NPM Package
        </a>
      </p>
      <p>
        <a href="https://github.com/danvim/react-pdfmake-reconciler">
          GitHub repository
        </a>
      </p>
      <label>
        Name{" "}
        <input value={name} onChange={(e) => setName(e.currentTarget.value)} />
      </label>

      <div>
        {shown && (
          <PdfPreview style={{ width: 1000, height: 500 }}>
            <StrictMode>
              <PdfDocument
                pageOrientation="landscape"
                pageMargins={[32, 48, 32, 48]}
                defaultStyle={{
                  color: "#0e23a2",
                }}
              >
                <Heading>
                  Report for {name.length === 0 ? "No Name" : name}
                </Heading>
                <SourceContext.Provider value={{ url: "https://apple.com" }}>
                  <Counter />
                </SourceContext.Provider>
                <pdf-text>
                  Hello{" "}
                  <pdf-text link="https://www.google.com">Google</pdf-text>
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
                <StyledText>Text via Styled API</StyledText>
                <StyledText2>Another text via Styled API</StyledText2>
              </PdfDocument>
              <PdfFooter>
                {(pageNumber, pageCount) => (
                  <pdf-columns margin={[32, 0, 32, 0]}>
                    <>This is a footer </>
                    <pdf-text alignment="right">
                      Page {pageNumber} / {pageCount}
                    </pdf-text>
                  </pdf-columns>
                )}
              </PdfFooter>
              <PdfHeader>
                <pdf-text marginLeft={32} marginTop={16}>
                  This is a header!
                </pdf-text>
              </PdfHeader>
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

const StyledText = styled("pdf-text")({
  color: "#f00",
});
StyledText.displayName = "StyledText";

const StyledText2 = styled(StyledText)({
  color: "#0f0",
});
StyledText2.displayName = "StyledText2";

export default App;
