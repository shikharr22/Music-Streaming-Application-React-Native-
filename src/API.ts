/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateALbumCategoryInput = {
  id?: string | null,
  title: string,
};

export type ModelALbumCategoryConditionInput = {
  title?: ModelStringInput | null,
  and?: Array< ModelALbumCategoryConditionInput | null > | null,
  or?: Array< ModelALbumCategoryConditionInput | null > | null,
  not?: ModelALbumCategoryConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ALbumCategory = {
  __typename: "ALbumCategory",
  id: string,
  title: string,
  albums?: ModelAlbumConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelAlbumConnection = {
  __typename: "ModelAlbumConnection",
  items?:  Array<Album | null > | null,
  nextToken?: string | null,
};

export type Album = {
  __typename: "Album",
  id: string,
  name: string,
  by: string,
  numberOfLikes: number,
  imageUri: string,
  artistHeadline: string,
  songs?: ModelSongConnection | null,
  albumCategoryId: string,
  albumCategory?: ALbumCategory | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelSongConnection = {
  __typename: "ModelSongConnection",
  items?:  Array<Song | null > | null,
  nextToken?: string | null,
};

export type Song = {
  __typename: "Song",
  id: string,
  imageUri: string,
  uri: string,
  title: string,
  artist: string,
  albumId: string,
  album?: Album | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateALbumCategoryInput = {
  id: string,
  title?: string | null,
};

export type DeleteALbumCategoryInput = {
  id: string,
};

export type CreateAlbumInput = {
  id?: string | null,
  name: string,
  by: string,
  numberOfLikes: number,
  imageUri: string,
  artistHeadline: string,
  albumCategoryId: string,
};

export type ModelAlbumConditionInput = {
  name?: ModelStringInput | null,
  by?: ModelStringInput | null,
  numberOfLikes?: ModelIntInput | null,
  imageUri?: ModelStringInput | null,
  artistHeadline?: ModelStringInput | null,
  albumCategoryId?: ModelIDInput | null,
  and?: Array< ModelAlbumConditionInput | null > | null,
  or?: Array< ModelAlbumConditionInput | null > | null,
  not?: ModelAlbumConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateAlbumInput = {
  id: string,
  name?: string | null,
  by?: string | null,
  numberOfLikes?: number | null,
  imageUri?: string | null,
  artistHeadline?: string | null,
  albumCategoryId?: string | null,
};

export type DeleteAlbumInput = {
  id: string,
};

export type CreateSongInput = {
  id?: string | null,
  imageUri: string,
  uri: string,
  title: string,
  artist: string,
  albumId: string,
};

export type ModelSongConditionInput = {
  imageUri?: ModelStringInput | null,
  uri?: ModelStringInput | null,
  title?: ModelStringInput | null,
  artist?: ModelStringInput | null,
  albumId?: ModelIDInput | null,
  and?: Array< ModelSongConditionInput | null > | null,
  or?: Array< ModelSongConditionInput | null > | null,
  not?: ModelSongConditionInput | null,
};

export type UpdateSongInput = {
  id: string,
  imageUri?: string | null,
  uri?: string | null,
  title?: string | null,
  artist?: string | null,
  albumId?: string | null,
};

export type DeleteSongInput = {
  id: string,
};

export type ModelALbumCategoryFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  and?: Array< ModelALbumCategoryFilterInput | null > | null,
  or?: Array< ModelALbumCategoryFilterInput | null > | null,
  not?: ModelALbumCategoryFilterInput | null,
};

export type ModelALbumCategoryConnection = {
  __typename: "ModelALbumCategoryConnection",
  items?:  Array<ALbumCategory | null > | null,
  nextToken?: string | null,
};

export type ModelAlbumFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  by?: ModelStringInput | null,
  numberOfLikes?: ModelIntInput | null,
  imageUri?: ModelStringInput | null,
  artistHeadline?: ModelStringInput | null,
  albumCategoryId?: ModelIDInput | null,
  and?: Array< ModelAlbumFilterInput | null > | null,
  or?: Array< ModelAlbumFilterInput | null > | null,
  not?: ModelAlbumFilterInput | null,
};

export type ModelSongFilterInput = {
  id?: ModelIDInput | null,
  imageUri?: ModelStringInput | null,
  uri?: ModelStringInput | null,
  title?: ModelStringInput | null,
  artist?: ModelStringInput | null,
  albumId?: ModelIDInput | null,
  and?: Array< ModelSongFilterInput | null > | null,
  or?: Array< ModelSongFilterInput | null > | null,
  not?: ModelSongFilterInput | null,
};

export type CreateALbumCategoryMutationVariables = {
  input: CreateALbumCategoryInput,
  condition?: ModelALbumCategoryConditionInput | null,
};

export type CreateALbumCategoryMutation = {
  createALbumCategory?:  {
    __typename: "ALbumCategory",
    id: string,
    title: string,
    albums?:  {
      __typename: "ModelAlbumConnection",
      items?:  Array< {
        __typename: "Album",
        id: string,
        name: string,
        by: string,
        numberOfLikes: number,
        imageUri: string,
        artistHeadline: string,
        albumCategoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateALbumCategoryMutationVariables = {
  input: UpdateALbumCategoryInput,
  condition?: ModelALbumCategoryConditionInput | null,
};

export type UpdateALbumCategoryMutation = {
  updateALbumCategory?:  {
    __typename: "ALbumCategory",
    id: string,
    title: string,
    albums?:  {
      __typename: "ModelAlbumConnection",
      items?:  Array< {
        __typename: "Album",
        id: string,
        name: string,
        by: string,
        numberOfLikes: number,
        imageUri: string,
        artistHeadline: string,
        albumCategoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteALbumCategoryMutationVariables = {
  input: DeleteALbumCategoryInput,
  condition?: ModelALbumCategoryConditionInput | null,
};

export type DeleteALbumCategoryMutation = {
  deleteALbumCategory?:  {
    __typename: "ALbumCategory",
    id: string,
    title: string,
    albums?:  {
      __typename: "ModelAlbumConnection",
      items?:  Array< {
        __typename: "Album",
        id: string,
        name: string,
        by: string,
        numberOfLikes: number,
        imageUri: string,
        artistHeadline: string,
        albumCategoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAlbumMutationVariables = {
  input: CreateAlbumInput,
  condition?: ModelAlbumConditionInput | null,
};

export type CreateAlbumMutation = {
  createAlbum?:  {
    __typename: "Album",
    id: string,
    name: string,
    by: string,
    numberOfLikes: number,
    imageUri: string,
    artistHeadline: string,
    songs?:  {
      __typename: "ModelSongConnection",
      items?:  Array< {
        __typename: "Song",
        id: string,
        imageUri: string,
        uri: string,
        title: string,
        artist: string,
        albumId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    albumCategoryId: string,
    albumCategory?:  {
      __typename: "ALbumCategory",
      id: string,
      title: string,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAlbumMutationVariables = {
  input: UpdateAlbumInput,
  condition?: ModelAlbumConditionInput | null,
};

export type UpdateAlbumMutation = {
  updateAlbum?:  {
    __typename: "Album",
    id: string,
    name: string,
    by: string,
    numberOfLikes: number,
    imageUri: string,
    artistHeadline: string,
    songs?:  {
      __typename: "ModelSongConnection",
      items?:  Array< {
        __typename: "Song",
        id: string,
        imageUri: string,
        uri: string,
        title: string,
        artist: string,
        albumId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    albumCategoryId: string,
    albumCategory?:  {
      __typename: "ALbumCategory",
      id: string,
      title: string,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAlbumMutationVariables = {
  input: DeleteAlbumInput,
  condition?: ModelAlbumConditionInput | null,
};

export type DeleteAlbumMutation = {
  deleteAlbum?:  {
    __typename: "Album",
    id: string,
    name: string,
    by: string,
    numberOfLikes: number,
    imageUri: string,
    artistHeadline: string,
    songs?:  {
      __typename: "ModelSongConnection",
      items?:  Array< {
        __typename: "Song",
        id: string,
        imageUri: string,
        uri: string,
        title: string,
        artist: string,
        albumId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    albumCategoryId: string,
    albumCategory?:  {
      __typename: "ALbumCategory",
      id: string,
      title: string,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSongMutationVariables = {
  input: CreateSongInput,
  condition?: ModelSongConditionInput | null,
};

export type CreateSongMutation = {
  createSong?:  {
    __typename: "Song",
    id: string,
    imageUri: string,
    uri: string,
    title: string,
    artist: string,
    albumId: string,
    album?:  {
      __typename: "Album",
      id: string,
      name: string,
      by: string,
      numberOfLikes: number,
      imageUri: string,
      artistHeadline: string,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      albumCategoryId: string,
      albumCategory?:  {
        __typename: "ALbumCategory",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSongMutationVariables = {
  input: UpdateSongInput,
  condition?: ModelSongConditionInput | null,
};

export type UpdateSongMutation = {
  updateSong?:  {
    __typename: "Song",
    id: string,
    imageUri: string,
    uri: string,
    title: string,
    artist: string,
    albumId: string,
    album?:  {
      __typename: "Album",
      id: string,
      name: string,
      by: string,
      numberOfLikes: number,
      imageUri: string,
      artistHeadline: string,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      albumCategoryId: string,
      albumCategory?:  {
        __typename: "ALbumCategory",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSongMutationVariables = {
  input: DeleteSongInput,
  condition?: ModelSongConditionInput | null,
};

export type DeleteSongMutation = {
  deleteSong?:  {
    __typename: "Song",
    id: string,
    imageUri: string,
    uri: string,
    title: string,
    artist: string,
    albumId: string,
    album?:  {
      __typename: "Album",
      id: string,
      name: string,
      by: string,
      numberOfLikes: number,
      imageUri: string,
      artistHeadline: string,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      albumCategoryId: string,
      albumCategory?:  {
        __typename: "ALbumCategory",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetALbumCategoryQueryVariables = {
  id: string,
};

export type GetALbumCategoryQuery = {
  getALbumCategory?:  {
    __typename: "ALbumCategory",
    id: string,
    title: string,
    albums?:  {
      __typename: "ModelAlbumConnection",
      items?:  Array< {
        __typename: "Album",
        id: string,
        name: string,
        by: string,
        numberOfLikes: number,
        imageUri: string,
        artistHeadline: string,
        albumCategoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListALbumCategoriesQueryVariables = {
  filter?: ModelALbumCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListALbumCategoriesQuery = {
  listALbumCategories?:  {
    __typename: "ModelALbumCategoryConnection",
    items?:  Array< {
      __typename: "ALbumCategory",
      id: string,
      title: string,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetAlbumQueryVariables = {
  id: string,
};

export type GetAlbumQuery = {
  getAlbum?:  {
    __typename: "Album",
    id: string,
    name: string,
    by: string,
    numberOfLikes: number,
    imageUri: string,
    artistHeadline: string,
    songs?:  {
      __typename: "ModelSongConnection",
      items?:  Array< {
        __typename: "Song",
        id: string,
        imageUri: string,
        uri: string,
        title: string,
        artist: string,
        albumId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    albumCategoryId: string,
    albumCategory?:  {
      __typename: "ALbumCategory",
      id: string,
      title: string,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAlbumsQueryVariables = {
  filter?: ModelAlbumFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAlbumsQuery = {
  listAlbums?:  {
    __typename: "ModelAlbumConnection",
    items?:  Array< {
      __typename: "Album",
      id: string,
      name: string,
      by: string,
      numberOfLikes: number,
      imageUri: string,
      artistHeadline: string,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      albumCategoryId: string,
      albumCategory?:  {
        __typename: "ALbumCategory",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetSongQueryVariables = {
  id: string,
};

export type GetSongQuery = {
  getSong?:  {
    __typename: "Song",
    id: string,
    imageUri: string,
    uri: string,
    title: string,
    artist: string,
    albumId: string,
    album?:  {
      __typename: "Album",
      id: string,
      name: string,
      by: string,
      numberOfLikes: number,
      imageUri: string,
      artistHeadline: string,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      albumCategoryId: string,
      albumCategory?:  {
        __typename: "ALbumCategory",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSongsQueryVariables = {
  filter?: ModelSongFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSongsQuery = {
  listSongs?:  {
    __typename: "ModelSongConnection",
    items?:  Array< {
      __typename: "Song",
      id: string,
      imageUri: string,
      uri: string,
      title: string,
      artist: string,
      albumId: string,
      album?:  {
        __typename: "Album",
        id: string,
        name: string,
        by: string,
        numberOfLikes: number,
        imageUri: string,
        artistHeadline: string,
        albumCategoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateALbumCategorySubscription = {
  onCreateALbumCategory?:  {
    __typename: "ALbumCategory",
    id: string,
    title: string,
    albums?:  {
      __typename: "ModelAlbumConnection",
      items?:  Array< {
        __typename: "Album",
        id: string,
        name: string,
        by: string,
        numberOfLikes: number,
        imageUri: string,
        artistHeadline: string,
        albumCategoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateALbumCategorySubscription = {
  onUpdateALbumCategory?:  {
    __typename: "ALbumCategory",
    id: string,
    title: string,
    albums?:  {
      __typename: "ModelAlbumConnection",
      items?:  Array< {
        __typename: "Album",
        id: string,
        name: string,
        by: string,
        numberOfLikes: number,
        imageUri: string,
        artistHeadline: string,
        albumCategoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteALbumCategorySubscription = {
  onDeleteALbumCategory?:  {
    __typename: "ALbumCategory",
    id: string,
    title: string,
    albums?:  {
      __typename: "ModelAlbumConnection",
      items?:  Array< {
        __typename: "Album",
        id: string,
        name: string,
        by: string,
        numberOfLikes: number,
        imageUri: string,
        artistHeadline: string,
        albumCategoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAlbumSubscription = {
  onCreateAlbum?:  {
    __typename: "Album",
    id: string,
    name: string,
    by: string,
    numberOfLikes: number,
    imageUri: string,
    artistHeadline: string,
    songs?:  {
      __typename: "ModelSongConnection",
      items?:  Array< {
        __typename: "Song",
        id: string,
        imageUri: string,
        uri: string,
        title: string,
        artist: string,
        albumId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    albumCategoryId: string,
    albumCategory?:  {
      __typename: "ALbumCategory",
      id: string,
      title: string,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAlbumSubscription = {
  onUpdateAlbum?:  {
    __typename: "Album",
    id: string,
    name: string,
    by: string,
    numberOfLikes: number,
    imageUri: string,
    artistHeadline: string,
    songs?:  {
      __typename: "ModelSongConnection",
      items?:  Array< {
        __typename: "Song",
        id: string,
        imageUri: string,
        uri: string,
        title: string,
        artist: string,
        albumId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    albumCategoryId: string,
    albumCategory?:  {
      __typename: "ALbumCategory",
      id: string,
      title: string,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAlbumSubscription = {
  onDeleteAlbum?:  {
    __typename: "Album",
    id: string,
    name: string,
    by: string,
    numberOfLikes: number,
    imageUri: string,
    artistHeadline: string,
    songs?:  {
      __typename: "ModelSongConnection",
      items?:  Array< {
        __typename: "Song",
        id: string,
        imageUri: string,
        uri: string,
        title: string,
        artist: string,
        albumId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    albumCategoryId: string,
    albumCategory?:  {
      __typename: "ALbumCategory",
      id: string,
      title: string,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSongSubscription = {
  onCreateSong?:  {
    __typename: "Song",
    id: string,
    imageUri: string,
    uri: string,
    title: string,
    artist: string,
    albumId: string,
    album?:  {
      __typename: "Album",
      id: string,
      name: string,
      by: string,
      numberOfLikes: number,
      imageUri: string,
      artistHeadline: string,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      albumCategoryId: string,
      albumCategory?:  {
        __typename: "ALbumCategory",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSongSubscription = {
  onUpdateSong?:  {
    __typename: "Song",
    id: string,
    imageUri: string,
    uri: string,
    title: string,
    artist: string,
    albumId: string,
    album?:  {
      __typename: "Album",
      id: string,
      name: string,
      by: string,
      numberOfLikes: number,
      imageUri: string,
      artistHeadline: string,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      albumCategoryId: string,
      albumCategory?:  {
        __typename: "ALbumCategory",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSongSubscription = {
  onDeleteSong?:  {
    __typename: "Song",
    id: string,
    imageUri: string,
    uri: string,
    title: string,
    artist: string,
    albumId: string,
    album?:  {
      __typename: "Album",
      id: string,
      name: string,
      by: string,
      numberOfLikes: number,
      imageUri: string,
      artistHeadline: string,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      albumCategoryId: string,
      albumCategory?:  {
        __typename: "ALbumCategory",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
