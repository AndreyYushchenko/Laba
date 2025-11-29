const pipe = (...fns) => {
  for (let i = 0; i < fns.length; i++) {
    if (typeof fns[i] !== 'function') {
      throw new TypeError(`Argument at index ${i} is not a function`);
    }
  }
  
  return x => {
    let result = x;
    for (let i = 0; i < fns.length; i++) {
      result = fns[i](result);
    }
    return result;
  };
};

const pipeWithErrorHandling = (...fns) => {
  for (let i = 0; i < fns.length; i++) {
    if (typeof fns[i] !== 'function') {
      throw new TypeError(`Argument at index ${i} is not a function`);
    }
  }
  
  const errorHandlers = [];
  
  const composedFn = x => {
    let result = x;
    for (let i = 0; i < fns.length; i++) {
      try {
        result = fns[i](result);
      } catch (error) {
        for (let j = 0; j < errorHandlers.length; j++) {
          errorHandlers[j](error);
        }
        return undefined;
      }
    }
    return result;
  };
  
  composedFn.on = (event, handler) => {
    if (event === 'error' && typeof handler === 'function') {
      errorHandlers.push(handler);
    }
    return composedFn;
  };
  
  return composedFn;
};

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;
const throwError = () => { throw new Error('Something went wrong!'); };

const f1 = pipe(inc, twice, cube);
console.log('f1(5) =', f1(5));

const f2 = pipe(inc, inc);
console.log('f2(7) =', f2(7));

try {
  const f3 = pipe(inc, 7, cube);
} catch (e) {
  console.log('Помилка:', e.message);
}

const f4 = pipeWithErrorHandling(inc, twice, cube);
console.log('f4(5) =', f4(5));

const f5 = pipeWithErrorHandling(inc, throwError, cube);
f5.on('error', e => console.log('Перехоплена помилка:', e.message));
console.log('f5(5) =', f5(5));

const f6 = pipeWithErrorHandling(twice, throwError);
f6.on('error', e => console.log('Обробник 1:', e.message));
f6.on('error', () => console.log('Обробник 2: Логування завершено'));
console.log('f6(10) =', f6(10));
