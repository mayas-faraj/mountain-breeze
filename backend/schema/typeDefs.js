const path = require('path')
const { loadFilesSync } = require('@graphql-tools/load-files')
const { mergeTypeDefs } = require('@graphql-tools/merge')
 
const typesArray = loadFilesSync(__dirname, { extensions: ['gql'] })
module.exports = mergeTypeDefs(typesArray)