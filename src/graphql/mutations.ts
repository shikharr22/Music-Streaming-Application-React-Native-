/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createALbumCategory = /* GraphQL */ `
  mutation CreateALbumCategory(
    $input: CreateALbumCategoryInput!
    $condition: ModelALbumCategoryConditionInput
  ) {
    createALbumCategory(input: $input, condition: $condition) {
      id
      title
      albums {
        items {
          id
          name
          by
          numberOfLikes
          imageUri
          artistHeadline
          albumCategoryId
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
export const updateALbumCategory = /* GraphQL */ `
  mutation UpdateALbumCategory(
    $input: UpdateALbumCategoryInput!
    $condition: ModelALbumCategoryConditionInput
  ) {
    updateALbumCategory(input: $input, condition: $condition) {
      id
      title
      albums {
        items {
          id
          name
          by
          numberOfLikes
          imageUri
          artistHeadline
          albumCategoryId
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
export const deleteALbumCategory = /* GraphQL */ `
  mutation DeleteALbumCategory(
    $input: DeleteALbumCategoryInput!
    $condition: ModelALbumCategoryConditionInput
  ) {
    deleteALbumCategory(input: $input, condition: $condition) {
      id
      title
      albums {
        items {
          id
          name
          by
          numberOfLikes
          imageUri
          artistHeadline
          albumCategoryId
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
export const createAlbum = /* GraphQL */ `
  mutation CreateAlbum(
    $input: CreateAlbumInput!
    $condition: ModelAlbumConditionInput
  ) {
    createAlbum(input: $input, condition: $condition) {
      id
      name
      by
      numberOfLikes
      imageUri
      artistHeadline
      songs {
        items {
          id
          imageUri
          uri
          title
          artist
          albumId
          createdAt
          updatedAt
        }
        nextToken
      }
      albumCategoryId
      albumCategory {
        id
        title
        albums {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateAlbum = /* GraphQL */ `
  mutation UpdateAlbum(
    $input: UpdateAlbumInput!
    $condition: ModelAlbumConditionInput
  ) {
    updateAlbum(input: $input, condition: $condition) {
      id
      name
      by
      numberOfLikes
      imageUri
      artistHeadline
      songs {
        items {
          id
          imageUri
          uri
          title
          artist
          albumId
          createdAt
          updatedAt
        }
        nextToken
      }
      albumCategoryId
      albumCategory {
        id
        title
        albums {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteAlbum = /* GraphQL */ `
  mutation DeleteAlbum(
    $input: DeleteAlbumInput!
    $condition: ModelAlbumConditionInput
  ) {
    deleteAlbum(input: $input, condition: $condition) {
      id
      name
      by
      numberOfLikes
      imageUri
      artistHeadline
      songs {
        items {
          id
          imageUri
          uri
          title
          artist
          albumId
          createdAt
          updatedAt
        }
        nextToken
      }
      albumCategoryId
      albumCategory {
        id
        title
        albums {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createSong = /* GraphQL */ `
  mutation CreateSong(
    $input: CreateSongInput!
    $condition: ModelSongConditionInput
  ) {
    createSong(input: $input, condition: $condition) {
      id
      imageUri
      uri
      title
      artist
      albumId
      album {
        id
        name
        by
        numberOfLikes
        imageUri
        artistHeadline
        songs {
          nextToken
        }
        albumCategoryId
        albumCategory {
          id
          title
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateSong = /* GraphQL */ `
  mutation UpdateSong(
    $input: UpdateSongInput!
    $condition: ModelSongConditionInput
  ) {
    updateSong(input: $input, condition: $condition) {
      id
      imageUri
      uri
      title
      artist
      albumId
      album {
        id
        name
        by
        numberOfLikes
        imageUri
        artistHeadline
        songs {
          nextToken
        }
        albumCategoryId
        albumCategory {
          id
          title
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteSong = /* GraphQL */ `
  mutation DeleteSong(
    $input: DeleteSongInput!
    $condition: ModelSongConditionInput
  ) {
    deleteSong(input: $input, condition: $condition) {
      id
      imageUri
      uri
      title
      artist
      albumId
      album {
        id
        name
        by
        numberOfLikes
        imageUri
        artistHeadline
        songs {
          nextToken
        }
        albumCategoryId
        albumCategory {
          id
          title
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
