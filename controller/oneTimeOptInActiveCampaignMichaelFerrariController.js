const utils = require("../helpers/activeCampaignMichaelFerrariUtils.js");

// Find contact by email
//      If contact exists, update his/her tag and group
//      Else, create contact then update his/her tag and group

exports.oneTimeOptInActiveCamapaignMichael = async (req, res) => {
  try {
    // Variables
    let tagId = 152;
    let listId = 29;
    let { name, email } = req.params;

    let contact = await utils.findUserByEmail(email);
    let tagAdded = false;
    let listAdded = false;
    let contactId;

    // If contact does not exist, create it first
    // Then add tag and add subscription list to it
    // Else, if the contact already exists, just add tag and subscription list to it

    if (!contact) {
      console.log("New contact");
      // Create contact
      let newContact = await utils.createContact(email, name);

      // Attribute contactId that just has been created so it can be used all along
      contactId = newContact.id;
    } else {
      console.log("Existing contact");
      // Just attribute contactId so it can be used all along
      contactId = contact.id;
    }

    // Add tag
    let addTag = await utils.addTagToContact(contactId, tagId);
    if (addTag.contactTag.tag == tagId) {
      console.log("Tag added successfully");
      tagAdded = true;
    }

    // Add to subscription list
    let addListSubscription = await utils.addContactToList(contactId, listId);
    if (addListSubscription.list == listId) {
      console.log("Contact added to list successfully");
      listAdded = true;
    }

    if (tagAdded && listAdded) {
      console.log("Contact added to list and tag successfully");
      res
        .writeHead(307, {
          Location: `https://go.michael-ferrari-formation.com/rejoindre-le-groupe-challenge-michael`,
        })
        .end();
    } else if (tagAdded && !listAdded) {
      res
        .status(400)
        .send("Contact NOT ADDED to list BUT tag added successfully");
    } else if (!tagAdded && listAdded) {
      res
        .status(400)
        .send("Contact added to list BUT tag NOT ADDED successfully");
    } else {
      res.status(400).send("List NOT ADDED and tag NOT ADDED");
    }
  } catch (error) {
    console.log("Error in oneTimeOptIn", error);
  }
};

// Same link but without name
exports.oneTimeOptInActiveCamapaignMichaelNoName = async (req, res) => {
  try {
    // Variables
    let tagId = 152;
    let listId = 29;
    let { email } = req.params;
    let name = req.query.name;

    let contact = await utils.findUserByEmail(email);
    let tagAdded = false;
    let listAdded = false;
    let contactId;

    // If contact does not exist, create it first
    // Then add tag and add subscription list to it
    // Else, if the contact already exists, just add tag and subscription list to it

    if (!contact) {
      console.log("New contact");
      // Create contact
      let newContact = await utils.createContact(email, name);

      // Attribute contactId that just has been created so it can be used all along
      contactId = newContact.id;
    } else {
      console.log("Existing contact");
      // Just attribute contactId so it can be used all along
      contactId = contact.id;
    }

    // Add tag
    let addTag = await utils.addTagToContact(contactId, tagId);
    if (addTag.contactTag.tag == tagId) {
      console.log("Tag added successfully");
      tagAdded = true;
    }

    // Add to subscription list
    let addListSubscription = await utils.addContactToList(contactId, listId);
    if (addListSubscription.list == listId) {
      console.log("Contact added to list successfully");
      listAdded = true;
    }

    if (tagAdded && listAdded) {
      console.log("Contact added to list and tag successfully");
      res
        .writeHead(307, {
          Location: `https://go.michael-ferrari-formation.com/rejoindre-le-groupe-challenge-michael`,
        })
        .end();
    } else if (tagAdded && !listAdded) {
      res
        .status(400)
        .send("Contact NOT ADDED to list BUT tag added successfully");
    } else if (!tagAdded && listAdded) {
      res
        .status(400)
        .send("Contact added to list BUT tag NOT ADDED successfully");
    } else {
      res.status(400).send("List NOT ADDED and tag NOT ADDED");
    }
  } catch (error) {
    console.log("Error in oneTimeOptIn", error);
  }
};