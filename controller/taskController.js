const Task = require("./../models/taskModels.js");

//Create ---->
exports.createTask = async (req, res) => {
  const addTask = new Task({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    await addTask.save();
    res.redirect("/");
  } catch (err) {
    res.redirect("/");
    console.log(err);
  }
};

//Read ------>
exports.readTask = (req, res) => {
  Task.find({})
    .then((tasksContent) => {
      res.render("aman.ejs", { newTask: tasksContent });
    })
    .catch((err) => {
      console.log(err);
    });
};

//Update ------>
//Before Updating we are confirming id
exports.confirmId = (req, res) => {
  const id = req.params.id;
  Task.find({}).then((tasksContent) => {
    res.render("amanEdit.ejs", { newTask: tasksContent, editId: id });
  });
};

//Updating Task ----->
exports.updateTask = (req, res) => {
  const id = req.params.id;
  Task.findByIdAndUpdate(id, {
    title: req.body.title,
    description: req.body.description,
  })
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

//Deleting Task -------->
exports.deleteTask = (req, res) => {
  const id = req.params.id;
  Task.findByIdAndRemove(id)
    .then(() => res.redirect("/"))
    .catch((err) => {
      console.log(err);
    });
};
