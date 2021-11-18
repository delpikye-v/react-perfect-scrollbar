<div align="center">
    <h1>react-perfect-scrollbar-z</h1>
    advertisement
    <br />
    <a href="https://codesandbox.io/s/react-perfect-scrollbar-z-8ikb5">LIVE EXAMPLE</a>
</div>

---

#### Description

+ It is wrap the <b>[perfect-scrollbar](https://github.com/mdbootstrap/perfect-scrollbar)</b> for the element.

+ Auto update scrollbar, you don't have to do anything.

+ Added support for scroll-y for only the body of the table. (Hold header)

---

#### Usage
```js
npm install react-perfect-scrollbar-z
```

Import the module in the place you want to use:
```js
/*
if you use perfect-scrollbar in many places you should import css in main file (override avoid)
*/
import 'react-perfect-scrollbar-z/build/styles.css';  // > ver 1.0.0

import Scrollbar from 'react-perfect-scrollbar-z'
```


#### Snippet

##### `simple`

```js
        // tagName = 'div' wrapName='div'
        // const [something1, setSomething1] = useState('') // <Component> 
        <Scrollbar height="100px" effectData={something1}>
            { something1 }
        </Scrollbar>
```

<br />

##### `special tagName (tbody, ul, dl, ol)`

```js
        // const refScroll = useRef(null) // you handle scrollbars
        // dosomthhing => refScroll.current.element.scrollTop = 0  || refScroll.current.update()
        <Scrollbar
            tagName="tbody" // tbody, ul, dl, ol
            maxHeight="400px"
            className="list-group"
            effectData={listData}
            always
            // onScrollY={evt => console.log(evt)}
            // refScroll={refScroll}
        >
            { listData.map(item => <tr>...</tr>) }
        </Scrollbar>
```

<br />

---

#### props

| props                | type                          | description                                                                |
|----------------------|-------------------------------|----------------------------------------------------------------------------|
| options              | Object                        | [perfect-scrollbar/options](https://github.com/mdbootstrap/perfect-scrollbar#options) |
| tagName              | String                        | Container scrollbar. Default `div`                                         |
| effectData           | String, Array, Object,.....   | Automatically update the scrollbar if the `effectData` has changed.        |
| always               | boolean                       | Always show scrollbar if data is overflow (`true`). Default `false`        |
| maxHeight            | `px, %, vh`                   | max-height of scrollbar                                                    |
| height               | `px, %, vh`                   | height of scrollbar                                                        |
| maxWidth             | `px, %, vw`                   | max-width of scrollbar                                                     |
| width                | `px, %, vw`                   | width of scrollbar                                                         |
| className            | String                        | Your css-class                                                             |
| style                | Object                        | Your css-style                                                             |
| libTable             | Boolean                       | When you update for 3th-party table. Default `false`                       |
| wrapName             | String                        | Wrap all element scroll (`div`).When tagName is not in [tbody, ul, ol, dl.]|
| wheelStop            | Boolean                       | wheelPropagation (quick in options). Default: `true`                       |
| refScroll            | useRef                        | If you want to use scrollbars (ps scrollbar)                               |
| ---                  | ---                           | ---                                                                        |
| onScrollY            | Function                      | y-axis is scrolled in either direction.                                    |
| onScrollX            | Function                      | x-axis is scrolled in either direction.                                    |
| onScrollUp           | Function                      | scrolling upwards.                                                         |
| onScrollDown         | Function                      | scrolling downwards.                                                       |
| onScrollLeft         | Function                      | scrolling to the left.                                                     |
| onScrollRight        | Function                      | scrolling to the right.                                                    |
| onYReachStart        | Function                      | scrolling reaches the start of the y-axis.                                 |
| onYReachEnd          | Function                      | scrolling reaches the end of the y-axis (useful for infinite scroll).      |
| onXReachStart        | Function                      | scrolling reaches the start of the x-axis.                                 |
| onXReachEnd          | Function                      | scrolling reaches the end of the x-axis (useful for infinite scroll).      |

<br />

#### Note

+ tbody only `scroll-y` (no x).

+ If you want to update `scrollTop`, `scrollLeft`, using `document.querySelector(#id).scrollTop = 0`... or `refScroll`

+ `ul/ol/dl/tbody`. This is a special. (multi childs), so you shouldn't update the border for tagName.

```js
<Scrollbar style={{ border: "1px solid" }} tagName="tbody" ... /> => no

<parent style={{ border: "1px solid" }}> <Scrollbar tagName="tbody" ... /> </parent> => OK
```

+ `libTable`
```js
<Scrollbar libTable={true}><CustomTag></CustomTag></Scrollbar>

It will try to add the perfect scrollbar to the `tbody` of the `first` table found.

+ Some cases when you scroll to bottom and remove item data.
=> It leaves empty space. It has check here.
```

<br />

#### RUN

<a href="https://codesandbox.io/s/react-perfect-scrollbar-z-8ikb5">LIVE EXAMPLE</a>

```js
npm install
```
```js
npm run dev
npm run start
```

### License

MIT
