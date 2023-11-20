export const typeDefs = `#graphql
   type Projects{
    id:ID!
    title:String!
    description: String!
    budget:Float!
    collaborators: [String!]
    managers: [Managers!]
   }

   type Clients{
    id:ID!
    name:String!
    industry:String!
    projects:[Projects!]

   }

   type Managers{
    id:ID!
    name:String!
    salary:Float!
    client:[Clients!]
   }

   type Query{
    Projects:[Projects!]
    Clients:[Clients!]
    Managers:[Managers!]
    Project(id:ID):Projects
    Client(id:ID):Clients
    Manager(id:ID):Managers
   }

`