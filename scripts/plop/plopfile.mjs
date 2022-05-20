export default function (plop) {
  // plop.setHelper('tagWithoutPrefix', tag => tag.replace(/^sl-/, ''));

  // plop.setHelper('tagToTitle', tag => {
  //   const withoutPrefix = plop.getHelper('tagWithoutPrefix');
  //   const titleCase = plop.getHelper('titleCase');
  //   return titleCase(withoutPrefix(tag).replace(/-/g, ' '));
  // });

  plop.setGenerator("component", {
    description: "Generate a new component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "web component name",
        // validate: (value) => {
        //   if (val) {
        //     return true;
        //   } else {
        //     return false;
        //   }
        // },
      },
    ],
    actions: [
      {
        type: "add",
        path: "../../packages/{{name}}/package.json",
        templateFile: "templates/package.json.hbs",
      },
      {
        type: "add",
        path: "../../packages/{{name}}/index.ts",
        templateFile: "templates/index.ts.hbs",
      },
      {
        type: "add",
        path: "../../packages/{{name}}/src/{{name}}.ts",
        templateFile: "templates/name.ts.hbs",
      },
      {
        type: "add",
        path: "../../packages/{{name}}/src/{{name}}.test.ts",
        templateFile: "templates/name.test.ts.hbs",
      },
      {
        type: "add",
        path: "../../packages/{{name}}/src/{{name}}.css.ts",
        templateFile: "templates/name.css.ts.hbs",
      },
    ],
  });
}
