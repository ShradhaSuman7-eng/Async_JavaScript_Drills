const { createDirectory, addFiles, deleteFiles, deleteDirectory } = require("../problem1.js");


createDirectory(() => {
  addFiles(() => {
    deleteFiles(() => {
      deleteDirectory();
    });
  });
});
