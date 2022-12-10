class APiUtils {
  constructor(apiContext) {
    this.apiContext = apiContext;
  }

  async getToken() {
    const loginResponse = await this.apiContext.post(
      'https://us-central1-fleet-dev-ph.cloudfunctions.net/login',
      {
        data: this.loginPayLoad,
      }
    ); // 200,201,
    const loginResponseJson = await loginResponse.json();
    const { token } = loginResponseJson;
    return token;
  }

  async createOrder(orderPayLoad) {
    const response = {};
    response.token = await this.getToken();
    const orderResponse = await this.apiContext.post(
      'https://rahulshettyacademy.com/api/ecom/order/create-order',
      {
        data: orderPayLoad,
        headers: {
          Authorization: response.token,
          'Content-Type': 'application/json',
        },
      }
    );
    const orderResponseJson = await orderResponse.json();
    const orderId = orderResponseJson.orders[0];
    response.orderId = orderId;

    return response;
  }
}
module.exports = { APiUtils };
