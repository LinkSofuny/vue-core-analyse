let activeUpdate

function isObject(obj) {
  return (
    typeof obj === 'object'
    && !Array.isArray(obj)
    && obj !== null
    && obj !== undefined
  )
}

class Dep {
  constructor() {
    this.subscriber = new Set()
  }

  depend() {
    if (activeUpdate) {
      this.subscriber.add(activeUpdate)
    }
  }

  notify () {
    this.subscriber.forEach(sub => {
      sub()
    })
  }
}

function autorun(update) {
  function warpperUpdate() {
    activeUpdate = warpperUpdate
    update()
    activeUpdate = null
  }
  warpperUpdate()
}

function defineReactivity (obj) {
  Object.keys(obj).forEach((key) => {
    let activeValue = obj[key]
    const dep = new Dep()
    Object.defineProperty(obj, key, {
      get() {
        dep.depend()
        return activeValue
      },
      set(newValue) {
        const isChanged = activeUpdate !== newValue
        if (isChanged) {
          activeValue = newValue
          dep.notify()
        }
      }
    })
  })
}



function observe(obj) {
  if (!isObject(obj)) return
  defineReactivity(obj)
}

const states = {
  count: 0
}

observe(states)

autorun(() => {
  console.log(states.count)
})

// log 0
states.count++
// log 1
