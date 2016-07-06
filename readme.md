# sync-fn-flow

module which calls a queue of synchronous functions with the return value of the previous

### usage

there is no default value

```
syncFnFlow(
  _=> 2
, doubleIt
, doubleIt
, doubleIt
, doubleIt
, doubleIt
, doubleIt
, doubleIt
, doubleIt
, doubleIt
, doubleIt
, doubleIt
)
// -> 4096
```



### license

MIT
