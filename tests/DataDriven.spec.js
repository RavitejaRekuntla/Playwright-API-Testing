import {test, expect} from '@playwright/test';
import testData from '../testData/PostData.json';

test("Data driven test", async ({request}) => {

    const response =  await request.post("https://reqres.in/api/collections/products/records?project_id=9019", { 
        headers : {
            'x-api-key': 'pro_992d3e8b2515c897d47b56819cdc2be273c27a58dfc31b4340cded56e2ca52b2'
        },
        data : testData
        });
        expect(response.status()).toBe(201);
        console.log(".................................");
    }
)
