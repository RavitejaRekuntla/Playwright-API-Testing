import{test,expect} from "@playwright/test"

test("post call", async ({request})=>{

    const body = {
        "data": {
    "name": "Tata",
    "price": "28",
    "category": "Safari",
    "in_stock": true
  }
    }

   const res = await request.post("https://reqres.in/api/collections/products/records?project_id=9019", {
        headers: {
            'x-api-key': 'pro_992d3e8b2515c897d47b56819cdc2be273c27a58dfc31b4340cded56e2ca52b2'
        },
        data: body
    });
    expect(res.status()).toBe(201);
})