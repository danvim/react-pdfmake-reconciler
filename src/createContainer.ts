import { Container } from "./types/Container.ts";

export const createContainer = (
  container: Partial<Container> = {},
): Container => ({
  content: [],
  onUpdate: () => {},
  otherDocumentDefinitions: {},
  ...container,
});
