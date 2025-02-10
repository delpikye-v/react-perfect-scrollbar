<div align="center">
    <h1>react-perfect-scrollbar-z</h1>
    <br />
    <a href="https://codesandbox.io/p/sandbox/epic-yalow-q6r5n4">LIVE EXAMPLE</a>
</div>

---

[![NPM](https://img.shields.io/npm/v/react-perfect-scrollbar-z.svg)](https://www.npmjs.com/package/react-perfect-scrollbar-z)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![Downloads](https://img.shields.io/npm/dt/react-perfect-scrollbar-z.svg)

---

#### Description (big change)

+ It is wrap the <b>[perfect-scrollbar](https://github.com/mdbootstrap/perfect-scrollbar)</b> for the element.

+ Auto update scrollbar (resize, change data), you don't have to do anything.

+ Support for scroll-y for only the body of the table. (Keep header)

---

#### Usage
```js
npm install react-perfect-scrollbar-z
```

Import the module in the place you want to use:

```js
import 'react-perfect-scrollbar-z/build/styles.css';

import { Scrollbar, ScrollbarTBody, ScrollbarDataList } from 'react-perfect-scrollbar-z' // wrap default
```

#### Snippet

##### simple

```js
    // div
    // something1 (..any, showHide, data2, data3)
    <Scrollbar height="100px" effectData={something1...}>
        { something1...  }
    </Scrollbar>
```

##### data-list (ul/ol/dl)

```js
    <ScrollbarDataList
        effectData={listTodo}
        refScroll={ref}
        {/* tagName?: 'ul' | 'dl' | 'ol'; */}
        maxHeight="200px"
        always
    >
        {listTodo.map((item, index) => {
            return (
                <li
                key={index}
                style={{
                    background: 'rgb(243 244 246)',
                }}
                >
                <b>
                    {index + 1} - {item.title}
                </b>
                &nbsp;&nbsp;
                <button onClick={() => delItem(item)}>Delete</button>
                </li>
            );
        })}
    </ScrollbarDataList>
```
<br />

##### tbody
```js
    const [listTodo, setListTodo] = useState<any[]>([]);

    <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <ScrollbarTBody
          effectData={listTodo}
          // effectData = { [listTodo, showHide, ....more] }
          maxHeight="130px"
          always
        >
          {listTodo.map((item, index) => {
            return (
              <tr key={index} style={{ borderBottom: '1px solid' }}>
                <td style={{ background: 'red', color: '#fff' }}>
                  {index + 1} - {item.title}
                </td>
                <td style={{ background: 'green', textAlign: 'center' }}>
                  <button onClick={() => delItem(item)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </ScrollbarTBody>
    </table>
```

##### forTableChildren

```js
    <div style={{ boxShadow: '0px 0px 8px rgb(0 0 0 / 60%)' }}>
        <Scrollbar
          effectData={listTodo}
          refScroll={ref}
          maxHeight="200px"
          forTableChildren 
          {/* => find first table append perfect-scrollbar */}
          always
        >
          {listTodo.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  background: 'rgb(243 244 246)',
                }}
              >
                <b>
                  {index + 1} - {item.title}
                </b>
                &nbsp;&nbsp;
                <button onClick={() => delItem(item)}>Delete</button>
              </div>
            );
          })}

          <div>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {listTodo.map((item, index) => {
                  return (
                    <tr key={index} style={{ borderBottom: '1px solid' }}>
                      <td style={{ background: 'red', color: '#fff' }}>
                        {index + 1} - {item.title}
                      </td>
                      <td style={{ background: 'green', textAlign: 'center' }}>
                        <button onClick={() => delItem(item)}>Delete</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Scrollbar>
    </div>
```

<br />

```js
// access scrollbar (your handler)
refScroll.current.element.scrollTop = 0  || refScroll.current.update()
```

---
#### Props

| props                | type                          | description                                                                           |
|----------------------|-------------------------------|---------------------------------------------------------------------------------------|
| options              | Object                        | [perfect-scrollbar/options](https://github.com/mdbootstrap/perfect-scrollbar#options) |
| tagName              | String                        | Container scrollbar. Default `ul` for `data-list`                                     |
| effectData           | String, Array, Object,.....   | Automatically update the scrollbar if the `effectData` has changed.                   |
| always               | boolean                       | Always show scrollbar if data is overflow `true`. Default `false`                     |
| maxHeight            | `px, %, vh`                   | max-height of scrollbar                                                               |
| height               | `px, %, vh`                   | height of scrollbar                                                                   |
| maxWidth             | `px, %, vh`                   | max-width of scrollbar                                                                |
| width                | `px, %, vw`                   | width of scrollbar                                                                    |
| className            | String                        | Your css-class                                                                        |
| style                | Object                        | Your css-style                                                                        |
| wheelStop            | Boolean                       | wheelPropagation (quick in options). Default: `true`                                  |
| refScroll            | useRef                        | If you want to use scrollbar (ps scrollbar)                                           |
| ---                  | ---                           | ---                                                                                   |
| onScrollY            | Function                      | y-axis is scrolled in either direction.                                               |
| onScrollX            | Function                      | x-axis is scrolled in either direction.                                               |
| onScrollUp           | Function                      | scrolling upwards.                                                                    |
| onScrollDown         | Function                      | scrolling downwards.                                                                  |
| onScrollLeft         | Function                      | scrolling to the left.                                                                |
| onScrollRight        | Function                      | scrolling to the right.                                                               |
| onYReachStart        | Function                      | scrolling reaches the start of the y-axis.                                            |
| onYReachEnd          | Function                      | scrolling reaches the end of the y-axis (useful for infinite scroll).                 |
| onXReachStart        | Function                      | scrolling reaches the start of the x-axis.                                            |
| onXReachEnd          | Function                      | scrolling reaches the end of the x-axis (useful for infinite scroll).                 |

<br />

#### Note

+ tbody only `scroll-y` (no x).  You should not use maxWidth, width (default by table).

+ Update `scrollTop`, `scrollLeft`: using `refScroll`.

+ `ul/ol/dl/tbody`. This is a special. (multi child), so you shouldn't update the border for tagName.

<br />

#### Run

###### <a href="https://codesandbox.io/p/sandbox/epic-yalow-q6r5n4">LIVE EXAMPLE</a>

```js
npm install
```
```js
npm run dev
npm run start
```

#### License

MIT
