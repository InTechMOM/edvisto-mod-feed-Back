import Assignment from "../../../models/assignment.js";

//Servidor
export const serverRead = (response) => { 
  response.send("Status:OK")
}


//Listar
const projectStudent = async (request, response, next) => { 
  const { course, emailStudents, descriptión} = request.query;

  try {
     
    const filters = { 
      ...course && { course },
      ...emailStudents && { emailStudents },
      ...descriptión && { descriptión }
    }; 

    const arrayProjects = await Assignment.find(filters); 

    if (arrayProjects?.length === 0) {
      return response.status(404).json({ 
        message:"Projects Not Found"});
    }
    return response.status(200).json({ 
      message:"Projects found successfully",
      "Projects":arrayProjects});
  } catch (error) { 
    next (error);
  }
}

export default projectStudent;