import University from "./universitySchema.js";


const UniversityController = {

  addUniversity:  async(req, res) => {
  if (!req.file) {
    return res.status(400).send('No files were uploaded.');
  }


  const { name, address } = req.body;
 
  const newUniversity = new University({
    name,
    address,
    imageUrl: req.file.path 
  });

  const savedUniversity = await newUniversity.save();
 
  res.status(200).json(savedUniversity);
}
};


export default UniversityController;
 