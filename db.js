

 let Projects =  [
    {
      id: "1",
      title: "Project A",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      budget: 50000.0,
      manager_id:"1",
     collaborators: ["John Doe", "Jane Smith"]
    },
    {
      id: "2",
      title: "Project B",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      budget: 75000.0,
      collaborators: ["Bob Johnson", "Alice Brown", "Charlie Green"],
      manager_id:"2",
    }
  ];
 let  Clients= [
    {
      id: "1",
      name: "ABC Company",
      industry: "Technology",
      project_id:"1",
    },
    {
      id: "2",
      name: "XYZ Corporation",
      industry: "Finance",
      project_id:"2",
    }
  ];
let  Managers = [
    {
      id: "1",
      name: "Manager One",
      salary: 80000.0,
      client_id:"1"
    },
    {
      id: "2",
      name: "Manager Two",
      salary: 90000.0,
      client_id:"2"

    }
  ];


  export default {Managers,Projects,Clients}


