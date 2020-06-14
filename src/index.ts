/* eslint-disable no-console */

interface CleanConsoleInterface extends Console {
  [key: string]: Function;
}
export const CleanConsole = {

  init: () => {
    console.clear();
    overrideConsoleMethods();
  }
};

function overrideConsoleMethods() {
  const consoleProperties: string[] = Object.keys(console);
  consoleProperties.forEach((property: string) => {
    if (typeof (console as CleanConsoleInterface)[property] === 'function') {
      ((console as CleanConsoleInterface)[property] as Function) = () => { null; };
    }
  });
}

export const init = CleanConsole.init;