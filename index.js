Object.assign(Promise.prototype, {
  irregardless: Promise.prototype.finally,
  regardless: Promise.prototype.finally,
  always: Promise.prototype.finally,
}, /* don't overwrite */ Promise.prototype);
