const { ACCESS_TOKEN, SITE_ID } = process.env;
const NetlifyAPI = require('netlify');

exports.handler = async function(event, context) {
    // get latest testId
    const client = new NetlifyAPI(ACCESS_TOKEN);

    //fetch forms
    try {
        const forms = await client.listSiteForms({
            siteId: SITE_ID
        })
        return {
            statusCode: '200',
            body: JSON.stringify(forms);
        }
    } catch (error) {
        return { statusCode: 422, body: "RUH ROH"};
    }
    
    // //serve redirect
    // return {
    //     statusCode: 302,
    //     body: JSON
    // }
}