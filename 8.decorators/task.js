function cachingDecoratorNew(func) {
  
  let cache = []
  function wrapper(...args) {

    let key = args.toString();
    console.log(cache);
    if (key in cache) {
      return "Из кэша: " + cache[key]
    } else {
      let result = func(...args);
      cache[key] = result;
      cache.push(func(...args));
      if (cache.length > 5) {
        cache.splice(0, 1);
      }
      console.log(cache);
      return "Вычисляем: " + result;
    }

  }

  return wrapper
}


function debounceDecoratorNew(func) {
  // Ваш код
}

function debounceDecorator2(func) {
  // Ваш код
}
