# My Web CV
CV made with JavaScript vanilla, Sass, Html5

## Using Sass

- This project is using Sass, so you have to install the dependencies

```
npm install
```

- To watch sass changes use the following command

```
npm run sass-watch
```


## Google Fonts

### Roboto Flex: CSS class for a variable style
```css
// <uniquifier>: Use a unique and descriptive class name
// <weight>: Use a value from 100 to 1000

.roboto-flex-<uniquifier> {
  font-family: "Roboto Flex", sans-serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
  font-variation-settings:
    "slnt" 0,
    "wdth" 100,
    "GRAD" 0,
    "XOPQ" 96,
    "XTRA" 468,
    "YOPQ" 79,
    "YTAS" 750,
    "YTDE" -203,
    "YTFI" 738,
    "YTLC" 514,
    "YTUC" 712;
}
```

### Playpen Sans: CSS class for a variable style
```css
// <uniquifier>: Use a unique and descriptive class name
// <weight>: Use a value from 100 to 800

.playpen-sans-<uniquifier> {
  font-family: "Playpen Sans", cursive;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
}
```

### Foldit: CSS class for a variable style
```css
// <uniquifier>: Use a unique and descriptive class name
// <weight>: Use a value from 100 to 900

.foldit-<uniquifier> {
  font-family: "Foldit", sans-serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
}
```

### Honk: CSS class for a variable style
```css
// <uniquifier>: Use a unique and descriptive class name

.honk-<uniquifier> {
  font-family: "Honk", system-ui;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-variation-settings:
    "MORF" 15,
    "SHLN" 50;
}
```