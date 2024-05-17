const axios = require("axios");

// Fetch specific user by email
exports.findUserByEmail = async (email) => {
    try {
        let result;

        let optionsGET = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                'Api-Token': `${process.env.ACTIVE_CAMPAIGN_API_MICHAEL_FERRARI}`
            },
        };

        await axios.get(`${process.env.URL_ACTIVE_CAMPAIGN_API_MICHAEL_FERRARI}/api/3/contacts?email=${email}`, {
            headers: optionsGET.headers
        }).then(response => {
            result = response.data.contacts[0]
        }).catch(err => console.error(err));

        return result;
    } catch (error) {
        console.log("Error in createContact", error)
    }
}

// Create contact
exports.createContact = async (email, firstName) => {
    try {
        let result;

        // Create user
        let body = {
            contact: {
                email,
                firstName
            }
        }

        let optionsPOST = {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                'Api-Token': `${process.env.ACTIVE_CAMPAIGN_API_MICHAEL_FERRARI}`
            },
            body: JSON.stringify(body)
        };

        await axios.post(`${process.env.URL_ACTIVE_CAMPAIGN_API_MICHAEL_FERRARI}/api/3/contacts`, body , {
            headers: optionsPOST.headers
        }).then(response => {
            result = response.data.contact
        }).catch(err => console.error(err));

        return result;
    } catch (error) {
        console.log("Error in createContact", error)
    }
}

// Update user tag
exports.addTagToContact = async (contactId, tagId) => {
    try {
        let result;

        let body = {
            "contactTag": {
                "contact": contactId,
                "tag": tagId
            }
        }

        let optionsPOST = {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                'Api-Token': `${process.env.ACTIVE_CAMPAIGN_API_MICHAEL_FERRARI}`
            },
            body: JSON.stringify(body)
        };

        await axios.post(`${process.env.URL_ACTIVE_CAMPAIGN_API_MICHAEL_FERRARI}/api/3/contactTags`, body, {
            headers: optionsPOST.headers
        }).then(response => {
            result = response.data
        }).catch(err => console.error(err));

        return result;
    } catch (error) {
        console.log("Error in updateUser", error)
    }
}

// Update user list subscription
exports.addContactToList = async (contactId, listId) => {
    try {
        let result;

        let body = {
            "contactList": {
                "list": listId,
                "contact": contactId,
                "status": 1
            }
        }

        let optionsPOST = {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                'Api-Token': `${process.env.ACTIVE_CAMPAIGN_API_MICHAEL_FERRARI}`
            },
            body: JSON.stringify(body)
        };

        await axios.post(`${process.env.URL_ACTIVE_CAMPAIGN_API_MICHAEL_FERRARI}/api/3/contactLists`, body, {
            headers: optionsPOST.headers
        }).then(response => {
            result = response.data.contactList
        }).catch(err => console.error(err));

        return result;
    } catch (error) {
        console.log("Error in addContactToList", error)
    }
}