type UnflattenOpts = {
  separator?: string;
  objectMode?: boolean;
}

export = unflatten;

/**
 * @id unflatten
 * @function unflatten
 * Opposite of `flatten-obj`. Unflattens an object with delimited keys
 * @param  {object} obj - Object that needs to be unflattened
 * @param  {object|string|boolean} [opts] - Optional.
 * - Provide a string as a shortcut for `{ separator: opts }`
 * - Provide a boolean as a shorcut for `{ objectMode: opts }`
 * - Provide an object to set both options `{ separator: '/', objectMode: true }`
 * - Available options:
 *   + **separator** (*string*) - defaults to `'.'`
 *   + **objectMode** (*boolean*) - defaults to `false`
 * @return {object} obj - Nested Javascript object
 */
declare function unflatten(obj: object, opts?: string | boolean | UnflattenOpts): {}
