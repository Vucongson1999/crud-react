import { limit } from "../constant";

function getStudent() {
    return new Promise((resolve, reject) => {
      const url = "http://localhost:3002/student";
      const config = { method: "GET" };
      fetch(url, config)
        .then((res) => res.json())
        .then((res) => resolve(res))
        .catch((error) => reject(error));
    });
  }
  

  function getOne(data) {
    return new Promise((resolve, reject) => {
      const url = `http://localhost:3002/student/${data.id}`

      console.log(url, '12345678')
      
      const config = { method: "GET" };
      fetch(url, config)
        .then((res) => res.json())
        .then((res) => resolve(res))
        .catch((error) => reject(error));
  });
  
  }

  function addStudent(newStudent) {
    return new Promise((resolve, reject) => {
      const url = "http://localhost:3002/student";
  
      const config = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newStudent),
      };
  
      fetch(url, config)
        .then((res) => res.json())
        .then((res) => resolve(res))
        .catch((error) => reject(error));
    });
  }

  function deleteStudent(id) {
   
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3002/student/${id}`
        fetch(url, {
            method:'DELETE'
        })
            .then((response) => resolve(response.json()))
            .catch((error) => reject(error));
    });
}
  
function updateStudent(data) {
   
  return new Promise((resolve, reject) => {
      const url = `http://localhost:3002/student/${data.id}`
      
     
      fetch(url, {
          method:'PUT',
          headers: {"Content-Type":"application/json"},
          body: JSON.stringify(data)


      })
          .then((response) => resolve(response.json()))
          .catch((error) => reject(error));
  });
}
  
function searchStudent(data) {
  return new Promise((resolve, reject) => {

      const url = `http://localhost:3002/student/search?activePage=${data.activePage}&limit=${limit}&textSearch=${data.textSearch}`
      // console.log(data,"fetch");
      fetch(url, {
          method:'GET'
      })
          .then((response) => resolve(response.json()))
          .catch((error) => reject(error));
  });
}

  function getPaginateStudent(activePage) {
    return new Promise((resolve, reject) => {
      const url = `http://localhost:3002/student/pagination?activePage=${activePage}&limit=${limit}`;
        const config = {
            method: 'GET'
        }
        fetch(url, config)
            .then(res => res.json())
            .then(res => resolve(res))
            .catch(error => reject(error))
    })

  }
  export { getStudent, getOne, addStudent, deleteStudent, updateStudent, searchStudent , getPaginateStudent};
  