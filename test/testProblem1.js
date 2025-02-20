const { createDirectory, addingFiles, deletingFiles, deleteDirectory } = require("../problem1.js");


createDirectory(() => {
  addingFiles(() => {
    deletingFiles(() => {
      deleteDirectory();
    });
  });
});
