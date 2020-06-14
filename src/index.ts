/* eslint-disable no-console */

interface CleanConsoleInterface extends Console {
  [key: string]: Function;
}
type ConsoleMethods =
  'debug' |
  'error' |
  'info' |
  'log' |
  'warn' |
  'dir' |
  'dirxml' |
  'table' |
  'trace' |
  'group' |
  'groupCollapsed' |
  'groupEnd' |
  'clear' |
  'count' |
  'countReset' |
  'assert' |
  'profile' |
  'profileEnd' |
  'time' |
  'timeLog' |
  'timeEnd' |
  'timeStamp' |
  'context' |
  'memory';
export interface CleanConsoleConfiguration {
  excludeMethods?: ConsoleMethods[],
  clearOnInit?: boolean
}

export const CleanConsole = {

  init: (config: CleanConsoleConfiguration) => {
    if (config.clearOnInit) {
      console.clear();
    }
    overrideConsoleMethods(config.excludeMethods);
  }
};

function overrideConsoleMethods(methodsToEclude: ConsoleMethods[] = []) {
  const consoleProperties: ConsoleMethods[] = Object.keys(console) as ConsoleMethods[];
  consoleProperties.forEach((property: ConsoleMethods) => {
    const isTypeFunction: boolean = typeof (console as CleanConsoleInterface)[property] === 'function';
    const isNotExcluded: boolean = !methodsToEclude.includes(property);
    if (isTypeFunction && isNotExcluded) {
      ((console as CleanConsoleInterface)[property] as Function) = () => { null; };
    }
  });
}

export const init = CleanConsole.init;