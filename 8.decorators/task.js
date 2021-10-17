function cachingDecoratorNew(func) {
  
  let cache = []

  function wrapper(...args) {
    // let cache = []
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


function debounceDecoratorNew(func, ms) {
  
  let timeout 

  let flag = false;

  function wrapper(...args) {

    if (!flag) {
      func(...args)
      flag = true;
    } else {
      clearTimeout(timeout);
      timeout = setTimeout(() => { 
        func(...args); 
        flag = false
      }, ms);
    }
  }
  return wrapper
}

function debounceDecorator2(func) {
    
  

  function wrapper(...args) {

    return func.apply(this, args)
  }
  return wrapper
}
