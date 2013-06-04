mkjq.rainbow
============

Simple jQuery plugin to make your text, block with a rainbow animation. For now, it directly uses CSS3 animation. I'm working on making a fallback solution.

I know it's something you can do without jQuery but if you want to do something like this quickly, you can use that.

Usage
-------------------------

* Include the CSS and JS file into your page and use it this way:

```javascript
    $('.hello').rainbow({speed: "fast", iteration: "1"});
    $('.hello2').rainbow({speed: "slow"});
    $('.hello3').rainbow({speed: "2s"});
    $('.hello4').rainbow();
```

You can use the LESS file to edit/use/generate the CSS quickly.
