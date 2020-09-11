const user = {
  name: 'Ann',
}

Object.prototype.keys = function () {
  const arr = []
  for (let prop of this) {
    arr.push(prop)
  }
  return arr
}
Object.prototype[Symbol.iterator] = function* () {
  console.log(this)
  for (let key in this) {
    yield key
  }
}

console.log(user.keys())
Array.prototype.map = null
const arr = [11, 12, 3, 4, 5]
Array.prototype.map = function (callback) {
  const arr = []
  for (let i = 0; i < this.length; i++) {
    arr.push(callback(this[i]))
  }
  return arr
}
console.log(arr.map((el) => el * 10)) // 10,20,30...

console.log(true + +!'10')
Promise.resolve()
  .then(() => 10)
  .then(undefined)
  .then(undefined)
  .then(undefined)
  .then((a) => {
    console.log(a)
  })
