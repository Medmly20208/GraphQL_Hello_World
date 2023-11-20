import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// TypeDefs
import { typeDefs } from './schema.js';

// dbs
import db from "./db.js"

//server setup

const resolvers = {
    Query:{
        Projects(){
            return db.Projects
        },
        Clients(){
            return db.Clients
        },
        Managers(){
            return db.Managers
        },
        Project(parent,args){
            return db.Projects.find((Project)=>args.id==Project.id)
        },
        Client(parent,args){
            return db.Clients.find((Client)=>args.id==Client.id)
        },
        Manager(parent,args){
            return db.Managers.find((Manager)=>args.id==Manager.id)
        }
    },
    Projects:{
        managers(parent){
            return db.Managers.filter((Manager)=>parent.id==Manager.id)
        }
    },
    Managers:{
        client(parent){
            return db.Clients.filter((Client)=>parent.id==Client.id)
        }
    },

    Mutation:{
        deleteProject(_,args){
           db.Projects = db.Projects.filter((Project)=>Project.id!=args.id)
           return db.Projects
        },
        addProject(_,args){
            let projects=[
                ...db.Projects,
                {...args.project}
             
              ]
            db.Projects = projects
            return db.Projects
        },
      
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})


const url  = await startStandaloneServer(server,{
    listen:{port:4000}
})


console.log("server is a up at port 4000" )