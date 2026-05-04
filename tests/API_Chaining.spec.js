import{test,expect} from '@playwright/test'

test("post call", async ({request}) => {

    const body = {
  "data": {
    "name": "Tata",
    "price": "28",
    "category": "Safari",
    "in_stock": true
  }
};

    const response =await request.post("https://reqres.in/api/collections/products/records?project_id=9019", {
        headers : { 
            'x-api-key' : 'pro_992d3e8b2515c897d47b56819cdc2be273c27a58dfc31b4340cded56e2ca52b2'

        },
        data: body
    });
    expect(response.status()).toBe(201);



    const getResponse = await request.get("https://reqres.in/api/collections?project_id=9019",{
        headers : {
            'x-api-key' : 'pro_992d3e8b2515c897d47b56819cdc2be273c27a58dfc31b4340cded56e2ca52b2'
        }
    });
    expect(getResponse.status()).toBe(200);



 const Putbody = {
  "data": {
    "name": "Teja",
    "price": "25",
    "category": "Safari",
    "in_stock": true
  }
}  
    const res = await request.put("https://reqres.in/api/collections/products/records/b09d1e70-a15e-4488-89c4-2e063fc98158?project_id=9019",
        {
            headers : {"x-api-key" : "pro_992d3e8b2515c897d47b56819cdc2be273c27a58dfc31b4340cded56e2ca52b2"
        },
        data:Putbody   
    }
    );
    expect(res.status()).toBe(404)




    const deleteResponse = await request.delete("https://reqres.in/api/collections/products/records/bdaca6e5-6924-429d-b26e-d4a1f3fe78cb?project_id=9019", {
        headers : {
            'x-api-key' : 'pro_992d3e8b2515c897d47b56819cdc2be273c27a58dfc31b4340cded56e2ca52b2'
        }
    });
    expect(deleteResponse.status()).toBe(404);

});