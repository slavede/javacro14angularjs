## JavaCro 14 AngularJS Unit Testing ##

Session I gave at JavaCro14 about unit testing in AngularJS has simple project that has everything implemented that was said at session.

Here's presentation:

http://www.slideshare.net/slaventomac/slaven-tomac-unit-testing-in-angular-js

### Installation ###

```javascript
git clone https://github.com/slavede/javacro14angularjs.git
npm install
bower install
```

### Running local server ###

```javascript
grunt expressServerLocal (runs it on localhost)
grunt expressServerRemote (runs it on 0.0.0.0)
```

### Running tests ###
There are tree main configuration files for running tests:

<ul>
  <li>karma-chrome.conf.js - runs tests on Chrome (without coverage report)</li>
  <li>karma-phantomjs.conf.js - runs tests on PhantomJS (without coverage report)</li>
  <li>karma-jenkins.conf.js - runs tests on PhantomJS (with coverage report)</li>
<ul>

#### How to run tests ####
After npm install, karma will be installed in your node_modules folder so you should run them with:
```javascript
<path_to_karma_bin> start <path_to_configuration_file>
```
