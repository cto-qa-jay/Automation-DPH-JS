// const {request, test,expect} =require('@playwright/test');
// const datasetpick = require('../utils/apiDATASETpickup.json');
// const {dphApiUtils} = require('../utils/DphApiUtils');
// const logincred = {email: "business@teamdeliveries.ph", password: "teamdph2020"};

// test.beforeAll(async()=>
// {
//     const apiContext = request.newContext();
//     const dphApiUtils = new DphApiUtils(apiContext,)
// })

// let i = 1;
// for(const data of datasetpick){
//     i++;
//     test(`API TEST ${i}`, async({request})=>{

//         const createPost = await request.post('https://us-central1-fleet-dev-ph.cloudfunctions.net/v3/createPost', {
//             headers:{
//                 "Auth-Token": "45e08df814da9b287bb5e89c2e6695614f2afe38b27f2d9efedabc264abdc4a711012c2a58787aff468dbc094c017640a8d81cd29112e77a1a6ec1ebc9caed05",
//                 "Content-Type": "application/json",
//             },
//             params:{
//                 "apiKey": "a468120b-a0da-4c67-9d70-834a749122c6",
//                 "partnerId": "SANDBOX_DX",
//             },
//             data:{
//                 "businessStoreId": "",
//                 "refNo": "0211113-car-alias",
//                 "isDraft": false,
//                 "isAutoReattempt": false,
//                 "isPSGC": false,
//                 "pickupDetails": {
//                     "senderName": `API SENDER - Jay ${i}`,
//                     "contactNumber": "09154857126",
//                     "emailAddress": "qa@test.com",
//                     "pickupDateTime": "2022-11-02T08:00",
//                     "pickupAddress": "test pickup address",
//                     "pickupCity": data.pickupCity,
//                     "province": data.province,
//                     "barangay": data.barangay,
//                     "postalCode": "4400",
//                     "lat": 14.354433173759396,
//                     "long": 121.04517955727842,
//                     "remarks": "For testing purposes only"
//                 },
//                 "deliveryDetails": {
//                     "recipientName": "API RECIPIENT - QA ${i}",
//                     "contactNumber": "9052909245",
//                     "emailAddress": "sampletest@email.com",
//                     "deliveryDateTime": "2022-11-03T23:59",
//                     "deliveryAddress": "test address",
//                     "deliveryCity": "MALABON CITY",
//                     "province": "METRO MANILA",
//                     "barangay": "LONGOS",
//                     "postalCode": "1234",
//                     "declaredValue": 1499.00,
//                     "productSize": "L",
//                     "vehicleType": "test",
//                     "width": 1.000,
//                     "height": 1.000,
//                     "length": 1.000,
//                     "weight": 1.000,
//                     "depth": 1.000,
//                     "codAmount": 173781,
//                     "lat": 14.170504455618433,
//                     "long": 121.24414710449604,
//                     "tags": [],
//                     "itemDescription": "163131846;8027481987;;;",
//             "metaFields": {
//                         "pickupTimeSlot": "09:00-12:00",
//                         "deliveryTimeSlot": "09:00-12:00",
//                         "costCenter": "Required field.",
//                             "pickup_postal": "Required field.",
//                             "delivery_postal": "Required field.",
//                             "serviceType": "SEDAN"

//                         },
//                     "remarks": "Please handle with care. Ask the guards for direction.",
//                     "quantity": 525,
//                     "items": [{
//                         "name": "HPW2C HT B535-932A Combat Modem KIT",
//                         "quantity": 1.000 ,
//                         "unitPrice":1499.00 ,
//                         "declaredValue":100.23 ,
//                         "dimensions":{
//                            "length":1.000,
//                            "width":1.000,
//                            "height":1.000,
//                            "breadth":1.000,
//                            "weight":1.000
//                         }
//                         },
//                         {
//                         "name": "GHP128K LTE_5G POSTPAID_ECO SIM",
//                         "quantity": 1,
//                         "unitPrice":150,
//                         "declaredValue":10.14,
//                         "dimensions":{
//                            "length":0,
//                            "width":0,
//                            "height":0,
//                            "breadth":0,
//                            "weight":0.10
//                         }
//                         }
//                     ]

//                 }
//             },
//         })
//         console.log(await createPost.status());
//         console.log(data.pickupCity, data.province, data.barangay);
//         await expect(await createPost.ok()).toBeTruthy();
//     })
// }
