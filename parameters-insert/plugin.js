const targetCalleeName = ['log', 'info', 'error', 'debug'].map((i) => `console.${i}`);

module.exports = function({ types, template }) {
  return {
    visitor: {
      CallExpression(path, state) {
        const calleeName = path.get('callee').toString();
        if (path.node.isNew) {
          return;
        }

        if (targetCalleeName.includes(calleeName)) {
          const { line, column } = path.node.loc.start;
          const newNode = template.expression(`console.log("filename: (${line}, ${column}):")`)();
          newNode.isNew = true;

          if (path.findParent((i) => i.isJSXElement())) {
            path.replaceWith(types.arrayExpression([newNode, path.node]));
            path.skip();
          } else {
            path.insertBefore(newNode);
          }
        }
      }
    }
  }
}