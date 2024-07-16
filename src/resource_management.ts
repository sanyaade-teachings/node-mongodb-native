/**
 * @public
 * @experimental
 */
export interface AsyncDisposable {
  /** @beta */
  [Symbol.asyncDispose]: () => Promise<void>;
}
