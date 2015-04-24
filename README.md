# event-twister v1.0.0

> Twist events at a dom

***Note*** This library depends on `jQuery` and [custom-class](https://github.com/kt3k/custom-class)

## Event Twister

An event twister is a dom element which has the functionality to "twist" an event which is triggered on the element into the other type of events.

For example an event twister, `<div class="event-twister" twist="click: foo;"></div>`, twists the `click` events on it into `foo` events.

See the section below for actual usage.

## Usage

```html
<script src="path/to/jquery.js"></script>
<script src="path/to/custom-class.js"></script>

<script src="path/to/event-twister.js"></script>


<div class="event-twister" twist="click: foo; mouseover: bar; mouseout: baz;">...</div>
```

`.event-twister` class declares the element is an event twister. The `twist` attribute defines what events are "twisted" to other events. In this case, `click` event will be twisted to `foo` custom event, `mouseover` to `bar` event and `mouseout` to `baz` event. The syntax of the `twist` is the same as css style properties.

See the [DEMO](https://kt3k.github.io/event-twister/test.html)

## License

MIT
