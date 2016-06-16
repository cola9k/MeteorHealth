Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    tasks: function () {
      return Tasks.find({});
    }
  });

  Template.body.events({
    "submit .new-task": function (event) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      var text = event.target.text.value;

      // Insert a task into the collection
      Tasks.insert({
        text: text,
        createdAt: new Date(), // current time
        ower: Meteor.userId(),
        username: Meteor.user().username
      });

      // Clear form
      event.target.text.value = "";
    },
    "change .hide-completed input": function (event) {
      Session.set("hideCompleted", event.target.checked);
    }
  });

  Template.body.helpers({
    tasks: function() {
      if (Session.get("hideCompleted")) {
        return Tasks.find({checked: {$ne: true}}, {sort: {createAt: -1}});
      } else {
        return Tasks.find({},{sort: {createAT: -1}});
      }
    },
    hideCompleted: function () {
      return Session.get("highCompleted");
    },
    incompleteCount: function() {
      return Tasks.find({checked: {$ne: true}}).count();
    }
  });

  Template.task.events({
    "click .toggle-checked": function () {
      // Set the checked property to the opposite of its current value
      Tasks.update(this._id, {
        $set: {checked: ! this.checked}
      });
    },
    "click .delete": function () {
      Tasks.remove(this._id);
    }
  });

  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });
}
