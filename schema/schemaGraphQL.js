const { buildSchema } = require("graphql");

exports.schemaGraphQL = buildSchema(`
type Query {
  
}

type Video {
    _id: ID!
    nombre: String!
    url: String!
    playlist: Playlist!
  }

  type User {
    _id: ID!
    nombre: String!
    apellidos: String!
    email: String!
    pin: String!
    fechanacimiento: String!
    role: String!
    phone: String!
    estado: String!
    validacion: String!
  }

  type Profile {
    _id: ID!
    nombre: String!
    avatar: String
    edad: Int
    userId: User!
  }

  type Playlist {
    _id: ID!
    nombre: String!
    user: User!
    profiles: [Profile]
  }

`);

