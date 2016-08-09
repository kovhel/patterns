**Mobile browsers&#39; features\restrictions**

1 **Debuging** (Android):

- Chrome 32 or later installed on your development machine.
- USB drivers installed on your development machine
- A USB cable to connect your Android device to your development machine.
- Android 4.0 or later.
- Chrome for Android installed on your Android device

Or

-
  - Android emulator (comes with the Android SDK)
  - iOS emulator
  - Emulation in browser

2 **Mobile APIs** : orientation and geolocation

3 To use a touch screen you&#39;ll need to work with **DOM Touch events**

4 **The viewport meta tag** instructs the browser to display your site at the appropriate scale for the user&#39;s device.

5 **Responsive Web Design** :

-
  - fluid CSS layouts
  - size and orientation of the screen changes
  - media queries

6 **Optimizations** :

-
  - loading images appropriate to the device screen size and resolution
  - use CSS properties to implement visual effects like gradients and shadows without images
  - detect specific device features such as screen size and touch screens

7 Tips for **mobile development** :

-
  - Creating a fullscreen experience (Fullscreen API)
  - Creating a web app on the home screen (&lt;meta name=&quot;apple-mobile-web-app-capable&quot; content=&quot;yes&quot;&gt;, &lt;meta name=&quot;mobile-web-app-capable&quot; content=&quot;yes&quot;&gt;)
  - Truly numeric text field(input elements types)
  - Input type=&quot;datetime-local&quot; instead of &quot;datetime&quot;
  - Rich editors to have possibility to copy/paste text (contenteditable attribute for a &lt;div&gt;, a &lt;table&gt; or a &lt;ul&gt;)
  - Safari&#39;s tint - background colour of your website for pre-loading view (body {/\* for safari&#39;s tint \*/background-color: blue;}
  - Live tiles for Windows Phone_(&lt;meta name=&quot;msapplication-TileImage&quot; content=&quot;tile-background.png&quot;&gt;, &lt;meta name=&quot;msapplication-TileColor&quot; content=&quot;#FF0000&quot;&gt;_)
  - Zombie tab for iOS: you will receive updates only from the active tab, trick:_&lt;meta http-equiv=&quot;refresh&quot; /&gt;_

Some more information here:

-
  - [http://www.creativebloq.com/html5/12-html5-tricks-mobile-81412803](http://www.creativebloq.com/html5/12-html5-tricks-mobile-81412803)
  - [https://developer.mozilla.org/en-US/docs/Web/Guide/Mobile](https://developer.mozilla.org/en-US/docs/Web/Guide/Mobile)
  - [https://developers.google.com/web/tools/chrome-devtools/debug/remote-debugging/remote-debugging](https://developers.google.com/web/tools/chrome-devtools/debug/remote-debugging/remote-debugging)

**Mobile UI frameworks** :

-
  - **Ionic** (is wrapping Angular framework)is maintainable and scalable, uses clean and easy to read markup, comes packed with highly mobile-optimized library of CSS (Powered by Sass), HTML and js components (v1: iOS 7+, and Android 4.1, v2: iOS 8+, Windows 10 Universal App, Android 4.4+);
  - **Onsen UI** (one can choose to use Angular or jquery to build apps), priority is performance and ease of use.V2 features: Material Design, Angular 2 and React support;
  - **JQuery Mobile** - doesn&#39;t focus much on providing native look and feel to apps for individual platforms like iOS or Android;
  - **Mobile Angular UI** provides directives for building UI components, includes Bootstrap 3.

And many similar frameworks could be found here [http://noeticforce.com/best-hybrid-mobile-app-ui-frameworks-html5-js-css](http://noeticforce.com/best-hybrid-mobile-app-ui-frameworks-html5-js-css)