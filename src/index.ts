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
interface InitialMessage {
  message: string,
  style?: string
}
export interface CleanConsoleConfiguration {
  excludeMethods?: ConsoleMethods[],
  clearOnInit?: boolean,
  debugLocalStoregeKey?: string,
  initialMessages?: InitialMessage[]
}

export const CleanConsole = {

  init: (config: CleanConsoleConfiguration = {}) => {
    if (config.debugLocalStoregeKey && readLocalStorageKey(config.debugLocalStoregeKey)) {
      return;
    }
    if (config.clearOnInit) {
      setTimeout(console.clear.bind(console));
    }
    if (config.initialMessages) {
      config.initialMessages?.forEach((initialMessage: InitialMessage) => {
        if (initialMessage.style) {
          const message: string = `%c${initialMessage.message}`;
          setTimeout(console.log.bind(console, message, initialMessage.style));
        } else {
          setTimeout(console.log.bind(console, initialMessage.message));
        }

      });
    }
    setTimeout(() => {
      overrideConsoleMethods(config.excludeMethods);
    });
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

function readLocalStorageKey(key: string): boolean {
  return localStorage.getItem(key) === 'true';
}

export const init = CleanConsole.init;