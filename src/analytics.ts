let logged;
let sendAnalytics = (data: string) => {
    logged = true
    return console.log(data)
}

sendAnalytics('Analytic Data')