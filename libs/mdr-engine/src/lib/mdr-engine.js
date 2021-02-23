import componentArchitect from './builder/componentArchitect';
import retriever from './retrievers';

export async function mdrEngine(payload) {
  const reactElementChildren = [];

  for (const child of retriever.componentChildren(payload)) {
    reactElementChildren.push(await mdrEngine(child));
  }
  return await componentArchitect(
    retriever.componentType(payload),
    retriever.componentName(payload),
    retriever.componentProps(payload),
    retriever.componentActions(payload),
    retriever.componentId(payload),
    reactElementChildren,
  );
}

