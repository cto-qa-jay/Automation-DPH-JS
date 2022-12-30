class DateandTimeSetter {
  constructor(page) {
    this.page = page
    this.dateTimeField = page.locator('.form-control-date-time-picker .form-control')
    this.currentMonth = page.locator('.rdtDays .rdtSwitch')
    this.currentDay = page.locator('.rdtDay.rdtToday.rdtDisabled')
    this.nextDay = page.locator('.rdtDay.rdtActive')
    this.switchToMonth = page.locator('.rdtTime .rdtSwitch')
    this.switchToTime = page.locator('.rdtDays .rdtTimeToggle')
    this.hour = page.locator('.rdtCount >> nth=0')
    this.plusHour = page.locator('.rdtBtn >> nth=0')
    this.minusHour = page.locator('.rdtBtn >> nth=1')
    this.minutes = page.locator('.rdtCount >> nth=1')
    this.plusMinutes = page.locator('.rdtBtn >> nth=2')
    this.minusMinutes = page.locator('.rdtBtn >> nth=3')
    this.zone = page.locator('.rdtCount >> nth=2')
    this.changeZone = page.locator('.rdtBtn >> nth=4')
    this.futureDates = page.locator('tr [class="rdtDay"]')
  }

  async selectNextDay() {
    await this.dateTimeField.click()
    await this.futureDates.first().click()
    await this.page.locator('.content-body').first().click()
  }

  async getCurrentTime() {
    const rawData = await this.dateTimeField.inputValue()
    const timeOnly = rawData.split(' ')[1]

    return timeOnly
  }

  async setTime(minutes) {
    await this.dateTimeField.click()
    await this.switchToTime.click()
    const wholeTime = await this.getCurrentTime()
    const getMinutes = wholeTime.split(':')[1]
    const totalMinutes = parseInt(getMinutes, 10) + minutes

    if (totalMinutes > 60) {
      await this.plusHour.click()
      for (let i = minutes; i !== 0; i--) {
        await this.plusMinutes.click()
      }
    } else {
      for (let i = minutes; i !== 0; i--) {
        await this.plusMinutes.click()
      }
    }
  }
}

module.exports = { DateandTimeSetter }
