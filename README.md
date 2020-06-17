# clean-console

A simple library to keep the console of your site or app clean. No more logs, errors, warnings, etc. printed on the console and visible to everybody.
You can also show fancy messages to your curious visitors.

<img width="100%" src="https://github.com/eaboy/clean-console/raw/master/img/initial_message.png" alt="clean-console with initial message" />

And if you want to see the logs for debugging, you can just set a local storage key to true and pass that key as part of the configuration.

<img width="100%" src="https://github.com/eaboy/clean-console/raw/master/img/local_storage_key.png" alt="clean-console with local storage key" />

## install 

```
npm i clean-console
```

## usage

Default usage:

```js
import CleanConsole from 'clean-console';

CleanConsole.init() // Dafault behavior
```

Custom usage:

```js
import CleanConsole from 'clean-console';

CleanConsole.init(configOptions) // Object parameter for coustom options
```

You can also load directly clean-console.min.js in your page and call the init method in your code:

```js
cleanConsole.init(configOptions) // Object parameter for coustom options
```

## Configuration options

To customize the behavior you can pass a config object with the following properties. All properties are optional:

|  Name                      | Type      | Default      | Description     | Example   |
| -------------------------- |---------- | ------------ | --------------- | --------- |
| `excludeMethods` |   array   |              | Pass an array of strings with the console methods you want to keep seeing on the console | `excludeMethods: ['error', 'info', 'clear']` |
| `clearOnInit` |   boolean   |    false      | Set it to true if you want to clear console before cleanConsole runs, useful if there are logs printed before the library it's initialized | `clearOnInit: true` |
| `debugLocalStoregeKey` |   string   |          | Set the local storage key that you want to use to block the execution of the library and be able to see all logs for debugging | `debugLocalStoregeKey: 'my_awesome_site_key'` |
| `initialMessages` |   array   |          | Pass an array of objects with a property `message` which contains the message that you want to be displayed on the console and, optionally, a property `style` with the css style that you want to apply to the message. You can pass as many objects as messages you want to display | `initialMessages: { message: 'Thanks for visiting my awesome site!', style: 'color: red; font-size: 28px; font-weight: bold; font-family: "Comic Sans MS", cursive, sans-serif; line-height: 38px;' }` |
