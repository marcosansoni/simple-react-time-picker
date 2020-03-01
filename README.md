# Simple-React-Time-Picker

A simple time picker component for a React App.

## Installation
Install by executing 
```npm i simple-react-time-picker``` 
or 
```yarn add simple-react-time-picker```.

## Demo

A minimal demo is available [here](https://marcosansoni.github.io/simple-react-time-picker/storybook-static/)!

## Documentation

Include component into your project with
```
import TimePicker from 'simple-react-time-picker
```

Minimum setup for the component is the following

```
<TimePicker />
```

With the usage of props `onChange` you can obtain current time selected as a moment.js object.

#### Props

|Prop name|Description|Default value|Example values|
|----|----|----|----|
|TwelveHours|Time format, if 12 or 24|true|`true`|
|title|Title of the Time Picker|`Select a time`|`Select a time`|
|onChange|Callback trigger at each selection|n/a|n/a|
