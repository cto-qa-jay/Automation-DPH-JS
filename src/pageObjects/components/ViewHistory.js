/* eslint-disable no-return-await */
class ViewHistory {
  constructor(page) {
    this.page = page
    this.latestTrailTime = page.locator('.timeLine-latest .history-trailTime')
    this.latestTrailInfo = page.locator('.timeLine-latest .history-trailInfo')
  }

  async latestStatus() {
    const rawStatus = await this.latestTrailInfo.innerText()
    const status = rawStatus.split(' ')[1]

    return status
  }

  async latestTime() {
    const rawInfo = await this.latestTrailTime.innerText()
    const time = rawInfo.split(',')[0]

    return time
  }

  async latestDateAndTime() {
    const datentimeawait = await this.latestTrailTime.innerText()

    return datentimeawait
  }

  async latestTrailActor() {
    const rawTime = await this.latestTrailTime.innerText()
    const actor = rawTime.split(',')[1]

    return actor
  }
}

module.exports = { ViewHistory }
