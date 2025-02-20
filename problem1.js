/*
    Problem 1:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Create a directory of random JSON files
        2. Delete those files simultaneously 
*/

const fs = require("fs");
const path = require("path");

const folderName = "FOLDER";

function createDirectory(callback) {
  console.log("Creating Directory...");
  fs.mkdir(folderName, (err) => {
    if (err) {
      console.log("Error creating directory:", err);
    } else {
      console.log("Directory created.");
    }
  });
  setTimeout(function () {
    callback();
  }, 3000);
}

const randomNumber = Math.floor(Math.random() * 10) + 1;

function addFiles(callback) {
  console.log("Adding files...");
  for (let i = 0; i < randomNumber; i++) {
    const filePath = path.join(folderName, `file${i + 1}.json`);

    fs.writeFile(filePath, "{}", (err) => {
      if (err) {
        console.error("Error writing file:", err);
      } else {
        console.log(`File file${i + 1}.json created.`);
      }
    });
  }

  setTimeout(function () {
    callback();
  }, 3000);
}

function deleteFiles(callback) {
  console.log("Deleting files...");

  for (let i = 0; i < randomNumber; i++) {
    const filePath = path.join(folderName, `file${i + 1}.json`);
    fs.unlink(filePath, (err) => {
      if (err) {
        console.error(`Error deleting ${filePath}:`, err);
      } else {
        console.log(`Deleted file: file${i + 1}.json`);
      }
    });
  }

  setTimeout(function () {
    callback();
  }, 3000);
}

function deleteDirectory(callback) {
  console.log("Deleting Directory..");
  fs.rmdir(folderName, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Directory deleted");
    }
  });
}


module.exports={createDirectory,addFiles,deleteFiles,deleteDirectory}