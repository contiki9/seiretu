# srt-space

## Class Property

` {padding} or {margin}``{layout} `-`{size}`

- `padding`-> `p`
- `margin` -> `m`
- `layout` -> `a`,`x`,`y`,`t`,`b`,`l`,`r`

  - `ma-1` -> margin:8px
  - `mx-1` -> margin-right:8px;margin-left:8px
  - `my-1` -> margin-top:8px;margin-bottom:8px
  - `mt-1` -> margin-top:8px
  - `mb-1` -> margin-bottom:8px
  - `ml-1` -> margin-left:8px
  - `mr-1` -> margin-right:8px

  ### Break Point

  ` {padding} or {margin}` `{layout}`-`{BleakPoint}`-`{size}`

  - `ma-min-1`
  - `ma-s-1`
  - `ma-smin-1`
  - `ma-smax-1`
  - `ma-m-1`
  - `ma-mmin-1`
  - `ma-mmax-1`
  - `ma-l-1`
  - `ma-lmin-1`
  - `ma-lmax-1`
  - `ma-max-1`

  BleakPoint

  <pre>
  <code>
  (min, '(nax-width: 350px)'),
  //small
  (s, '(min-width: 351px) and (max-width: 767px)'),
  (smin, '(max-width: 767px)'),
  (smax, '(min-width: 351px)'),
  //medium
  (m, '(min-width: 768px) and (max-width: 1024px)'),
  (mmin, '(max-width: 1024px)'),
  (mmax, '(min-width: 768px)'),
  //large
  (l, '(min-width: 1025px) and (max-width: 1280px)'),
  (lmin, '(max-width: 1280px)'),
  (lmax, '(min-width: 1025px)'),
  (max, '(min-width: 1280px)')
  </code>
  </pre>

<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description | Type                        | Default     |
| --------- | --------- | ----------- | --------------------------- | ----------- |
| `class`   | `class`   |             | `string`                    | `undefined` |
| `display` | `display` |             | `"block" \| "inline-block"` | `'block'`   |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
