function getStatus() {
    return new Promise((resolve, reject) => {
      const url = "http://localhost:3002/student";
      const config = { method: "GET" };
      fetch(url, config)
        .then((res) => res.json())
        .then((res) => resolve(res))
        .catch((error) => reject(error));
    });
  }
  
  function addStatus(newStudent) {
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

  function deleteStatus(id) {
   
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3002/student/${id}`
        fetch(url, {
            method:'DELETE'
        })
            .then((response) => resolve(response.json()))
            .catch((error) => reject(error));
    });
}
  
function updateStatus(data) {
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
export { getStatus, addStatus, deleteStatus, updateStatus };
  