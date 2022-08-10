const { Account } = require('@tago-io/sdk');


let account = new Account({token:"a394b4c9-7ea7-4346-bbe1-ddb35f9bc948"})


 account.devices.list().then(resp => {
    console.log(resp)
}) 