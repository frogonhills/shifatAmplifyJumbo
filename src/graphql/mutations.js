/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCoreData = /* GraphQL */ `
  mutation CreateCoreData(
    $input: CreateCoreDataInput!
    $condition: ModelCoreDataConditionInput
  ) {
    createCoreData(input: $input, condition: $condition) {
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
export const updateCoreData = /* GraphQL */ `
  mutation UpdateCoreData(
    $input: UpdateCoreDataInput!
    $condition: ModelCoreDataConditionInput
  ) {
    updateCoreData(input: $input, condition: $condition) {
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
export const deleteCoreData = /* GraphQL */ `
  mutation DeleteCoreData(
    $input: DeleteCoreDataInput!
    $condition: ModelCoreDataConditionInput
  ) {
    deleteCoreData(input: $input, condition: $condition) {
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
export const createValidation = /* GraphQL */ `
  mutation CreateValidation(
    $input: CreateValidationInput!
    $condition: ModelValidationConditionInput
  ) {
    createValidation(input: $input, condition: $condition) {
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
export const updateValidation = /* GraphQL */ `
  mutation UpdateValidation(
    $input: UpdateValidationInput!
    $condition: ModelValidationConditionInput
  ) {
    updateValidation(input: $input, condition: $condition) {
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
export const deleteValidation = /* GraphQL */ `
  mutation DeleteValidation(
    $input: DeleteValidationInput!
    $condition: ModelValidationConditionInput
  ) {
    deleteValidation(input: $input, condition: $condition) {
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
