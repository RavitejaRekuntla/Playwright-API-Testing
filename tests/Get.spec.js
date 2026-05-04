import {test,expect} from "@playwright/test"

test("get request",async({request})=>{

    const res = await request.get("https://reqres.in/api/collections?project_id=9019",{
    headers : {
        'x-api-key' : 'pro_992d3e8b2515c897d47b56819cdc2be273c27a58dfc31b4340cded56e2ca52b2'
    }
}
 );
    expect(res.status()).toBe(200);
    const repBody = await res.json();
    //console.log(repBody);

    //console.log(res.headers());

    //console.log(res.status());

    expect(repBody.data[0].user_id).toBe(103096)

});
