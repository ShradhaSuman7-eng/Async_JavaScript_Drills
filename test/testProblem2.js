const {createFileLipsum,readFilesLipsum,convertToUpperCase,LowerCaseConversion,deleteFiles}=require("../problem2")


createFileLipsum(() => {
  readFilesLipsum(() => {
    convertToUpperCase(() => {
      LowerCaseConversion(() => {
        deleteFiles();
      });
    });
  });
});
