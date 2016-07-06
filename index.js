module.exports = function () {
  return Array.prototype.reduce.call(
    Array.prototype.slice.call(arguments, 1)
  , (currentVal, nextFn) => nextFn(currentVal)
  , arguments[0]()
  )
}
