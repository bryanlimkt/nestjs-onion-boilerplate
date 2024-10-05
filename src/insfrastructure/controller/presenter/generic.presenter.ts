
export abstract class GenericPresenter<T> {
  constructor(item: T) {
    Object.assign(this, item);
  }
}
