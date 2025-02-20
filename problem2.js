/* Problem 2:
    
Using callbacks and the fs module's asynchronous functions, do the following:
    1. Read the given file lipsum.txt
    2. Convert the content to uppercase & write to a new file. Store the name of the new file in filenames.txt
    3. Read the new file and convert it to lower case. Then split the contents into sentences. Then write it to a new file. Store the name of the new file in filenames.txt
    4. Read the new files, sort the content, write it out to a new file. Store the name of the new file in filenames.txt
    5. Read the contents of filenames.txt and delete all the new files that are mentioned in that list simultaneously.
    
*/

const fs = require("fs");

function createFileLipsum(callback) {
  fs.writeFile("lipsum.txt", "I am Shradha Suman", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("File Created");
      setTimeout(function () {
        callback();
      }, 3000);
    }
  });
}

function readFilesLipsum(callback) {
  fs.readFile("lipsum.txt", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log("File Content:", data);
      setTimeout(function () {
        callback();
      }, 3000);
    }
  });
}

function convertToUpperCase(callback) {
  fs.readFile("lipsum.txt", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    let uppercaseData = data.toUpperCase();

    fs.writeFile("upper.txt", uppercaseData, "utf8", (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(
          "File has been converted to uppercase and saved as upper.txt"
        );
        setTimeout(function () {
          callback();
        }, 3000);
      }
    });
  });
}

function LowerCaseConversion(callback) {
  fs.readFile("upper.txt", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    let newLowercaseData = data.toLocaleLowerCase();
    let newSentence = newLowercaseData.split(".");
    fs.writeFile("lower.txt", newSentence.join(".\n"), "utf8", (err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("Data converted to lowercase and saved as lower.txt");
      setTimeout(function () {
        callback();
      }, 3000);
    });
  });
}

function deleteFiles(callback) {
  fs.writeFile("filenames.txt", "I am Shradha Suman", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("File Created");
    }
  });

  fs.readFile("filenames.txt", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    const filesToDelete = ["lipsum.txt", "upper.txt", "lower.txt","filenames.txt"];

    filesToDelete.forEach((file) => {
      fs.unlink(file, (err) => {
        if (err) {
          console.error(`Error deleting ${file}:`, err);
        } else {
          console.log(`${file} deleted successfully!`);
        }
      });
    });
  });
}

module.exports = {
  createFileLipsum,
  readFilesLipsum,
  convertToUpperCase,
  LowerCaseConversion,
  deleteFiles,
};
