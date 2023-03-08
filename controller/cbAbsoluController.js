const utils = require("../helpers/utils.js");

exports.updateAbsoluGroup = async (req, res) => {
    try {
        let { email, absolu } = req.params;
        let oneUser;

        // Get all groups
        let allGroups = await utils.getAllGroups("cb-abonne-crypto-bulot-absolu")
        let groupId = allGroups.length > 0 ? allGroups[0].id : null
    
        if (groupId) {
            // Find user via email
            oneUser = await utils.getOneSubscriberByEmail(email);
            
            // User already exists in DB
            if (oneUser) {
                // Update absolu parameter
                await utils.updateSubscriberFields(oneUser.id, { absolu })

                // Add user to group
                await utils.addSubscriberToGroup(oneUser.id, groupId);

                res.status(201).send("USER UPDATED AND ADDED TO GROUP SUCCESSFULLY")
            } 

            // User does not exist in the DB yet
            else {
                // Add new user to DB and assign to group
                let newUser = await utils.addNewSubscriber({
                    email,
                    groups: [groupId],
                    fields: { absolu }
                })

                if (newUser) {
                    console.log("3");
                    res.status(201).send("USER CREATED AND ADDED TO GROUP SUCCESSFULLY")
                } else {
                    console.log("4")
                    res.status(400).send("ERROR DURING USER CREATION AND ADDITION TO GROUP");
                }
            }
        } else {
            res.status(404).send("GROUP NOT FOUND");
        }
    } catch (error) {
        res.status(400).send("Error in oneTimeOptIn", error);
    }
}