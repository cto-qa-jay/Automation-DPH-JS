class MyPartnersPage {
  constructor(page) {
    this.page = page
    this.autoAcceptToggle = page.locator('.react-switch-handle')
    this.fleetLogo = page.locator('.fleet-logo')
    this.resendButton = page.locator('text=Resend Invite')
    this.inviteButton = page.locator('text=Invite')
    this.blockButton = page.locator('text=Block')
    this.preferredButton = page.locator('text=Preferred')
    this.unblockButton = page.locator('text=Unblock')
  }

  async toggleOnAutoAccept() {
    if (!(await this.autoAcceptToggle.isChecked())) {
      await this.autoAcceptToggle.hover()
      await this.autoAcceptToggle.click()
    }
  }

  async toggleOffAutoAccept() {
    if (await this.autoAcceptToggle.isChecked()) {
      await this.autoAcceptToggle.hover()
      await this.autoAcceptToggle.click()
    }
  }
}

module.exports = { MyPartnersPage }
