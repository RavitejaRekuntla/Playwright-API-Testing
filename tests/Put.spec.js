import{test, expect} from "@playwright/test"

test("Put call", async ({request}) => {

    const body = {
  
    "data": {
        "name": "tamato",
        "price": 20.99,
        "category": "vegitable",
        "in_stock": true
    }
}
    
    const res = await request.put("https://reqres.in/api/collections/products/records/b09d1e70-a15e-4488-89c4-2e063fc98158?project_id=9019",
        {
            headers : {"x-api-key" : "pro_992d3e8b2515c897d47b56819cdc2be273c27a58dfc31b4340cded56e2ca52b2"
        },
        data:body   
    }
    );
    expect(res.status()).toBe(200)
    //console.log(await res.json());

    const resBody = await res.json();

    const id = resBody.data.id;

    console.log(id);
    
})