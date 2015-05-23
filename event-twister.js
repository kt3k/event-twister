/**
 * event-twister.js v2.0.1
 * author: Yoshiya Hinosawa ( https://github.com/kt3k )
 * license: MIT
 */


(function ($) {
    'use strict';

    $.registerClassComponent('event-twister', function (){

        var twister = new EventTwister(this);

        twister.bindEvents();

    });


    /**
     * EventTwister handles the initialization of `.event-twister` class element.
     */
    function EventTwister(elem) {

        this.$elem = $(elem);

    }

    var pt = EventTwister.prototype;

    /**
     * Binds events to the element.
     */
    pt.bindEvents = function () {

        var $elem = this.$elem;

        var handleBubble = this.handleBubble();

        this.getTwists().forEach(function (twist) {

            $elem.on(twist.original, function (e) {

                if (!handleBubble && e.target !== $elem.get(0)) {

                    return;

                }

                $elem.trigger(twist.twist);

            });

        });

    };

    pt.getTwists = function () {

        var twist = this.$elem.attr('twist') || this.$elem.attr('twists');

        if (!twist) {
            return [];
        }

        var twists = twist.split(';');

        return twists.map(function (twist) {

            var map = twist.split(':', 2);

            if (map.length < 2) {

                return;

            }

            map = map.map(function (event) {

                return event.replace(/^\s*|\s*$/g, ''); // trim()

            });

            return {
                original: map[0],
                twist: map[1]
            };

        }).filter(function (twist) { return !!twist; }); // filter out undefined


    };


    pt.handleBubble = function () {

        return !!this.$elem.attr('handle-bubble');

    };


}(window.jQuery));
