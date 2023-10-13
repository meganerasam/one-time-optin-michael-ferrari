// Fetch specific user by email
exports.findUserByEmail = async (email) => {
    try {
        let contact;
        let optionsGET = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                'Api-Token': `${process.env.ACTIVE_CAMPAIGN_API}`
            }
        };

        // Use the previous ID received during user creation
        await fetch(`${process.env.URL_ACTIVE_CAMPAIGN_API}/api/3/contacts?email=${email}`, optionsGET)
            .then(response => response.json())
            .then(response => {
                contact = response.contacts[0];
            })
            .catch(err => console.error(err));

        return contact;
    } catch (error) {
        console.log("Error in findUserById", error)
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
                'Api-Token': `${process.env.ACTIVE_CAMPAIGN_API}`
            },
            body: JSON.stringify(body)
        };

        await fetch(`${process.env.URL_ACTIVE_CAMPAIGN_API}/api/3/contacts`, optionsPOST)
            .then(response => response.json())
            .then(response => {
                result = response.contact
            })
            .catch(err => console.error(err));

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
                'Api-Token': `${process.env.ACTIVE_CAMPAIGN_API}`
            },
            body: JSON.stringify(body)
        };

        await fetch(`${process.env.URL_ACTIVE_CAMPAIGN_API}/api/3/contactTags`, optionsPOST)
            .then(response => response.json())
            .then(response => {
                result = response
            })
            .catch(err => console.error(err));

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
                'Api-Token': `${process.env.ACTIVE_CAMPAIGN_API}`
            },
            body: JSON.stringify(body)
        };

        await fetch(`${process.env.URL_ACTIVE_CAMPAIGN_API}/api/3/contactLists`, optionsPOST)
            .then(response => response.json())
            .then(response => {
                result = response.contactList
            })
            .catch(err => console.error(err));

        return result;
    } catch (error) {
        console.log("Error in addContactToList", error)
    }
}