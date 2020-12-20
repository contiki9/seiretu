# seiretu

## Using this component

```
<script type="module" src="//cdn.jsdelivr.net/gh/contiki9/seiretu/www/build/seiretu.esm.js"></script>
<script nomodule src="//cdn.jsdelivr.net/gh/contiki9/seiretu/www/build/seiretu.js"></script>

[storybook](https://contiki9.github.io/seiretu/)
```

## develop

```bash
git clone https://github.com/contiki9/seiretu.git seiretu
cd seiretu
git remote rm origin
```

and run:

```bash
npm install
npm start
```

To build the component for production, run:

```bash
npm run build
```

To run the unit tests for the components, run:

```bash
npm test
```

To run storybook:

```bash
npm run storybook
```

To build storybook to github-pages:

```bash
npm run deploy
```

Need help? Check out our docs [here](https://github.com/ionic-team/stencil-component-starter).
