/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCoreData = /* GraphQL */ `
  subscription OnCreateCoreData {
    onCreateCoreData {
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
export const onUpdateCoreData = /* GraphQL */ `
  subscription OnUpdateCoreData {
    onUpdateCoreData {
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
export const onDeleteCoreData = /* GraphQL */ `
  subscription OnDeleteCoreData {
    onDeleteCoreData {
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
export const onCreateValidation = /* GraphQL */ `
  subscription OnCreateValidation {
    onCreateValidation {
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
export const onUpdateValidation = /* GraphQL */ `
  subscription OnUpdateValidation {
    onUpdateValidation {
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
export const onDeleteValidation = /* GraphQL */ `
  subscription OnDeleteValidation {
    onDeleteValidation {
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
