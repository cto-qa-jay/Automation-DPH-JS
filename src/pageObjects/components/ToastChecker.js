/* eslint-disable no-return-await */
class ToastChecker {
  constructor(page) {
    this.page = page
    this.okToast = page.locator('.Toastify__toast--success')
    this.errorToast = page.locator('.Toastify__toast--error')
    this.warnToast = page.locator()
  }

  async posToast() {
    return await this.okToast
  }

  async errToast() {
    return await this.errorToast
  }

  async warToast() {
    return await this.warnToast
  }
}

module.exports = { ToastChecker }
