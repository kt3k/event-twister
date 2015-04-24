# event-twister v0.1.0

> Twist events at a dom

## Usage

```html
<script src="path/to/jquery.js"></script>
<script src="path/to/custom-class.js"></script>

<script src="path/to/event-twister.js"></script>


<div class="event-twister" twist="click: foo; mouseover: bar; mouseout: baz;">...</div>
```

`.event-twister` class declares the div is an event twister. The `twist` attribute define what events are "twisted" to other event. In this case, `click` event will be twisted to `foo` custom event, `mouseover` to `bar` event and `mouseout` to `baz` event. The syntax of the `twist` is the same as css style properties.

See the [DEMO](https://kt3k.github.io/event-twister/test.html)

## License

MIT
