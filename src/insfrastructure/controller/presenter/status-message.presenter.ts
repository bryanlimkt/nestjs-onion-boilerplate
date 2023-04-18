export class StatusMessagePresenter<T = any> {
  constructor(public status: number, public message: string, public data?: T) {}
}
