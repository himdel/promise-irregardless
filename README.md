### Promise.irregardless

Based on a [reddit discussion](https://www.reddit.com/r/javascript/comments/70ucyb/finally_the_promiseprototypefinally_is_available/), this adds the following functions to the `Promise` prototype:

  * `Promise.prototype.irregardless`
  * `Promise.prototype.regardless`
  * `Promise.prototype.always`

All of these are just aliases for `Promise.prototype.finally`, and thus you may need a shim to provide that.

ES3 is not supported.

---

Preserving any remaining sanity of any potential users is outside of the scope of this project. You have been warned.
