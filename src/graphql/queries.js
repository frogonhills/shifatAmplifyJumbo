/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCoreData = /* GraphQL */ `
  query GetCoreData($id: ID!) {
    getCoreData(id: $id) {
      id
      name
      address
      email
      type
      Stage
      validation {
        items {
          id
          validationID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCoreDatas = /* GraphQL */ `
  query ListCoreDatas(
    $filter: ModelCoreDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCoreDatas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        address
        email
        type
        Stage
        validation {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getValidation = /* GraphQL */ `
  query GetValidation($id: ID!) {
    getValidation(id: $id) {
      id
      validationID
      coreData {
        id
        name
        address
        email
        type
        Stage
        validation {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
    }
  }
`;
export const listValidations = /* GraphQL */ `
  query ListValidations(
    $filter: ModelValidationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listValidations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        validationID
        coreData {
          id
          name
          address
          email
          type
          Stage
          createdAt
          updatedAt
        }
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
