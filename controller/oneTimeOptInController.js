const utils = require("../helpers/utils.js");

exports.oneTimeOptIn = async (req, res) => {
    try {
        let { groupName, email, name } = req.params;
        let oneUser;
        let allUsersInGroup;
        let filteredUserInGroup;

        // Get all groups
        let allGroups = await utils.getAllGroups()
        let filteredGroupByName = allGroups.filter(f => f.name == groupName);
        let groupId = filteredGroupByName.length > 0 ? filteredGroupByName[0].id : null
    
        if (groupId) {
            // Find user via email
            oneUser = await utils.getOneSubscriberByEmail(email);

            // User already exists in DB
            if (oneUser) {
                // Find if user is already in group
                allUsersInGroup = await utils.getSubscribersBelongingToGroup(groupId);
                filteredUserInGroup = allUsersInGroup.filter(f => f.email == email);

                // Add user in the group if not yet in it
                if (filteredUserInGroup.length == 0) {
                    // Add user to group
                    await utils.addSubscriberToGroup(oneUser.id, groupId);
                    res.status(201).send("USER ADDED TO GROUP");
                } else {
                    res.status(201).send("USER ALREADY IN THE GROUP");
                }
            } 

            // User does not exist in the DB yet
            else {
                // Add new user to DB and assign to group
                let newUser = await utils.addNewSubscriber({
                    email,
                    name,
                    groups: [groupId]
                })

                if (newUser) {
                    res.status(201).send("USER CREATED AND ADDED TO GROUP");
                } else {
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