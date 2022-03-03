class Dep {
  constructor() {
      this.subscriber = new Set()
  }
  // 收集
  depend() {
      if (activeWatcher) {
          this.subscriber.add(activeWatcher)
      }
  }
  // 通知更新
  notify() {
      this.subscriber.forEach((sub) => sub())
  }
}

function isObject(obj) {
  return (
      typeof obj === 'object'
      && !Array.isArray(obj)
      && obj !== null
      && obj !== undefined
  )
}

function observe(obj) {
  if (!isObject(obj)) return
  defineReactivity(obj)
}

function defineReactivity(obj) {
  Object.keys(obj).forEach((key) => {
      let activeValue = obj[key]
      const dep = new Dep()
      Object.defineProperty(obj, key, {
          get() {
              // 数据被访问的时候收集
              dep.depend()
              return activeValue
          },
          set(newValue) {
              // 数据被改变的时候通知更新
              activeValue = newValue
              dep.notify()
          }
      })
  })
}

let activeWatcher = null
function autorun(update) {
  function watcher() {
      activeWatcher = watcher
      update()
      activeWatcher = null
  }
  watcher()
}


const states = {
  count: 0
}

observe(states)

autorun(() => {
  console.log("count:" + states.count)
})

// log 0
states.count++
// log 1
