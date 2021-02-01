import componentArchitect from './builder/componentArchitect';
import retriever from './retrievers';

export async function mdrEngine(payload, store) {
  const reactElementChildren = [];

  for (const child of retriever.componentChildren(payload)) {
    reactElementChildren.push(await mdrEngine(child));
  }
  // "break case"
  return await componentArchitect(
    retriever.componentType(payload),
    retriever.componentName(payload),
    retriever.componentProps(payload),
    retriever.componentActions(payload),
    reactElementChildren,
  );
}
