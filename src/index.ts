/* eslint-disable no-console */

interface CleanConsoleInterface extends Console {
  [key: string]: Function;
}
class CleanConsole {
  constructor() {
    this.overrideConsoleMethods();
  }

  private overrideConsoleMethods = () => {
    const consoleProperties: string[] = Object.keys(console);
    consoleProperties.forEach(property => {
      if (typeof (console as CleanConsoleInterface)[property] === 'function') {
        ((console as CleanConsoleInterface)[property] as Function) = () => {};
      }
    });
  };
}

export default new CleanConsole();
