import{test,expect} from "@playwright/test"

test("Delete call", async ({request}) => {

   const response = await request.delete("https://reqres.in/api/collections/products/records/b09d1e70-a15e-4488-89c4-2e063fc98158?project_id=9019",
    {
        headers : {"x-api-key" : "pro_992d3e8b2515c897d47b56819cdc2be273c27a58dfc31b4340cded56e2ca52b2"}
    });
    expect(response.status()).toBe(404);
  //expect(response.ok()).toBeTruthy();
})